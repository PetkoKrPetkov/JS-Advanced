function ticketsSorter(arrayOfTickets, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    arrayOfTickets.forEach((line) => {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    });

    // result.forEach((obj) => {
    //     console.log(obj);
    // })

    result.sort((a, b) => {
        if(criteria === 'price') {
            return a[criteria] - b[criteria];
        } else {
            return a[criteria].localeCompare(b[criteria]);
        }
    });
    
    return result;
}
ticketsSorter(
  [
    'Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed',
  ],

  'destination'
);
