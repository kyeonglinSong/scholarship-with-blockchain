package kr.ac.becaforfoundation.service;


import kr.ac.becaforfoundation.domain.users.EmployeesRepository;
import kr.ac.becaforfoundation.web.dto.usersDto.EmployeesSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class LoginService {
    private final EmployeesRepository employeesRepository;

    @Transactional
    public void employeeSave(EmployeesSaveRequestDto requestDto) {
        employeesRepository.save(requestDto.toEntity());
    }


}
