const trimNumber = (number, precision) => {
  const array = number.toString().split(".");
  array.push(array.pop().substring(0, precision));
  const trimmedNumber =  array.join(".");
  return trimmedNumber;
}

export default trimNumber;