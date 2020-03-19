package kr.ac.becaforschool.service.notices;

import kr.ac.becaforschool.domain.notices.Notices;
import kr.ac.becaforschool.domain.notices.NoticesRepository;
import kr.ac.becaforschool.web.dto.noticesDto.NoticesListResponseDto;
import kr.ac.becaforschool.web.dto.noticesDto.NoticesResponseDto;
import kr.ac.becaforschool.web.dto.noticesDto.NoticesSaveRequestDto;
import kr.ac.becaforschool.web.dto.noticesDto.NoticesUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class NoticesService {

    // 레포지토리를 가져옴
    private final NoticesRepository noticesRepository;

    // create
    @Transactional
    public Long save(NoticesSaveRequestDto requestDto) {
        return noticesRepository.save(requestDto.toEntity()).getId();
    }

    // update
    @Transactional
    public Long update(Long id, NoticesUpdateRequestDto requestDto) {

        Notices notices = noticesRepository.findById(id).orElseThrow(()->new IllegalArgumentException("해당 사용자가 없습니다. id=" + id));
        notices.update(requestDto.getTitle(), requestDto.getContent());

        return id;
    }

    // read all
    @Transactional(readOnly = true)
    public List<NoticesListResponseDto> findAllDesc() {
        return noticesRepository.findAllDesc().stream()
                .map(NoticesListResponseDto::new)
                .collect(Collectors.toList());
    }

    // read one
    @Transactional
    public NoticesResponseDto findById (Long id) {
        Notices entity = noticesRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 사용자가 없습니다. id=" + id));
        return new NoticesResponseDto(entity);
    }

    @Transactional
    public void delete (Long id) {
        Notices notice = noticesRepository.findById(id).orElseThrow(()->new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
        noticesRepository.delete(notice);
    }


}
