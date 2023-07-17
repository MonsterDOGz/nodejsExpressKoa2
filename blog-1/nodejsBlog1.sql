/*****/
set NAMES UTF8;
/*----判断数据库是否存在-----*/
DROP DATABASE IF EXISTS nodejs_blog1;
CREATE DATABASE nodejs_blog1 CHARSET = UTF8;
USE nodejs_blog1;

/*----------创建用户表----------*/
CREATE TABLE nodejs_blog1_user (
  uid INT PRIMARY KEY AUTO_INCREMENT              comment '用户id',
  uname VARCHAR(16)                  comment '用户名称',
  upwd VARCHAR(16)                   comment '用户密码',
  tname VARCHAR(16)                  comment '真实姓名'
);

/*----------创建博客表----------*/
CREATE TABLE nodejs_blog1_blog (
  bid INT PRIMARY KEY AUTO_INCREMENT              comment '博客id',
  title VARCHAR(64)                               comment '博客标题',
  content VARCHAR(512)                            comment '博客内容',
  createTime VARCHAR(100)                         comment '创建时间',
  uid INT                                         comment '作者id'
);

/*-----------插入用户数据---------------*/
INSERT INTO nodejs_blog1_user VALUES
(null,'zhoujie','123','周杰');

/*-----------插入博客数据---------------*/
INSERT INTO nodejs_blog1_blog VALUES
(null,'标题1','内容1','1564737959279',1),
(null,'标题2','内容2','1564737951279',2);
