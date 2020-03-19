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

    public UserDetails loadUserByUsername(String userPk) {
        return employeesRepository.findById(Long.valueOf(userPk)).orElseThrow(CUserNotFoundException::new);
    }

}
