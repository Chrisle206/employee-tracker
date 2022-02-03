const inquirer = require("inquirer");
const cTable = require('console.table');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
  );

function menu() {
    inquirer.prompt([
        {
            name: 'option',
            type: 'list',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
        }
    ]).then(answers => {
        switch (answers.option) {
            case "view all departments":
                viewDepartments();
                break;

            case "view all roles":
                viewRoles();
                break;

            case "view all employees":
                viewEmployees();
                break;
            case "add a department":
                addDepartment();
                break;

            case "add a role":
                addRole();
                break;

            case "add an employee":
                addEmployee();
                break;
            case "update an employee role":
                updateEmployee();
                break;

            default:
                console.log("default")
                team();
                break;
        }
    })
}

function viewDepartments() {
    const sql = `SELECT department_name.name FROM department_name;`;
        db.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
            console.table(sql);
            }
        })
    }

function viewRoles() {
    const sql = `SELECT department_name.name FROM department_name;`;
        db.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
            console.table(sql);
            }
        })
    }

    function viewEmployees() {
        const sql = `SELECT department_name.name FROM department_name;`;
        db.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
            console.table(sql);
            }
        })
    }

    function addDepartment() {
        const sql = `SELECT department_name.name FROM department_name;`;
        db.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
            console.table(sql);
            }
        })
    }

    function addRole() {
        const sql = `SELECT department_name.name FROM department_name;`;
        db.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
            console.table(sql);
            }
        })
    }

    function addEmployee() {
        const sql = `SELECT department_name.name FROM department_name;`;
        db.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
            console.table(sql);
            }
        })
    }

    function updateEmployee() {
        const sql = `SELECT department_name.name FROM department_name;`;
        db.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
            console.table(sql);
            }
        })
    }

    menu();
