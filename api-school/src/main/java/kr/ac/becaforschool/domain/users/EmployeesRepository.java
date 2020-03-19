package kr.ac.becaforschool.domain.users;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeesRepository extends JpaRepository<Employees, Long> {

    Optional<Employees> findByUserId(String userId);
}
