const addComma2Number = (price) => {
  const type = typeof price;

  if (type == 'string') {
    price = price.replace(',', '');
  } else if (type == 'number') {
    price += '';
  }

  const array = price.split('').reverse();
  const result = [];
  array.forEach((value, index) => {
    result.push(value);
    if (index != 0 && index % 3 == 2 && index != array.length - 1) {
      result.push(',');
    }
  });

  return result.reverse().join('');
};

const getPercent = (targetAmount, currentAmount) => {
  const divide = currentAmount / targetAmount * 100;
  return divide.toFixed(0);
}

function countCertainDays(days, d0, d1) {
  var ndays = 1 + Math.round((d1 - d0) / (24 * 3600 * 1000));
  var sum = function (a, b) {
    return a + Math.floor((ndays + ((d0.getDay() + 6 - b) % 7)) / 7);
  };
  return days.reduce(sum, 0);
}

const getMonthNumber = (str) => {
  if (str === 'Jan') {
    return '01';
  } else if (str === 'Feb') {
    return '02';
  } else if (str === 'Mar') {
    return '03';
  } else if (str === 'Apr') {
    return '04';
  } else if (str === 'May') {
    return '05';
  } else if (str === 'Jun') {
    return '06';
  } else if (str === 'Jul') {
    return '07';
  } else if (str === 'Aug') {
    return '08';
  } else if (str === 'Sep') {
    return '09';
  } else if (str === 'Oct') {
    return '10';
  } else if (str === 'Nov') {
    return '11';
  } else if (str === 'Dec') {
    return '12';
  }
};
export { addComma2Number, countCertainDays, getMonthNumber, getPercent };
