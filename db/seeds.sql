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
    ('Greg', 'Davidson', 2, NULL),
    ('Jim', 'Fisher', 3, 1),
    ('Doug', 'Smith', 1, 1),
    ('Sally', 'Dixon', 1, 1),
    ('David', 'Crowell', 5, NULL),   
    ('Lucy', 'Kingston', 6, 5),
    ('Meghan', 'Lynn', 6, 5),
    ('Kim', 'Winder', 6, 5),
    ('Han', 'Cole', 7, 5),
    ('Rich', 'Quiggly', 7, 5),
    ('Tom', 'Shepard', 4, 5),
    ('Timothy', 'Cheng', 4, 5),
    ('Ceaser', 'Zepoli', 9, NULL),
    ('Wilfred', 'Diamond', 8, 13),
    ('Joseph', 'Jostar', 8, 13),
    ('Robert', 'Speedwagon', 8, 13);
