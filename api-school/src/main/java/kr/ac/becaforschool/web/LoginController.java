package kr.ac.becaforschool.web;


import kr.ac.becaforschool.advice.CIdSigninFailedException;
import kr.ac.becaforschool.config.security.JwtTokenProvider;
import kr.ac.becaforschool.domain.users.Employees;
import kr.ac.becaforschool.domain.users.EmployeesRepository;
import kr.ac.becaforschool.domain.users.Students;
import kr.ac.becaforschool.domain.users.StudentsRepository;
import kr.ac.becaforschool.model.response.SingleResult;
import kr.ac.becaforschool.service.ResponseService;

import kr.ac.becaforschool.web.dto.usersDto.LoginResponseDto;
import kr.ac.becaforschool.web.dto.usersDto.StudentsLoginRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
@RequestMapping(value="/school")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    private final StudentsRepository studentsRepository;
    private final EmployeesRepository employeesRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final ResponseService responseService;
    private final PasswordEncoder passwordEncoder;


    // 교직원 로그인i
    @PostMapping(value="/admin/signin")
    public SingleResult<LoginResponseDto> employeesSignin(@RequestBody StudentsLoginRequestDto requestDto) {

        Employees employee = employeesRepository.findByUserId(requestDto.getUserId()).orElseThrow(CIdSigninFailedException::new);
        if (!passwordEncoder.matches(requestDto.getPassword(), employee.getPassword()) )
            throw new CIdSigninFailedException();

        // 토큰이랑 권한을 data dto에 담아줌.
        String token = jwtTokenProvider.createToken(String.valueOf(employee.getUserId()), employee.getRole());
        String authority = employee.getRole().get(0);
        LoginResponseDto responseDto = new LoginResponseDto(token, authority);

        return responseService.getSingleResult(responseDto);

    }

    // 학생 로그인
    @PostMapping(value="/student/signin")
    public SingleResult<LoginResponseDto> studentSignin(@RequestBody StudentsLoginRequestDto requestDto) {

        Students student = studentsRepository.findByUserId(requestDto.getUserId()).orElseThrow(CIdSigninFailedException::new);
        if (!passwordEncoder.matches(requestDto.getPassword(), student.getPassword()) )
            throw new CIdSigninFailedException();


        // 토큰이랑 권한을 data dto에 담아줌.
        String token = jwtTokenProvider.createToken(String.valueOf(student.getUserId()), student.getRole());
        String authority = student.getRole().get(0);
        LoginResponseDto responseDto = new LoginResponseDto(token, authority);

        return responseService.getSingleResult(responseDto);
    }

}
