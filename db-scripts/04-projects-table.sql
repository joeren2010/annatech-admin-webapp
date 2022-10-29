CREATE TABLE PROJECTS(
  projectId             INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  projectTitle          VARCHAR(500) NOT NULL,
  projectDescription    VARCHAR(500) NOT NULL,
  projectCode           VARCHAR(500) NOT NULL,
  categoryId            INTEGER,
  images                VARCHAR(1000),
  thumbnailImage        INTEGER DEFAULT 0,
  price                 INTEGER DEFAULT 0,
  addedOn               DATETIME DEFAULT CURRENT_TIMESTAMP,
  rating                INTEGER NOT NULL,
  FOREIGN KEY (categoryId) REFERENCES CATEGORIES(categoryId)
);

mysql> SHOW TABLES;

mysql> DESC PROJECTS;