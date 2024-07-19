package com.useLlayer.function.repository;

import java.util.Optional;

import com.useLlayer.function.models.ERole;
import com.useLlayer.function.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
