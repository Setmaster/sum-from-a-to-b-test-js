function sum(fromN, toN) {
  if (fromN > toN) {
    return 0; // Base case for when fromN is greater than toN
  }
  return fromN + sum(fromN + 1, toN);
}


module.exports = sum;
