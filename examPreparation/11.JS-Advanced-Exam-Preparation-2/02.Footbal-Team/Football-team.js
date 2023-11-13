class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
    this.names = [];
  }
  newAdditions(footballPlayers) {
    for (const player of footballPlayers) {
      let [name, age, value] = player.split('/');
      let foundPlayer = this.invitedPlayers.find((x) => x.name === name);
      if (!foundPlayer) {
        this.invitedPlayers.push({ name, age, value });
        this.names.push(name);
      } else {
        if (Number(foundPlayer[value]) < Number(value)) {
          foundPlayer[value] = Number(value);
        }
      }
    }

    return `You successfully invite ${this.names.join(', ')}.`;
  }
  signContract(selectedPlayer) {
    let [name, offer] = selectedPlayer.split('/');
    let foundPlayer = this.invitedPlayers.find((x) => x.name === name);
    if (!foundPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    let priceDifference = Number(offer) - Number(foundPlayer.value);
    if (priceDifference < 0) {
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${Math.abs(priceDifference)} million more are needed to sign the contract!`
      );
    } else {
        foundPlayer.value = "Bought";
    }
    return `Congratulations! You sign a contract with ${foundPlayer.name} for ${offer} million dollars.`
  }
  ageLimit(name, age) {
    let foundPlayer = this.invitedPlayers.find((x) => x.name === name);
    if (!foundPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    let playerAge = Number(foundPlayer.age);
    let diff = playerAge - age;
        if(playerAge > age) {
            return `${name} is above age limit!`;
        }
        if(diff < -5) {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }
        return `${name} will sign a contract for ${Math.abs(diff)} years with ${this.clubName} in ${this.country}!`
  }
  transferWindowResult() {
    let result = ['Players list:', ];
    let sortedList = this.invitedPlayers.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    sortedList.forEach(x => result.push(`Player ${x.name}-${x.value}`));
    return result.join('\n');
  }
}
let fTeam = new footballTeam("Barcelona", "Spain");

console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50",

"Pau Torres/25/52"]));

console.log(fTeam.signContract("Kylian Mbappé/240"));

console.log(fTeam.ageLimit("Kylian Mbappé", 30));

console.log(fTeam.transferWindowResult());
