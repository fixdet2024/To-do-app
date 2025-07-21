-- Puedes ejecutar con xampp o con Mysql Workbench modo cliente

CREATE DATABASE tudoapp;
USE tudoapp;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  completado BOOLEAN DEFAULT FALSE
);
