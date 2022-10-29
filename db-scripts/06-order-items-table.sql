CREATE TABLE ORDERITEMS(
  orderItemId          INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  orderId              INTEGER,
  projectId            INTEGER,
  projectCode          VARCHAR(255) NOT NULL,
  projectImg           VARCHAR(255) NOT NULL,
  projectTitle         VARCHAR(255) NOT NULL,
  projectDescription   VARCHAR(255) NOT NULL,
  projectCategory      VARCHAR(255) NOT NULL,
  price                INTEGER NOT NULL,
  quantity             INTEGER NOT NULL,
  totalPrice           INTEGER NOT NULL,
  FOREIGN KEY (orderId) REFERENCES ORDERS(orderId),
  FOREIGN KEY (projectId) REFERENCES PROJECTS(projectId)
);


mysql> SHOW TABLES;

mysql> DESC ORDERITEMS;