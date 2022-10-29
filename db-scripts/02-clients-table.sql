mysql> CREATE TABLE CLIENTS(
  clientId             INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email                VARCHAR(50) NOT NULL,
  password             VARCHAR(50) NOT NULL,
  fullName             VARCHAR(255) NOT NULL,
  street               VARCHAR(50) DEFAULT NULL,
  city                 VARCHAR(50) DEFAULT NULL,
  state                VARCHAR(50) DEFAULT NULL,
  country              VARCHAR(50) DEFAULT NULL,
  pincode              INTEGER,
  image                VARCHAR(1000),
  contact              BIGINT,
  addedOn              DATETIME DEFAULT CURRENT_TIMESTAMP
);


mysql> SHOW TABLES;

mysql> DESC CLIENTS;