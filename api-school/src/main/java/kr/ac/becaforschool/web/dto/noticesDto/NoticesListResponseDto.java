package kr.ac.becaforschool.web.dto.noticesDto;

import com.fasterxml.jackson.annotation.JsonFormat;
import kr.ac.becaforschool.domain.notices.Notices;
import lombok.Getter;
import org.apache.tomcat.jni.Local;

import java.time.LocalDateTime;

@Getter
public class NoticesListResponseDto {
    private Long id;
    private String title;
    private String author;
    private LocalDateTime modifiedDate;

    public NoticesListResponseDto(Notices entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.author = entity.getAuthor();
        this.modifiedDate = entity.getModifiedDate();
    }

}
