package com.cx.student.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author cx
 * @Date 2020/2/25 13:56
 */
@RestController
@RequestMapping("user")
public class UserController {

    @RequestMapping("login")
    public String login(){
        return "choice";
    }

}
