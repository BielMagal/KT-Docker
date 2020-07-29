DROP TABLE IF EXISTS ITEM;

CREATE TABLE ITEM (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

INSERT INTO ITEM VALUES (1, 'Item 1'), (2, 'Item 2'), (3, 'Item 3'), (4, 'Item 4'), (5, 'Item 5'), (6, 'Item 6'), (7, 'Item 7'), (8, 'Item 8'), (9, 'Item 9'), (10, 'Item 10');

ALTER USER kt_docker IDENTIFIED WITH mysql_native_password BY 'kt_docker';