package com.univ.exam.config.filters;

import com.univ.exam.config.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;


@Component
@RequiredArgsConstructor
class JwtAuthenticationFilter extends OncePerRequestFilter {


    private final JwtService jwtService;

    @Override
    protected void doFilterInternal
            (@NonNull HttpServletRequest request,
             @NonNull HttpServletResponse response,
             @NonNull FilterChain filterChain)
            throws ServletException, IOException
    {
        final String autHeader = request.getHeader("authorization");
        final String token;
        final String username;

        if (autHeader == null || !autHeader.startsWith("bearer ")) {
            filterChain.doFilter(request ,response);
            return;
        }
        token = autHeader.substring(7);
        username = jwtService.extractUsername(token);

    }
}