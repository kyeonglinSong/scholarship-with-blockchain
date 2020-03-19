package kr.ac.becaforschool.web;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import kr.ac.becaforschool.service.notices.NoticesService;
import kr.ac.becaforschool.web.dto.noticesDto.NoticesListResponseDto;
import kr.ac.becaforschool.web.dto.noticesDto.NoticesResponseDto;
import kr.ac.becaforschool.web.dto.noticesDto.NoticesSaveRequestDto;
import kr.ac.becaforschool.web.dto.noticesDto.NoticesUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = {"Notice"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value="/school")
public class NoticesController {

    private final NoticesService noticesService;

    //공지 리스트 불러오기
    @ApiOperation(value="공지 조회", notes="모든 공지를 조회한다.")
    @GetMapping("/notices")
    public List<NoticesListResponseDto> findAllDesc() {
        return noticesService.findAllDesc();
    }

    //공지 하나 불러오기
    @ApiOperation(value="공지 상세 조회", notes="id 값에 해당하는 공지를 상세 조회한다.")
    @GetMapping("/notices/{id}")
    public NoticesResponseDto findById(@PathVariable Long id) {
        return noticesService.findById(id);
    }

    //공지 등록
    @ApiOperation(value="공지 등록", notes="새 공지를 등록한다.")
    @PostMapping("/notices")
    public Long save(@RequestBody NoticesSaveRequestDto requestDto) {
        return noticesService.save(requestDto);
    }

    //공지 수정 : PUT / school/notices/{id}
    @ApiOperation(value="공지 수정", notes="id 값에 해당하는 공지를 수정한다.")
    @PutMapping("/notices/{id}")
    public Long update(@PathVariable Long id, @RequestBody NoticesUpdateRequestDto requestDto) {
        return noticesService.update(id, requestDto);
    }

    //공지 삭제
    @ApiOperation(value="공지 삭제", notes="id 값에 해당하는 공지를 삭제한다.")
    @DeleteMapping("/notices/{id}")
    public Long delete(@PathVariable Long id) {
        noticesService.delete(id);
        return id;
    }
}

