package com.univ.exam.config;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService  {

    private static final String SECRET_KEY = "c44b7ed56edd0c3490095f8a94c26959fe60b3defea0b1b4da741a70eb97d334";
    private static final int EXPIRE_AT = 1000 * 60 * 24;


    private String generateToken (Map<String , Object> claims , UserDetails userDetails) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRE_AT))
                .signWith(getSignInKey() , SignatureAlgorithm.HS256)
                .compact();
    }

    private String generateToken (UserDetails userDetails) {
        return generateToken(new HashMap<>() , userDetails);
    }

    private boolean isTokenValid (String token , UserDetails userDetails) {
        final String username = extractUsername(token);
        return userDetails.getUsername().equals(username) && !isTokenExpired(token);
    }

    private boolean isTokenExpired (String token) {
        return extractExpiration(token).before(new Date());
    }

    private <T> T extractClaim (String token , Function<Claims , T> claimResolver) {
        final Claims claims = extractClaims(token);
        return claimResolver.apply(claims);
    }

    public String extractUsername (String token) {
        return extractClaim(token , Claims::getSubject);
    }
    public Date extractExpiration (String token) {
        return extractClaim(token , Claims::getExpiration);
    }

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
