package com.teamc.teamcid.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.teamc.teamcid.model.user;

public interface UserRepository extends JpaRepository<user, Long>{

    
}
