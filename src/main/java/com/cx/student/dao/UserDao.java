package com.cx.student.dao;

import com.cx.student.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author cx
 */
public interface UserDao extends JpaRepository<User,Integer> {
}
