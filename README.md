1.
```
brew install postgresql
```

2.
```
brew services start postgresql
brew services stop postgresql
```

3.
PostgreSQL command prompt
psql is the PostgreSQL interactive terminal. Running psql will connect you to a PostgreSQL host. Running psql --help will give you more information about the available options for connecting with psql.

--h — --host=HOSTNAME | database server host or socket directory (default: “local socket”)
--p — --port=PORT | database server port (default: “5432”)
--U — --username=USERNAME | database username (default: “your_username”)
--w — --no-password | never prompt for password
--W — --password | force password prompt (should happen automatically)

to connect to the default postgres database with the default login information – no option flags:

``psql postgres``

4.
test:
```
postgres=# \conninfo
```
usefull:
- \q | Exit psql connection
- \c | Connect to a new database
- \dt | List all tables
- \du | List all roles
- \list | List databases

5.
Creating a role in Postgres
```
postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';

postgres=# ALTER ROLE me CREATEDB;

postgres=# \q

psql -d postgres -U me
```

6.
Creating a database in Postgres
```
postgres=> CREATE DATABASE api;

postgres=> \c api
```

7.
Creating a table in Postgres
```
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

INSERT INTO users (name, email)
  VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');

SELECT * FROM users;
```
