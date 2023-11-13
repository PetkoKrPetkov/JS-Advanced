class Company {
    
  constructor() {
    this.departments = {};
    this.departmentsSalaries = {};
  }
  addEmployee(name, salary, position, department) {
    if (!name || !position || !department || !salary || salary < 0) {
      throw new Error('Invalid input!');
    }

    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = [];
      this.departmentsSalaries[department] = [];
    }
    let employee = {
      name,
      salary,
      position,
    };
    this.departments[department].push(employee);
    this.departmentsSalaries[department].push(salary);

    return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
  }

//   bestDepartment() {
//     let kvpDepSalaries = Object.entries(this.departmentsSalaries);
//     let bestDep = '';
//     let avgSalary = 0;
//     for (const kvp of kvpDepSalaries) {
//         let[dep, salaries] = kvp;
//         let sum = salaries.reduce((acc, x) => acc + x, 0);
//         let currAvg = sum / salaries.length;
//         if(currAvg > avgSalary) {
//             avgSalary = currAvg;
//             bestDep = dep;
//         }     
//     }
    
//     let keys = Object.keys(this.departments[bestDep]);
//     keys.sort((a,b) => {
//         if(keys[a].salary === keys[b].salary) {
//             return keys[a].name.localeCompare(keys[b].name);
//         } else {
//             return keys[b].salary - keys[a].salary;
//         }
//     });
//     let finalString = `Best Department is: ${bestDep}\n`
//     finalString += `Average salary: ${avgSalary.toFixed(2)}\n`
//     keys.forEach(key => {
//         return finalString += `${key.name} ${key.salary} ${key.position}\n`
//     })
    
//   }
bestDepartment() {
    let kvpDepSalaries = Object.entries(this.departmentsSalaries);
    let bestDep = '';
    let avgSalary = 0;
    for (const kvp of kvpDepSalaries) {
        let [dep, salaries] = kvp;
        let sum = salaries.reduce((acc, x) => acc + x, 0);
        let currAvg = sum / salaries.length;
        if (currAvg > avgSalary) {
            avgSalary = currAvg;
            bestDep = dep;
        }
    }

    let employees = this.departments[bestDep];
    employees.sort((a, b) => {
        if (a.salary === b.salary) {
            return a.name.localeCompare(b.name);
        } else {
            return b.salary - a.salary;
        }
    });

    let finalString = `Best Department is: ${bestDep}\n`;
    finalString += `Average salary: ${avgSalary.toFixed(2)}\n`;
    finalString += employees.map(employee => `${employee.name} ${employee.salary} ${employee.position}`).join('\n');
    
    return finalString;
}
}

let c = new Company();

c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');

c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');

c.addEmployee('Slavi', 500, 'dyer', 'Construction');

c.addEmployee('Stan', 2000, 'architect', 'Construction');

c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');

c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');

c.addEmployee('Gosho', 1350, 'HR', 'Human resources');

console.table(c.bestDepartment());

// console.log(c.bestDepartment());
