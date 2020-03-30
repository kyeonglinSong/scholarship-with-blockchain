package kr.ac.becaforfoundation.web;


import kr.ac.becaforfoundation.advice.CIdSigninFailedException;
import kr.ac.becaforfoundation.config.security.JwtTokenProvider;
import kr.ac.becaforfoundation.domain.users.Employees;
import kr.ac.becaforfoundation.domain.users.EmployeesRepository;
import kr.ac.becaforfoundation.response.CommonResult;
import kr.ac.becaforfoundation.response.SingleResult;
import kr.ac.becaforfoundation.service.LoginService;
import kr.ac.becaforfoundation.service.ResponseService;
import kr.ac.becaforfoundation.web.dto.usersDto.EmployeesSaveRequestDto;
import kr.ac.becaforfoundation.web.dto.usersDto.LoginResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
@RequestMapping(value="/foundation")
public class UserController {


    private final JwtTokenProvider jwtTokenProvider;
    private final ResponseService responseService;
    private final PasswordEncoder passwordEncoder;
    private final LoginService loginService;
    private final EmployeesRepository employeesRepository;

    // 계정 생성
    @PostMapping(value = "/signup")
    public CommonResult emplyoeeSignup (@RequestBody EmployeesSaveRequestDto requestDto) {

        loginService.employeeSave(requestDto);
        return responseService.getSuccessResult();

    }
    // 로그인
    @PostMapping(value="/signin")
    public SingleResult<LoginResponseDto> employeesSignin(@RequestBody EmployeesSaveRequestDto requestDto) {

        Employees employee = employeesRepository.findByUserId(requestDto.getUserId()).orElseThrow(CIdSigninFailedException::new);
        if (!passwordEncoder.matches(requestDto.getPassword(), employee.getPassword()) )
            throw new CIdSigninFailedException();

        // 토큰이랑 권한을 data dto에 담아줌.
        String token = jwtTokenProvider.createToken(String.valueOf(employee.getUserId()), employee.getRole());
        String authority = employee.getRole().get(0);
        LoginResponseDto responseDto = new LoginResponseDto(token, authority);

        return responseService.getSingleResult(responseDto);

    }

}
