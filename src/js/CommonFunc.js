const addComma2Number = (price) => {
  const type = typeof price;
  var index;
  if (type == 'string') {
    price = price.replace(',', '');
  } else if (type == 'number') {
    price += '';
  }

  index = price.indexOf('.');
  if (index != -1) {
    price = price.substring(0, index);
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
const getFractionPart = (price) => {
  const type = typeof price;
  if (type == 'string') {
    price = price.replace(',', '');
  } else if (type == 'number') {
    price += '';
  }
  var fraction;
  var index;
  index = price.indexOf('.');
  if (index != -1) {
    fraction = price.substring(index, index + 4);
    return fraction;
  } else {
    return '';
  }
};
const getPercent = (targetAmount, currentAmount) => {
  const divide = (currentAmount / targetAmount) * 100;
  return divide.toFixed(0);
};

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

const convertStrToDate = (strDate) => {
  var date = new Date(
    strDate.substring(0, 4),
    String(Number(strDate.substring(4, 6)) - 1),
    strDate.substring(6, 8),
    strDate.substring(8, 10),
    strDate.substring(10, 12)
  );

  return date;
};
const checkSunday = (num) => {
  if (num === 0) return 7;
  else return num;
};

// 월말 로직은 일단 나중에 고려
const getLastDepositDate = (savingCode, savingDetailCode, savingTime) => {
  var date = new Date();

  if (savingCode === 'W') {
    if (Number(savingDetailCode) < checkSunday(date.getDay())) {
      date.setDate(date.getDate() - (checkSunday(date.getDay()) - Number(savingDetailCode)));
      date.setHours(savingTime);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else if (Number(savingDetailCode) > checkSunday(date.getDay())) {
      date.setDate(date.getDate() - 7 + (Number(savingDetailCode) - checkSunday(date.getDay())));
      date.setHours(savingTime);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else {
      if (date.getHours() >= savingTime) {
        date.setHours(savingTime);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
      } else {
        date.setDate(date.getDate() - 7);
        date.setHours(savingTime);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
      }
    }
  }
  // 2월 28일 및 월말에 관련한 로직은 나중에 구현한다.
  else if (savingCode === 'M') {
    if (Number(savingDetailCode) < date.getDate()) {
      date.setDate(Number(savingDetailCode));
      date.setHours(savingTime);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else if (Number(savingDetailCode) > date.getDate()) {
      date.setMonth(date.getMonth() - 1);
      date.setDate(Number(savingDetailCode));
      date.setHours(savingTime);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else {
      if (date.getHours() >= savingTime) {
        date.setHours(savingTime);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
      } else {
        date.setMonth(date.getMonth() - 1);
        date.setHours(savingTime);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
      }
    }
  } else if (savingCode === 'D') {
    if (date.getHours() >= savingTime) {
      date.setHours(savingTime);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else {
      date.setDate(date.getDate() - 1);
      date.setHours(savingTime);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    }
  }
  return date;
};
const getNextDepositDate = (savingCode, savingDetailCode, savingTime, startDate, flag) => {
  var date;
  if (flag === true) {
    date = startDate;
  } else {
    date = new Date();
  }
  if (savingCode === 'W') {
    if (Number(savingDetailCode) < checkSunday(date.getDay())) {
      date.setDate(date.getDate() + 7 - (checkSunday(date.getDay()) - Number(savingDetailCode)));
      date.setHours(savingTime);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else if (Number(savingDetailCode) > checkSunday(date.getDay())) {
      date.setDate(date.getDate() + (Number(savingDetailCode) - checkSunday(date.getDay())));
      date.setHours(savingTime);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else {
      if (date.getHours() >= savingTime) {
        date.setDate(date.getDate() + 7);
        date.setHours(savingTime);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
      } else {
        date.setHours(savingTime);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
      }
    }
  } else if (savingCode === 'M') {
    if (Number(savingDetailCode) < date.getDate()) {
      date.setMonth(date.getMonth() + 1);
      date.setDate(Number(savingDetailCode));
      date.setHours(savingTime);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else if (Number(savingDetailCode) > date.getDate()) {
      date.setDate(Number(savingDetailCode));
      date.setHours(savingTime);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else {
      if (date.getHours() >= savingTime) {
        date.setMonth(date.getMonth() + 1);
        date.setHours(savingTime);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
      } else {
        date.setHours(savingTime);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
      }
    }
  } else if (savingCode === 'D') {
    if (date.getHours() >= savingTime) {
      date.setDate(date.getDate() + 1);
      date.setHours(savingTime);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else {
      date.setHours(savingTime);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    }
  }
  return date;
};
const calculateRealTimeTotalAmount = (
  currentAmount,
  savingAmount,
  //strCreateDate,
  strStartDate,
  strEndDate,
  savingCode,
  savingDetailCode,
  savingTime
) => {
  var realTimeAmount = 0;
  var totalAmount = 0;

  //var createDate = convertStrToDate(strCreateDate);
  var startDate = convertStrToDate(strStartDate);
  var endDate = convertStrToDate(strEndDate);

  var currentDateMilliSec = new Date().getTime();
  //var createDateMilliSec = createDate.getTime();
  var startDateMilliSec = startDate.getTime();
  var endDateMilliSec = endDate.getTime();
  var lastDepositDateMilliSec = getLastDepositDate(
    savingCode,
    savingDetailCode,
    savingTime
  ).getTime();

  console.log('--------------------------------------------');
  console.log('현재시각 ' + new Date(currentDateMilliSec));
  console.log('목표시작 시각 ' + new Date(startDateMilliSec));
  console.log('목표종료 시각 ' + new Date(endDateMilliSec));
  console.log('이전 입금 시각 ' + new Date(lastDepositDateMilliSec));
  console.log('--------------------------------------------');

  var nextDepositDateMilliSec;
  // 아직 한 번도 입금을 안한 경우
  if (lastDepositDateMilliSec < startDateMilliSec) {
    nextDepositDateMilliSec = getNextDepositDate(
      savingCode,
      savingDetailCode,
      savingTime,
      startDate,
      true
    ).getTime();
    realTimeAmount =
      (savingAmount * (currentDateMilliSec - startDateMilliSec)) /
      (nextDepositDateMilliSec - startDateMilliSec);
    totalAmount = 0 + realTimeAmount;
  }
  // 적어도 입금을 한 번이라도 한 경우
  else {
    nextDepositDateMilliSec = getNextDepositDate(
      savingCode,
      savingDetailCode,
      savingTime,
      startDate,
      false
    ).getTime();
    realTimeAmount =
      (savingAmount * (currentDateMilliSec - lastDepositDateMilliSec)) /
      (nextDepositDateMilliSec - lastDepositDateMilliSec);
    totalAmount = currentAmount + realTimeAmount;
  }
  console.log('현재 저축 금액 : ' + totalAmount);
  return totalAmount;
};
export {
  addComma2Number,
  countCertainDays,
  getMonthNumber,
  getPercent,
  calculateRealTimeTotalAmount,
  convertStrToDate,
  getFractionPart,
};
