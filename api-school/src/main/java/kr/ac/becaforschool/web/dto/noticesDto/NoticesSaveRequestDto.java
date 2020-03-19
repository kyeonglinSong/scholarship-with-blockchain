package kr.ac.becaforschool.web.dto.noticesDto;

import kr.ac.becaforschool.domain.notices.Notices;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class NoticesSaveRequestDto {

    private String title;
    private String content;
    private String author;

    @Builder
    public NoticesSaveRequestDto(String title, String content, String author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    public Notices toEntity(){
        return Notices.builder()
                .title(title)
                .content(content)
                .author(author)
                .build();
    }
}
