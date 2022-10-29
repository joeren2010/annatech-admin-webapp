CREATE TABLE MEETINGS(
  meetingId             INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  meetingTopic          VARCHAR(500) NOT NULL,
  numPeople             INTEGER,
  emailAddress          VARCHAR(50) NOT NULL,
  meetingDate           DATETIME DEFAULT CURRENT_TIMESTAMP,
  meetingTime           DATETIME DEFAULT CURRENT_TIMESTAMP,
  addedOn               DATETIME DEFAULT CURRENT_TIMESTAMP,
  meetingDescription    VARCHAR(500) NOT NULL,
  images                VARCHAR(1000),
  thumbnailImage        INTEGER DEFAULT 0,
  meetingCode           VARCHAR(500) NOT NULL,
  active                INTEGER DEFAULT 0, 
  files                VARCHAR(1000)
);

mysql> SHOW TABLES;

mysql> DESC MEETINGS;