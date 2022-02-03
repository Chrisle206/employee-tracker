INSERT INTO department_name (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO department_role (title, salary, department_id)
VALUES ("SalesPerson", 80000, 1),
       ("Lead SalesPerson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Account Manager", 120000, 3),
       ("Lawyer", 190000, 4);
       
INSERT INTO department_employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 1, 2),
       ("Sarah", "Lourd", 2, null),
       ("Ashley", "Rodriguez", 3, null),
       ("Kunal", "Singh", 4, null),  
       ("Tom", "Allen", 5, null);     
       