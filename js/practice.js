const addComma2Number = (price) => {

  const type = typeof price;

  if(type == 'string') {
    price = price.replace(',', '');
  } else if(type == 'number') {
    price += '';
  }

  const array = price.split("").reverse();
  const result = [];
  array.forEach((value, index) => {
    result.push(value);
    if(index != 0 && index % 3 == 2 && index != array.length-1) {
      result.push(',');
    }
  });

  return result.reverse().join("");
}

const setWonMonthRate = ({won, month, rate}) => {
  document.getElementById('won').value = addComma2Number(won);
  document.getElementById('month').value = month;
  document.getElementById('rate').value = rate;
}

const getWonMonthRate = () => {
  return {
    won: document.getElementById('won').value ? parseInt(document.getElementById('won').value.replace(',', '')) : `300,000`,
    month : document.getElementById('month').value ? parseInt(document.getElementById('month').value) : `24`,
    rate: document.getElementById('rate').value ? parseFloat(document.getElementById('rate').value) : `2.3`,
  }
}

const compoundInterestCalculate = ({won, month, rate}) => {
  
  let total = 0;
  for(let i=1; i<=month; i++) {
    total = total + won + ((total + won) * (rate / 1200)); 
  }

  return {
    principal: won * month,
    interest: parseInt(total) - (won * month),
    total: parseInt(total),
  }
}

const simpleInterestCalculate = ({won, month, rate}) => {
  const interest = won * ((month * (month + 1)) / 2) * (rate/1200);

  return {
    principal: won * month,
    interest,
    total: parseInt((won * month) + interest),
  }
}

const setPrincipalInterestTotal = ({principal, interest, total}) => {
  document.getElementById('principal').innerHTML = addComma2Number(principal);
  document.getElementById('interest').innerHTML = addComma2Number(interest);
  document.getElementById('total').innerHTML = addComma2Number(total);
}

const getPrincipalInterestTotal = (wonMonthRate) => {

  const status = document.getElementById('status').value;
  
  if(status == "1") {
    const compoundInterest = compoundInterestCalculate(wonMonthRate);
    setPrincipalInterestTotal(compoundInterest);
  } else {
    const simpleInterest = simpleInterestCalculate(wonMonthRate);
    setPrincipalInterestTotal(simpleInterest);
  }
}

const factoryInputListener = (e) => {
  const presentValue = document.getElementById('present').value;
  const wonMonthRate = getWonMonthRate();
  if(presentValue == "") return;

  getPrincipalInterestTotal(wonMonthRate);

}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});
document.addEventListener('input', factoryInputListener);

const wonMonthRateObject = getWonMonthRate();
setWonMonthRate(wonMonthRateObject);