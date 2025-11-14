package com.univ.exam.config;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService  {

    @Value("${jwt.secret}")
    private  String SECRET_KEY;
    private static final int EXPIRE_AT = 1000 * 60 * 24;


    /**
     *
     * Generates JWT token for authenticated user.
     *
     * This methode builds a signed JWT containing custom claims & standard (Registered) ones
     * such as subject (username) & issued-at timestamp, and expiration.
     *
     * @param claims Additional data to embed into token (Custom claims)
     * @param userDetails User information used to construct the token, Typically containing  (username , password , authorities)
     * @return a signed JWT token as String
     *
     */
    private String generateToken (Map<String , Object> claims , UserDetails userDetails) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRE_AT))
                .signWith(getSignInKey() , SignatureAlgorithm.HS256)
                .compact();
    }

    /**
     *
     * Generates JWT token for authenticated user without embedding any additional custom claims.
     *
     */
    private String generateToken (UserDetails userDetails) {
        return generateToken(new HashMap<>() , userDetails);
    }

    /**
     * Validates JWT token by checking two conditions :
     *
     * <ul>
     *  <li>The username contained in JWT token is equals to the authenticated User's username.</li>
     *  <li>JWT token has not expired.</li>
     * </ul>
     *
     * @param token the JWT token to validate.
     * @param userDetails the authenticated User's information.
     * @return {@code true} if the token is valid, {@code false} otherwise.
     */
    private boolean isTokenValid (String token , UserDetails userDetails) {
        final String username = extractUsername(token);
        return userDetails.getUsername().equals(username) && !isTokenExpired(token);
    }

    /**
     * Checks whether JWT token is expired or not.
     *
     * @param token JWT token from which to extract the expiration time.
     * @return {@code true} if token's expiration date is before the current time
     *         {@code false} otherwise
     */
    private boolean isTokenExpired (String token) {
        return extractExpiration(token).before(new Date());
    }

    /**
     * Extract specific claim (data) from JWT token
     *
     * <p>
     * This methode parses token to get all claims, then uses the provided
     * {@code claimResolver} to get particular value from the extracted claims.
     * It allows extracting any type of claims (String , Date , Boolean, etc.) </p>
     *
     * @param token JWT token from which the claims will be extracted.
     * @param claimResolver function to specify which claim to extract ex : (Claims::getExpiration).
     * @param <T> the type of claims to be returned
     * @return extracted claim.
     */
    private <T> T extractClaim (String token , Function<Claims , T> claimResolver) {
        final Claims claims = extractClaims(token);
        return claimResolver.apply(claims);
    }

    /**
     * Extract the username (subject) from a JWT token.
     *
     * <p>This methode delegate to {@code extractClaim(token , Function)} by passing token & resolver function
     * to get subject claim (username) </p>
     *
     * @param token JWT token
     * @return subject claim (username) embedded in JWT token
     */
    public String extractUsername (String token) {
        return extractClaim(token , Claims::getSubject);
    }

    /**
     * Extract the expiration date time (subject) from a JWT token.
     *
     * <p>This methode delegate to {@code extractClaim(token , Function)} by passing token & resolver function
     * to get expiration date time claim.</p>
     *
     * @param token JWT token
     * @return expiration claim embedded in JWT token
     */
    public Date extractExpiration (String token) {
        return extractClaim(token , Claims::getExpiration);
    }

    /**
     * Extract all claims from a given JWT token.
     *
     * <p>This method parses the token using the signing key to validate its authenticity
     * and then returns all the claims contained in the token.</p>
     *
     * @param token the JWT token from which to extract claims
     * @return a {@code claims}  object containing all embedded data in the token
     */
    private Claims extractClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keysBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keysBytes);
    }

}
