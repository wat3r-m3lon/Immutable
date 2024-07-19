package com.useLlayer.function.repository;

import com.useLlayer.function.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserId(Long userId);

    List<Order> findByInstitutionEmail(String institutionEmail);
}
