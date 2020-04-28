-- \l to list all database
-- \c to move inside a database
-- \dt show table in database
-- INSERT INTO table(column name) VALUES('');

CREATE DATABASE perntodo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY_KEY,
  description VARCHAR(255)
);
