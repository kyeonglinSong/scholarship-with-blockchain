package kr.ac.becaforschool.domain.users;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentsRepository extends JpaRepository<Students, Long> {

    Optional<Students> findByUserId(String userId);

}
