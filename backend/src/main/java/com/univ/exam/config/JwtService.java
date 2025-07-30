package com.univ.exam.config;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtService {

    @Value("${jwt.secret}")
    private static  String SECRET_KEY;
    private final  static long EXPIRATION_TIME_MS = 1000 * 60 * 30; // => 30 minutes

    public String generateToken (String email) {
        Map<String , Object> claims = new HashMap<>();
        return createToken(claims , email);
    }

    private String createToken (Map<String , Object> claims , String email ) {
       return Jwts
               .builder()
               .setClaims(claims)
               .setSubject(email)
               .setIssuedAt(new Date())
               .setExpiration(new Date (System.currentTimeMillis() + EXPIRATION_TIME_MS))
               .signWith(getSignKey() , SignatureAlgorithm.HS256)
               .compact();
    }

    public <T> T extractClaim (String token , Function<Claims , T> resolver) {
        final Claims claims = extractAllClaims(token);
        return resolver.apply(claims);
    }

    public Date extractExpiration (String token) {
        return extractClaim(token , Claims::getExpiration);
    }

    public String extractUsername (String token) {
        return extractClaim(token , Claims::getSubject);
    }

    public Claims extractAllClaims (String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignKey())
                .build()
                .parseClaimsJwt(token)
                .getBody();

    }

    private Key getSignKey() {
        byte[] keysBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keysBytes);
    }

    public boolean isExpiredToken (String token) {
        return extractExpiration(token).before(new Date());
    }

}
