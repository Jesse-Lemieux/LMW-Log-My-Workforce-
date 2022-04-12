INSERT INTO departments (department_name)
VALUES
    ('Sales'),
    ('IT'),
    ('Networking');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Rep', 75000, 1),
    ('Sales Manager', 100000, 1),
    ('Data Analyst', 105000, 1),
    ('Engineer', 92000, 2),
    ('IT Manager', 115000, 2),
    ('Junior Developer', 63000, 2),
    ('Senior Developer', 107000, 2),
    ('Networking Assistant', 61000, 3),
    ('Networking Manager', 101000, 3);

INSERT INTO employees (first_name, last_name, role_id)
VALUES
    ('Jim', 'Fisher', 3),
    ('Doug', 'Smith', 1),
    ('Sally', 'Dixon', 1),
    ('Greg', 'Davidson', 2),
    ('Lucy', 'Kingston', 6),
    ('Meghan', 'Lynn', 6),
    ('Kim', 'Winder', 6),
    ('Han', 'Cole', 7),
    ('Rich', 'Quiggly', 7),
    ('Tom', 'Shepard', 4),
    ('Timothy', 'Cheng', 4),
    ('David', 'Crowell', 5),
    ('Wilfred', 'Diamond', 8),
    ('Joseph', 'Jostar', 8),
    ('Robert', 'Speedwagon', 8),
    ('Ceaser', 'Zepoli', 9);