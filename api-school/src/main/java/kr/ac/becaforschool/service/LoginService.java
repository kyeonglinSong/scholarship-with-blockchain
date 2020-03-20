package kr.ac.becaforschool.service;

import kr.ac.becaforschool.domain.users.EmployeesRepository;
import kr.ac.becaforschool.domain.users.StudentsRepository;

import kr.ac.becaforschool.web.dto.usersDto.EmployeesSaveRequestDto;
import kr.ac.becaforschool.web.dto.usersDto.StudentsSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class LoginService {


    private final StudentsRepository studentsRepository;
    private final EmployeesRepository employeesRepository;


    @Transactional
    public void employeeSave(EmployeesSaveRequestDto requestDto) {
        employeesRepository.save(requestDto.toEntity());
    }

    @Transactional
    public void studentSave(StudentsSaveRequestDto requestDto) {

        studentsRepository.save(requestDto.toEntity());
    }


}
