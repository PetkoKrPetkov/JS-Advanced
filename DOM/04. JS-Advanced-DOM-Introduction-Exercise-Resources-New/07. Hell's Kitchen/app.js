function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);
  let inputAreaElement = document.querySelector('textarea');
  let restaurantArea = document.querySelector('#bestRestaurant p');
  let workersArea = document.querySelector('#workers p');

  function onClick() {
    let inputsArr = JSON.parse(inputAreaElement.value);
    let bestRestaurant = '';
    let bestAverageSalary = 0;
    let restaurantObj = {};
    let totalSalary = 0;
    let avgSalary = 0;
    for (const x of inputsArr) {
      let [restaurant, rest] = x.split(' - ');
      let workersAndSalaryArr = rest.split(', ');

      for (const workerLine of workersAndSalaryArr) {
        let [name, salary] = workerLine.split(' ');

        if (!restaurantObj.hasOwnProperty(restaurant)) {
          restaurantObj[restaurant] = {};
        }
        if (restaurantObj.hasOwnProperty(restaurant)) {
          restaurantObj[restaurant][name] = Number(salary);
        }
      }
    }
    let entries = Object.entries(restaurantObj);
    for (const entry of entries) {
      let restaurantNameKey = entry[0];
      let valuesWorkerAndSalary = Object.entries(entry[1]);

      for (let [name, salary] of valuesWorkerAndSalary) {
        totalSalary += salary;
      }
      avgSalary = totalSalary / valuesWorkerAndSalary.length;
      if (avgSalary > bestAverageSalary) {
        bestAverageSalary = avgSalary;
        bestRestaurant = restaurantNameKey;
        totalSalary = 0;
      }
    }
    let result = Object.entries(restaurantObj[bestRestaurant]).sort(
      (a, b) => b[1] - a[1]
    );
    let print = '';

    result.forEach(w => (print += `Name: ${w[0]} With Salary: ${w[1]} `));
    restaurantArea.textContent = `Name: ${bestRestaurant} Average Salary: ${avgSalary.toFixed(
      2
    )} Best Salary: ${result[0][1].toFixed(2)} `;
    workersArea.textContent = print;
  }
}
