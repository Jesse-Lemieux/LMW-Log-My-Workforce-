INSERT INTO department (name)
VALUES
    ('Sales'),
    ('IT'),
    ('Networking');

INSERT INTO role (title, salary, department_id)
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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jim', 'Fisher', 3, 4),
    ('Doug', 'Smith', 1, 4),
    ('Sally', 'Dixon', 1, 4),
    ('Greg', 'Davidson', 2, NULL),
    ('Lucy', 'Kingston', 6, 12),
    ('Meghan', 'Lynn', 6, 12),
    ('Kim', 'Winder', 6, 12),
    ('Han', 'Cole', 7, 12),
    ('Rich', 'Quiggly', 7, 12),
    ('Tom', 'Shepard', 4, 12),
    ('Timothy', 'Cheng', 4, 12),
    ('David', 'Crowell', 5, NULL),
    ('Wilfred', 'Diamond', 8, 16),
    ('Joseph', 'Jostar', 8, 16),
    ('Robert', 'Speedwagon', 8, 16),
    ('Ceaser', 'Zepoli', 9, NULL);