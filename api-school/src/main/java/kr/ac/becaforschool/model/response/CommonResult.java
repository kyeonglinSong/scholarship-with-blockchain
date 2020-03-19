package kr.ac.becaforschool.model.response;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommonResult {

    @ApiModelProperty(value = "응답 성공여부")
    private boolean success;

    @ApiModelProperty(value= "응답 코드 : 0이상 정상, 0미만 비정상")
    private int code;

    @ApiModelProperty(value = "응답 메세지")
    private String msg;
}
