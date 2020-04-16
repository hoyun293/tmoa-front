const addComma2Number = (price) => {
  const type = typeof price;

  if (type == "string") {
    price = price.replace(",", "");
  } else if (type == "number") {
    price += "";
  }

  const array = price.split("").reverse();
  const result = [];
  array.forEach((value, index) => {
    result.push(value);
    if (index != 0 && index % 3 == 2 && index != array.length - 1) {
      result.push(",");
    }
  });

  return result.reverse().join("");
};

const setWonMonthRate = ({ won, month, rate }) => {
  document.getElementById("won").value = addComma2Number(won);
  document.getElementById("month").value = month;
  document.getElementById("rate").value = rate;
};

export const getWonMonthRate = () => {
  return {
    won: document.getElementById("won").value
      ? parseInt(document.getElementById("won").value.replace(",", ""))
      : `300,000`,
    month: document.getElementById("month").value
      ? parseInt(document.getElementById("month").value)
      : `24`,
    rate: document.getElementById("rate").value
      ? parseFloat(document.getElementById("rate").value)
      : `2.3`,
  };
};

const getTax = () => {
  return document.getElementById("taxType").value;
};

const addTax2InterestObject = (interestObject, taxRate) => {
  const { interest, total } = interestObject;
  const tax = Math.round(interest * taxRate);

  interestObject.tax = tax;
  interestObject.total = total - tax;
  return interestObject;
};

const calculateTax = (interestObject) => {
  const NORMAL_TAX = 0.154; // 일반과세
  const BREAK_TAX = 0.095; // 세금우대
  const MUTUAL_FINANCE = 0.014; // 상호금융권 및 새마을금고, 신협 저과세
  const taxType = getTax();

  if (taxType == "") {
    return addTax2InterestObject(interestObject, 0);
  } else if (taxType == "1") {
    return addTax2InterestObject(interestObject, NORMAL_TAX);
  } else if (taxType == "2") {
    return addTax2InterestObject(interestObject, BREAK_TAX);
  } else if (taxType == "3") {
    return addTax2InterestObject(interestObject, MUTUAL_FINANCE);
  }
};

const compoundInterestCalculate = ({ won, month, rate }) => {
  let total = 0;
  for (let i = 1; i <= month; i++) {
    total = total + won + (total + won) * (rate / 1200);
  }
  const interest = Math.round(total) - won * month;

  const interestObject = {
    principal: won * month,
    interest,
    total: Math.round(total),
  };

  return calculateTax(interestObject);
};

const simpleInterestCalculate = ({ won, month, rate }) => {
  const interest = won * ((month * (month + 1)) / 2) * (rate / 1200);
  const interestObject = {
    principal: won * month,
    interest,
    total: Math.round(won * month + interest),
  };
  return calculateTax(interestObject);
};

const setPrincipalInterestTotal = ({ principal, interest, tax, total }) => {
  document.getElementById("principal").innerHTML = addComma2Number(principal);
  document.getElementById("interest").innerHTML = addComma2Number(interest);
  document.getElementById("tax").innerHTML = `- ${addComma2Number(tax)}`;
  document.getElementById("total").innerHTML = addComma2Number(total);
};

export const getPrincipalInterestTotal = (wonMonthRate) => {
  const status = document.getElementById("status").value;

  if (status == "1") {
    const compoundInterest = compoundInterestCalculate(wonMonthRate);
    setPrincipalInterestTotal(compoundInterest);
  } else {
    const simpleInterest = simpleInterestCalculate(wonMonthRate);
    setPrincipalInterestTotal(simpleInterest);
  }
};
