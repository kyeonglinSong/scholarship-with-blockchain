package kr.ac.becaforschool.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    private String version;
    private String title;

    @Bean
    public Docket apiV1() {
        version = "ver.1";
        title = "학교용 api" + version;

        return new Docket(DocumentationType.SWAGGER_2)
                .useDefaultResponseMessages(false)
                .groupName(version)
                .select()
                .apis(RequestHandlerSelectors.basePackage("kr.ac.becaforschool"))
                .paths(PathSelectors.ant("/school/**"))
                .build()
                .apiInfo(apiInfo(title, version));
    }


    private ApiInfo apiInfo(String title, String version) {
        return new ApiInfo(
                title,
                "Scholarship with blockchain = 학교용 API",
                version,
                "www.example.com",
                new Contact("KL", "www.example.com", "blossommilktea@gmail.com"),
                "Licenses",
                "www.example.com",

                new ArrayList<>());
    }

}
