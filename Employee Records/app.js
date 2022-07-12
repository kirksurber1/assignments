const person = []

function Employee (name, job, salary, status="Full Time") {
    this.name = name
    this.job = job
    this.salary = salary
    this.status = status
    
}

let Bob = new Employee ("Bob", "EOD Tech", "$75,000/yr")
let Chuck = new Employee("Chuck", "Finance guy", "$50,000/yr")
let Susie = new Employee("Susie", "Manager", "$65,000/yr", "Contract")

person.push(Bob, Chuck, Susie)