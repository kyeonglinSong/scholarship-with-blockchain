package kr.ac.becaforfoundation.service.security;


import kr.ac.becaforfoundation.advice.CUserNotFoundException;
import kr.ac.becaforfoundation.domain.users.EmployeesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CustomUserDetailService implements UserDetailsService {

    private final EmployeesRepository employeesRepository;

    public UserDetails loadUserByUsername(String userId) {
            return employeesRepository.findByUserId(userId).orElseThrow(CUserNotFoundException::new);

    }

}
