package kr.ac.becaforschool.web.dto.noticesDto;

import lombok.Getter;
import kr.ac.becaforschool.domain.notices.Notices;

@Getter
public class NoticesResponseDto {

    private Long id;
    private String title;
    private String content;
    private String author;

    public NoticesResponseDto(Notices entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.author = entity.getAuthor();
    }
}
