package kr.ac.becaforschool.web;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import kr.ac.becaforschool.advice.CIdSigninFailedException;
import kr.ac.becaforschool.config.security.JwtTokenProvider;
import kr.ac.becaforschool.domain.users.Employees;
import kr.ac.becaforschool.domain.users.EmployeesRepository;
import kr.ac.becaforschool.domain.users.Students;
import kr.ac.becaforschool.domain.users.StudentsRepository;
import kr.ac.becaforschool.model.response.CommonResult;
import kr.ac.becaforschool.model.response.SingleResult;
import kr.ac.becaforschool.service.LoginService;
import kr.ac.becaforschool.service.ResponseService;

import kr.ac.becaforschool.web.dto.usersDto.StudentsLoginRequestDto;
import kr.ac.becaforschool.web.dto.usersDto.StudentsSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@Api(tags = {"Singup"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value="/school")
public class LoginController {

    private final StudentsRepository studentsRepository;
    private final EmployeesRepository employeesRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final ResponseService responseService;
    private final PasswordEncoder passwordEncoder;


    @GetMapping(value="/admin/signin")
    public SingleResult<String> employeesSignin(@RequestBody StudentsLoginRequestDto requestDto) {

        Employees employee = employeesRepository.findByUserId(requestDto.getUserId()).orElseThrow(CIdSigninFailedException::new);
        if (!passwordEncoder.matches(requestDto.getPassword(), employee.getPassword()) )
            throw new CIdSigninFailedException();

        return responseService.getSingleResult(jwtTokenProvider.createToken(String.valueOf(employee.getId()), employee.getRole()));

    }

    @GetMapping(value="/student/signin")
    public SingleResult<String> signin(@RequestBody StudentsLoginRequestDto requestDto) {

        Students student = studentsRepository.findByUserId(requestDto.getUserId()).orElseThrow(CIdSigninFailedException::new);
        if (!passwordEncoder.matches(requestDto.getPassword(), student.getPassword()) )
            throw new CIdSigninFailedException();

        return responseService.getSingleResult(jwtTokenProvider.createToken(String.valueOf(student.getId()), student.getRole()));

    }

}
