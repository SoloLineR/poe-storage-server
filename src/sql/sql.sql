CREATE TABLE poe_class (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL, 
    image VARCHAR NOT NULL
);

CREATE TABLE ascendancy_class (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    image VARCHAR NOT NULL,
    poe_class_id INTEGER NOT NULL,  
    FOREIGN KEY (poe_class_id) 
    REFERENCES poe_class(id)  
);

CREATE TABLE build_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE skill (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL, 
    image VARCHAR NOT NULL
);

CREATE TABLE  author (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    url VARCHAR NOT NULL
);

CREATE TABLE league (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);


CREATE TABLE build (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    url VARCHAR NOT NULL,
    build_type_id INTEGER NOT NULL,
    skill_id INTEGER NOT NULL,
    author_id INTEGER NOT NULL,
    poe_class_id INTEGER NOT NULL,
    ascendancy_class_id INTEGER NOT NULL,
    league_id INTEGER NOT NULL,
    FOREIGN KEY (poe_class_id) REFERENCES poe_class(id),
    FOREIGN KEY (ascendancy_class_id) REFERENCES ascendancy_class(id), 
    FOREIGN KEY (build_type_id) REFERENCES build_type(id), 
    FOREIGN KEY (skill_id) REFERENCES skill(id),  
    FOREIGN KEY (author_id) REFERENCES author(id),
    FOREIGN KEY (league_id) REFERENCES league(id)
);

     