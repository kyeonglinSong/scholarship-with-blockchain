package kr.ac.becaforschool.web;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import kr.ac.becaforschool.config.security.JwtTokenProvider;
import kr.ac.becaforschool.domain.users.StudentsRepository;
import kr.ac.becaforschool.model.response.CommonResult;
import kr.ac.becaforschool.service.LoginService;
import kr.ac.becaforschool.service.ResponseService;
import kr.ac.becaforschool.web.dto.usersDto.EmployeesSaveRequestDto;
import kr.ac.becaforschool.web.dto.usersDto.StudentsSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
@RequestMapping(value="/school")
public class makeUserController {


    private final StudentsRepository studentsRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final ResponseService responseService;
    private final PasswordEncoder passwordEncoder;
    private final LoginService loginService;

    // 어드민 생성
    @PostMapping(value = "/admin/signup")
    public CommonResult emplyoeeSignup (@RequestBody EmployeesSaveRequestDto requestDto) {

        loginService.employeeSave(requestDto);
        return responseService.getSuccessResult();

    }

    // 학생 생성, 어드민 계정 있어야 함
    @PostMapping(value = "/student/signup")
    public CommonResult stduentSignup (@RequestBody StudentsSaveRequestDto requestDto) {

        loginService.studentSave(requestDto);
        return responseService.getSuccessResult();

    }



}
