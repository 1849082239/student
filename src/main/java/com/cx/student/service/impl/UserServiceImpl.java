package com.cx.student.service.impl;

import com.cx.student.dao.UserDao;
import com.cx.student.entity.User;
import com.cx.student.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @Author cx
 * @Date 2020/2/25 14:15
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserDao userDao ;



}
