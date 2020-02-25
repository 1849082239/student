package com.cx.student.entity;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity(name = "user")
public class User {

//    对应数据库表users
    //用户账号
    private String username;
    //用户密码
    private String password;
    //用户姓名
    private String name;
    //完成总数
    private String total;
    //已完成数
    private String complete;
    //是否直接显示
    private String flas;


}
