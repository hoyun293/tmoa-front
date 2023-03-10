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

const createNewDateTime = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
};
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
const getCategoryName = (code) => {
  var name;
  switch (code) {
    case 'H':
      name = '집';
      break;
    case 'D':
      name = '기부';
      break;
    case 'AM':
      name = '기념일ㆍ결혼';
      break;
    case 'T':
      name = '여행';
      break;
    case 'I':
      name = '인테리어';
      break;
    case 'GL':
      name = '게임ㆍ여가';
      break;
    case 'A':
      name = '자동차';
      break;
    case 'UE':
      name = '모임ㆍ행사';
      break;
    case 'M':
      name = '의료';
      break;
    case 'S':
      name = '운동';
      break;
    case 'PR':
      name = '선물';
      break;
    case 'R':
      name = '노후자금';
      break;
    case 'PE':
      name = '반려동물';
      break;
    case 'B':
      name = '뷰티';
      break;
    case 'BC':
      name = '창업ㆍ회사';
      break;
    case 'DA':
      name = '디지털ㆍ가전';
      break;
  }
  return name;
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
const convertDateToStr = (date) => {
  var strDate = '';
  strDate += String(date.getFullYear());
  if (date.getMonth() < 10) {
    strDate += '0';
    strDate += String(date.getMonth() + 1);
  } else {
    strDate += String(date.getMonth());
  }
  if (date.getDate() < 10) {
    strDate += '0';
    strDate += String(date.getDate());
  } else {
    strDate += String(date.getDate());
  }
  if (date.getHours() < 10) {
    strDate += '0';
    strDate += String(date.getHours());
  } else {
    strDate += String(date.getHours());
  }
  if (date.getMinutes() < 10) {
    strDate += '0';
    strDate += String(date.getMinutes());
  } else {
    strDate += String(date.getMinutes());
  }
  return strDate;
};
// 일요일은 0으로 리턴된다.  하지만 'W' 부분 날짜 계산을 위해 7로 만들어준다.
const checkSunday = (num) => {
  if (num === 0) return 7;
  else return num;
};

// 월말 로직은 일단 나중에 고려
const getLastDepositDate = (savingCode, savingDetailCode) => {
  var date = new Date();

  if (savingCode === 'W') {
    if (Number(savingDetailCode) < checkSunday(date.getDay())) {
      date.setDate(date.getDate() - (checkSunday(date.getDay()) - Number(savingDetailCode)));
      date.setDate(date.getDate() + 1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else if (Number(savingDetailCode) > checkSunday(date.getDay())) {
      date.setDate(date.getDate() - 7 + (Number(savingDetailCode) - checkSunday(date.getDay())));
      date.setDate(date.getDate() + 1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else {
      date.setDate(date.getDate() - 7);
      date.setDate(date.getDate() + 1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    }
  }
  // 2월 28일 및 월말에 관련한 로직은 나중에 구현한다.
  else if (savingCode === 'M') {
    if (Number(savingDetailCode) < date.getDate()) {
      date.setDate(Number(savingDetailCode));
      date.setDate(date.getDate() + 1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else if (Number(savingDetailCode) > date.getDate()) {
      date.setMonth(date.getMonth() - 1);
      date.setDate(Number(savingDetailCode));
      date.setDate(date.getDate() + 1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else {
      date.setMonth(date.getMonth() - 1);
      date.setDate(date.getDate() + 1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    }
  } else if (savingCode === 'D') {
    date.setDate(date.getDate() - 1);
    date.setDate(date.getDate() + 1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
  }
  return date;
};
const getNextDepositDate = (savingCode, savingDetailCode, startDate, flag) => {
  var date;
  // true라면, 아직 한번도 입금을 하지 않은 경우 즉, 목표시작일 이후의 첫 입금일을 구한다.
  if (flag === true) {
    date = startDate;
    // false라면, 적어도 한번은 입금을 한 경우 즉, 현재시각 이후의 다음 입금일을 구한다.
  } else {
    date = new Date();
  }
  if (savingCode === 'W') {
    if (Number(savingDetailCode) < checkSunday(date.getDay())) {
      date.setDate(date.getDate() + 7 - (checkSunday(date.getDay()) - Number(savingDetailCode)));
      date.setDate(date.getDate() + 1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else if (Number(savingDetailCode) > checkSunday(date.getDay())) {
      date.setDate(date.getDate() + (Number(savingDetailCode) - checkSunday(date.getDay())));
      date.setDate(date.getDate() + 1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else {
      date.setDate(date.getDate() + 1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    }
  } else if (savingCode === 'M') {
    if (Number(savingDetailCode) < date.getDate()) {
      date.setMonth(date.getMonth() + 1);
      date.setDate(Number(savingDetailCode));
      date.setDate(date.getDate() + 1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else if (Number(savingDetailCode) > date.getDate()) {
      date.setDate(Number(savingDetailCode));
      date.setDate(date.getDate() + 1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    } else {
      date.setDate(date.getDate() + 1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    }
  } else if (savingCode === 'D') {
    date.setDate(date.getDate() + 1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
  }
  return date;
};
const calculateRealTimeTotalAmount = (
  currentAmount,
  savingAmount,
  strStartDate,
  strEndDate,
  savingCode,
  savingDetailCode
) => {
  var realTimeAmount = 0;
  var totalAmount = 0;

  var startDate = convertStrToDate(strStartDate);
  var endDate = convertStrToDate(strEndDate);

  var currentDateMilliSec = new Date().getTime();
  var startDateMilliSec = startDate.getTime();
  var endDateMilliSec = endDate.getTime();
  var lastDepositDateMilliSec = getLastDepositDate(savingCode, savingDetailCode).getTime();

  var nextDepositDateMilliSec;
  // 아직 한 번도 입금을 안한 경우 : (현재시간 - 목표시작시간 = 경과시간), (다음입금시간 - 목표시작시간 = 입금금액이 채워지기 위한 시간)
  if (lastDepositDateMilliSec < startDateMilliSec) {
    nextDepositDateMilliSec = getNextDepositDate(
      savingCode,
      savingDetailCode,
      startDate,
      true
    ).getTime();
    if (currentDateMilliSec <= startDateMilliSec) {
      realTimeAmount = 0;
      totalAmount = currentAmount;
    } else {
      realTimeAmount =
        (savingAmount * (currentDateMilliSec - startDateMilliSec)) /
        (nextDepositDateMilliSec - startDateMilliSec);
      totalAmount = currentAmount + realTimeAmount;
    }
  }
  // 적어도 입금을 한 번이라도 한 경우 : (현재시간 - 이전입금시간 = 경과시간) , (다음입금시간 - 지난입금시간 = 입금금액이 채워지기위한 시간)
  else {
    nextDepositDateMilliSec = getNextDepositDate(
      savingCode,
      savingDetailCode,
      startDate,
      false
    ).getTime();
    realTimeAmount =
      (savingAmount * (currentDateMilliSec - lastDepositDateMilliSec)) /
      (nextDepositDateMilliSec - lastDepositDateMilliSec);
    totalAmount = currentAmount + realTimeAmount;
  }

  return totalAmount;
};
export {
  addComma2Number,
  getMonthNumber,
  getPercent,
  calculateRealTimeTotalAmount,
  convertStrToDate,
  convertDateToStr,
  getFractionPart,
  getCategoryName,
  createNewDateTime,
  checkSunday,
  getLastDepositDate,
  getNextDepositDate,
};
