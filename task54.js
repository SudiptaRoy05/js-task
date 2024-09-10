function monthlySalary(empArr){
    let salary = 0;
    for (const salaries of empArr) {
        salary += salaries.starting + salaries.experience * salaries.increment;
        
    }
    const mSalary = salary/12;
    return parseFloat(mSalary.toFixed(2));
}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

console.log(monthlySalary(employees));