class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }
    jobApplication(candidates) {
        for (const candidate of candidates) {
            let [name, education, yearsExperience] = candidate.split('-');
            let foundCandidate = this.jobCandidates.find(foundet => foundet.name === name);
            if(foundCandidate) {
                if(Number(foundCandidate.yearsExperience) < Number(yearsExperience)) {
                    foundCandidate.yearsExperience = Number(yearsExperience);
                }  
            } else {
                this.jobCandidates.push({name, education, yearsExperience: Number(yearsExperience)})
            }
        }
        let names = this.jobCandidates.map(x => x.name);
        return(`You successfully added candidates: ${names.join(', ')}.`);
    }
    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        let foundCandidate = this.jobCandidates.find(candidate => candidate.name === name);
        let currentExperience = Number(foundCandidate.yearsExperience);
        if(!foundCandidate) {
            throw new Error(`${name} is not in the candidates list!`);
        } else if(currentExperience < Number(minimalExperience) ){
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
        } else {
            foundCandidate.yearsExperience = 'hired';
            return(`Welcome aboard, our newest employee is ${name}.`);
        }
    }
    salaryBonus(name) {
        let foundCandidate = this.jobCandidates.find(candidate => candidate.name === name);
        if(!foundCandidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if(foundCandidate.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if(foundCandidate.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }
    candidatesDatabase() {
        let isFull = this.jobCandidates.length > 0;
        if(isFull) {
            let sortedList = this.jobCandidates.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
            let message = 'Candidates list:\n';
            sortedList.forEach(x => message += `${x.name}-${x.yearsExperience}\n`);
            return message.trim();
        } else {
            return "Candidate Database is empty!";
        }
    }
}
let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.salaryBonus("Peter Parker"));

