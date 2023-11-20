drop database if exists tasks_dev;
CREATE DATABASE tasks_dev;


\c tasks_dev;


CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    task_name TEXT NOT NULL,
    description TEXT,
    assigned_to VARCHAR,
    due_date DATE,
    is_complete BOOLEAN,
    priority INTEGER,
    notes TEXT);