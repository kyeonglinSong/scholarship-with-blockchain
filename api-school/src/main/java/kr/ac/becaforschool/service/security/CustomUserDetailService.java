package kr.ac.becaforschool.service.security;

import kr.ac.becaforschool.advice.CUserNotFoundException;
import kr.ac.becaforschool.domain.users.EmployeesRepository;
import kr.ac.becaforschool.domain.users.StudentsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CustomUserDetailService implements UserDetailsService {

    private final StudentsRepository studentsRepository;
    private final EmployeesRepository employeesRepository;

    public UserDetails loadUserByUsername(String userId) {
        if (userId.matches("a(.*)"))
            return employeesRepository.findByUserId(userId).orElseThrow(CUserNotFoundException::new);
        else
            return studentsRepository.findByUserId(userId).orElseThrow(CUserNotFoundException::new);
    }

}
