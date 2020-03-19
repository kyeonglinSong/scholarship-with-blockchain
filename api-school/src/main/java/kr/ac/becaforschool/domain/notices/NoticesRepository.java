package kr.ac.becaforschool.domain.notices;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NoticesRepository extends JpaRepository<Notices, Long> {

    @Query("SELECT notice FROM Notices notice ORDER BY notice.id DESC")
    List<Notices> findAllDesc();
}

