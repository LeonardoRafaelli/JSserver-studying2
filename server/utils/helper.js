function isInteger(value){
  const checkIsInt = new RegExp('^[0-9]$');
  return checkIsInt.test(value);
}

module.exports = {
  isInteger
}