package com.cx.student.entity;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity(name = "title")
public class Titles {
    //    对应数据库表Titles

    //题目
    public String title;
    //难度
    public String diffculty;
    //类型
    public String type;
    //标签
    public String label;
    //答案
    public String answer;


}
