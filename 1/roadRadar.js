function roadRadar(speed, place) {
    let diff = 0;
    let status = '';
    let isInTheLimit = true;
    let speedInTheZone = 0

    switch (place) {
        case 'motorway':
            speedInTheZone = 130;
            if(speed > 130) {
                isInTheLimit = false;
                diff = speed - 130;
            }          
            break;
        case 'interstate':
            speedInTheZone = 90;
            if(speed > 90) {
                isInTheLimit = false;
                diff = speed - 90;
            } 
            break;
        case 'city':
            speedInTheZone = 50;
            if(speed > 50) {
                isInTheLimit = false;
                diff = speed - 50;
            } 
            break;
        case 'residential':
            speedInTheZone = 20;
            if(speed > 20) {
                isInTheLimit = false;
                diff = speed - 20;
            } 
            break;
    }

    if(diff <= 20) {
        status = 'speeding';
    } else if(diff <= 40) {
        status = 'excessive speeding';
    } else if(diff > 40) {
        status = 'reckless driving';
    }

    if(isInTheLimit) {
        console.log(`Driving ${speed} km/h in a ${speedInTheZone} zone`);
    } else {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedInTheZone} - ${status}`);
    }

}
roadRadar(40, 'city');