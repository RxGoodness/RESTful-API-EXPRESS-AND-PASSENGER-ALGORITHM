interface person {
    name: string;
    location: string;
}

const createPassengerTrip = (passengers: number) => {
    const reservation: person[] = [];
    let count: number = 0;
    const location: string[] = ['Abuja', 'Benue', 'Katsina', 'Lagos', 'Sambisa'];

    // for (let passenger of passengers){

    // };

    for (let i = 0; i < passengers; i++) {
        const person = { name: `passenger${i + 1}`, location: location[count] };
        reservation.push(person);
        count === 4 ? count = 0 : count++;
    }

    return reservation;
}

const multipleOfFive = (number: number) => { 
    let multiple = 0;
    let newNum = number;
    if(number === 0) {
        return { multiple: 0, remainder: 0 };
    }

    for(let i = 5; i < number; i++) {
        multiple++;
        newNum -= 5; 
    }

    return { multiple, remainder: newNum };
}

const getTrips = (passengers: number, reservation: person[]) => {
    let remainderAfterATrip = 0;
    let boarded: person[] = [];

    if(passengers >= 50) {
        boarded = reservation.splice(0, 50);
        remainderAfterATrip = passengers - 50;
    } else {
        const tripMultiple = multipleOfFive(passengers);
        boarded = reservation.splice(0, tripMultiple.multiple * 5);
    }

    let object = { count: 1, boarded, newReservation: reservation, remainderAfterATrip }

    return object;
}
const taskOne = (passengers:number, shuffle:number)=>{
    //complete your work here
    // Generate all the passengers and push to reservation
    let reservation = createPassengerTrip(passengers)

    // Return all passengers if passenger number is less than 50
    if(passengers < 5) {
        return {
            boarded: [],
            reservation,
            count: 0

        }
        
    }
   
    // Get first trip using total number of passengers and number of passengers in reservation
    let { count, boarded, newReservation } = getTrips(passengers, reservation);
    reservation = newReservation;

    // If shuffle is 0 rtuen after first trip, shuffle
    if(shuffle === 0) {
        return {
            boarded,
            reservation,
            count
        }
    }

    // If is not equal to 0 and passenger is not more than 5, break out ofthe loop
    while(shuffle > 0 && reservation.length >= 5) {
        const { multiple } = multipleOfFive(reservation.length);
        // If passengers in the reservation list are more than 50, remove 50
        if(multiple > 10) {
            const tripMultiple = multipleOfFive(reservation.length);
            boarded = reservation.splice(0, 50);
            shuffle--;
            count++;
        } else {
            // Get multiple of five and remove it
            const tripMultiple = multipleOfFive(reservation.length);
            boarded = reservation.splice(0, tripMultiple.multiple * 5);
            shuffle--;
            count++;
        }

    }

    return { boarded, reservation, count }
}

console.log(taskOne(313, 8))

  export default taskOne;