/**
 * Created by user on 6/23/2016.
 */

var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '1998723312',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerald',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '5688532460',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0458562385',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '7777744444',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '1500002111',
        salary: 2000
    }
];

function showList() {
    var myTable = '<table class="table" border="1"><tr class="danger"><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th></th><th></th>';
    for (var i in employeesList) {
        myTable +=
            '<tr class="info"><td>'+employeesList[i].firstName+'</td><td>'+
            employeesList[i].lastName+'</td><td>'+
            employeesList[i].phone+'</td><td>'+
            employeesList[i].salary+'</td>'+
            '<td><button id=' + i + ' type="button" onclick="vizualizareEmployee(this.id)">Vizualizare</button></td>' +
            '<td><button id=' + i + ' type="button" onclick="stergereEmployee(this.id);showList()">Stergere</button></td>'+'</tr>';
    }
    myTable += '<tr class="danger"><td>' + getMaxNames() + '</td><td>' + getUniqueNames() + '</td><td>'+ getNumbers() +'</td><td>+' +
        calcSum()/employeesList.length +'</td></tr>'
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function(firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
}

function calcSum() {
    var sum = 0;
    for (var i in employeesList)
        sum += employeesList[i].salary;
    var c = document.getElementById('suma');
    c.innerHTML = sum;
    return sum;
}

function deleteEmployee() {
    employeesList.pop();
}

function vizualizareEmployee(index) {
    alert(employeesList[index].firstName);
}

function stergereEmployee(index) {
    employeesList.splice(index,1);
}

function countAppOfName(name) {
    var cnt = 0;
    for (var i in employeesList) {
        if (employeesList[i].lastName === name)
            cnt++;
    }
    return cnt;
}

function checkIfInArray(name, array) {
    var check = false;

    for (var i in array) {
        if (array[i] === name) {
            check = true;
            break;
        }
    }
    return check;
}

function getMaxNames() {
    var names = [];
    var cnts = [];

    for (var i in employeesList) {
        if (checkIfInArray(employeesList[i].lastName, names) === false) {
            names.push(employeesList[i].lastName);
            cnts.push(countAppOfName(employeesList[i].lastName));
        }
    }

    var max = cnts[0];
    for (var i in cnts) {
        if (cnts[i] > max)
            max = cnts[i];
    }

    var idx = cnts.indexOf(max);
    return names[idx];
}

function getUniqueNames() {
    var names = [];
    var cnts = [];

    for (var i in employeesList) {
        if (checkIfInArray(employeesList[i].lastName, names) === false) {
            names.push(employeesList[i].lastName);
            cnts.push(countAppOfName(employeesList[i].lastName));
        }
    }
    var cnt = 0;
    for (var i in cnts) {
        if (cnts[i] === 1)
            cnt++;
    }
    return cnt;
}

function Pair(cifra, count) {
    this.cifra = cifra;
    this.count = count;
}

function getNumbers() {
    var cifre = [];
    var idx = undefined;

    for (var i=0 ; i < 10 ; i++) {
        cifre[i] = new Pair(i, 0);
    }

    for (var i in employeesList) {
        for (var j in employeesList[i].phone) {
            idx = parseInt(employeesList[i].phone[j]);
            cifre[idx].count++;
        }
    }

    cifre.sort(function(cifra1, cifra2) {
        return -(cifra1.count-cifra2.count);
    })

    return cifre[0].cifra + ', ' + cifre[1].cifra + ', ' + cifre[2].cifra + ', ' + cifre[3].cifra + ', ' + cifre[4].cifra;
}

function sortare() {
    var tip = document.getElementById("sorting").value;
    if (tip == 1) {
        employeesList.sort(function(a,b){
           return a.firstName.localeCompare(b.firstName);
        });
    } else if (tip == 2) {
        employeesList.sort(function(a,b){
            return a.lastName.localeCompare(b.lastName);
        });
    } else if (tip == 3) {
        employeesList.sort(function(a,b){
            return a.phone.localeCompare(b.phone);
        });
    } else {
        employeesList.sort(function(a,b){
            return a.salary - b.salary;
        });
    }
}

function isWordInEmployeeLine(word, employee) {
    console.log(word + " " + employee.firstName);
    if ((employee.firstName.indexOf(word) != -1) || (employee.lastName.indexOf(word) != -1)
        || (employee.phone.indexOf(word) != -1) || (employee.salary.toString().indexOf(word) != -1)) {
        return true;
    }
    else {
        return false;
    }
}

function getLineWithWord() {
    var word = document.getElementById('search').value;
    console.log(word);
    var str = undefined;
    for (var i in employeesList) {
        if (isWordInEmployeeLine(word, employeesList[i]) == true) {
            str = '<table class="table" border="1"><tr class="info"><td>'+employeesList[i].firstName+'</td><td>'+
                employeesList[i].lastName+'</td><td>'+
                employeesList[i].phone+'</td><td>'+
                employeesList[i].salary+'</td></table>';
            break;
        } else
            str = "cannot find";
    }
    var put = document.getElementById('cautare');
    cautare.innerHTML = str;
}