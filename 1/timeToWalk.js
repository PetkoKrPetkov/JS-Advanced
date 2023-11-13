function timeToWalk(steps, footprintLength, speedPerHour) {
  const meters = steps * footprintLength;
  let speedInMinSec = speedPerHour / 3.6;
  let time = meters / speedInMinSec;
  let breaks = Math.floor(meters / 500);
  let secsLeft = Math.round(time % 60);
  let minutes = Math.floor(time / 60) + breaks;
  let hours = Math.floor(time / 3600);
  let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
  let minToPrint = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let secToPrint = secsLeft < 10 ? `0${secsLeft}` : `${secsLeft}`;

  console.log(`${hoursToPrint}:${minToPrint}:${secToPrint}`);
}
timeToWalk(4000, 0.6, 5);
