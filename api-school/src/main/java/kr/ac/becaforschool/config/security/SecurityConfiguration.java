package kr.ac.becaforschool.config.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@RequiredArgsConstructor
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic().disable() // 기본설정 사용 안함.
                .csrf().disable() // csrf 보안 사용 안 함.
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 세션 생성 안 함.
                .and()
                .authorizeRequests() // 다음 리퀘스트의 사용권한 체크
                // 로그인 안해도 이용 가능
                .antMatchers("/school/admin/signin","/school/student/signin", "/school/admin/signup").permitAll()
                // ADMIN ONLY
                .antMatchers( "/school/applyings/*", "/school/student/signup").hasAuthority("ADMIN")
                // 둘 다
                .anyRequest().hasAnyAuthority("STUDENT", "ADMIN")
                .and()
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    public void configure(WebSecurity web) {
        web.ignoring().antMatchers("/swagger-ui.html", "/swagger/**", "swagger-resources/**");
    }
}
