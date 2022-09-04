

const ftoc = function() {
  let ftemp = -100;
  let ctemp = Math.round(((ftemp -32) * (5/9)) * 10) / 10;
  return ctemp;
};

const ctof = function() {
  let ctemp2 = -10;
  let ftemp2 = Math.round((ctemp2 * (9/5) + 32) * 10)  /10;
  return ftemp2;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
