DROP TABLE IF EXISTS users;
CREATE TABLE users (
    username   varchar(256) not null,
    password   varchar(16) not null,
    name       varchar(50) not null,
    PRIMARY KEY (username, password)
);

INSERT INTO users (username, password, name) VALUES ('dchen4002', 'Fire7flower+', 'Derek');

DROP TABLE IF EXISTS progress;
CREATE TABLE progress (
    uname   varchar(256) not null,
    pword   varchar(16) not null,
    day1    BOOLEAN DEFAULT true,
    day2    BOOLEAN DEFAULT false,
    day3    BOOLEAN DEFAULT false,
    day4    BOOLEAN DEFAULT false,
    day5    BOOLEAN DEFAULT false,
    day6    BOOLEAN DEFAULT false,
    day7    BOOLEAN DEFAULT false,
    day8    BOOLEAN DEFAULT false,
    day9    BOOLEAN DEFAULT false,
    day10   BOOLEAN DEFAULT false,
    day11   BOOLEAN DEFAULT false,
    day12   BOOLEAN DEFAULT false,
    day13   BOOLEAN DEFAULT false,
    day14   BOOLEAN DEFAULT false,
    FOREIGN KEY (uname, pword) REFERENCES users(username, password),
    PRIMARY KEY (uname, pword)
);

INSERT INTO progress (uname, pword) VALUES ('dchen4002', 'Fire7flower+');
