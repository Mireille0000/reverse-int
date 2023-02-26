module.exports = function reverse (n) {
  let numberR = Math.sign(n)*parseInt(n.toString().split('').reverse().join(''));

  if (numberR > 0) {
    return numberR;
  } 
  return numberR * -1;
}
