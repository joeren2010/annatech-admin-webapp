mysql> CREATE TABLE ADMINS( 
  adminId INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL, 
  fullName VARCHAR(255) NOT NULL,
  loginType INTEGER DEFAULT 1,
  addedOn DATETIME DEFAULT CURRENT_TIMESTAMP
);


mysql> SHOW TABLES;

mysql> DESC ADMINS;


+-----------+--------------+------+-----+-------------------+-------------------+
| Field     | Type         | Null | Key | Default           | Extra             |
+-----------+--------------+------+-----+-------------------+-------------------+
| adminId   | int          | NO   | PRI | NULL              | auto_increment    |
| email     | varchar(50)  | NO   |     | NULL              |                   |
| password  | varchar(50)  | NO   |     | NULL              |                   |
| fullName  | varchar(255) | NO   |     | NULL              |                   |
| loginType | int          | YES  |     | 1                 |                   |
| addedOn   | datetime     | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+-----------+--------------+------+-----+-------------------+-------------------+
6 rows in set (0.00 sec)