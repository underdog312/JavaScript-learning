// TASK 1

function findBiggestWord(str) {
  const wordsArray = str.split(" ");
  const biggestWord = wordsArray.reduce((currentWord, nextWord) =>
    currentWord.length > nextWord.length ? currentWord : nextWord
  );

  return biggestWord;
}

console.log(findBiggestWord("We used to be friends a long time ago"));

// TASK 2

function reverseNumber(number) {
  const reversed = number.toString().split("").reverse().join("");

  return reversed;
}

console.log(reverseNumber(6584));

// TASK 3

function unique(str) {
  return str.split("").reduce((newStr, char) => {
    if (!newStr.includes(char)) {
      newStr += char;
    }

    return newStr;
  }, "");
}

console.log(unique("dmmtss11snhdddk224"));

// TASK 4

function calcPoint(win, draw, loss) {}

// TASK 5

function statistics(arr) {
  const maxNum = arr.reduce((current, next) =>
    current > next ? current : next
  );
  const minNum = arr.reduce((current, next) =>
    current < next ? current : next
  );
  const count = arr.length;
  const sum = arr.reduce((current, next) => current + next);
  const average = sum / count;

  return {
    max: maxNum,
    min: minNum,
    count: count,
    average: average,
  };
}

console.log(statistics([2, 3, 5, 6, 8]));

// TASK 6

const workers = [
  { name: "Jimm", salary: 40000, department: "IT" },
  { name: "Bob", salary: 60300, department: "HR" },
  { name: "Stacy", salary: 15000, department: "IT" },
  { name: "Tom", salary: 55200, department: "DEVOPS" },
  { name: "Kate", salary: 25000, department: "IT" },
  { name: "John", salary: 40000, department: "HR" },
  { name: "Billy", salary: 60000, department: "DEVOPS" },
];

function highestDepartment(workers) {
  const groupedByDepartment = workers.reduce((acc, worker) => {
    const department = worker.department;
    const salary = worker.salary;
    if (!acc[department]) {
      acc[department] = { totalSalary: 0, count: 0 };
    }
    acc[department].totalSalary += salary;
    acc[department].count++;
    return acc;
  }, {});

  const averageSalaries = {};

  for (const department in groupedByDepartment) {
    const { totalSalary, count } = groupedByDepartment[department];
    averageSalaries[department] = totalSalary / count;
  }

  let highestAvgDepartment = "";
  let highestAvgSalary = 0;

  for (const department in averageSalaries) {
    if (averageSalaries[department] > highestAvgSalary) {
      highestAvgSalary = averageSalaries[department];
      highestAvgDepartment = department;
    }
  }

  return highestAvgDepartment;
}

console.log(highestDepartment(workers));
