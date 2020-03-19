package kr.ac.becaforschool.web.dto.noticesDto;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class NoticesUpdateRequestDto {

    private String title;
    private String content;

    @Builder
    public NoticesUpdateRequestDto(String title, String content) {
        this.title = title;
        this.content = content;
    }
}