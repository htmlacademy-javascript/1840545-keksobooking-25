function getRandomNumber(lower, upper) {
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomFloat(lower, upper, point) {
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper);
  return (Math.floor(Math.random() * (max - min) * Math.pow(10, point) + min * Math.pow(10, point)) / Math.pow(10, point));
}

getRandomNumber(2,1);

getRandomFloat(6,2,3);
