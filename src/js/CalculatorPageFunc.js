const addTax2InterestObject = (interestObject, taxRate) => {
  const { interest, total } = interestObject;
  const tax = Math.round(interest * taxRate);

  interestObject.tax = tax;
  interestObject.total = total - tax;
  return interestObject;
};

const calculateTax = (interestObject, taxType) => {
  const NORMAL_TAX = 0.154; // 일반과세
  const BREAK_TAX = 0.095; // 세금우대
  const MUTUAL_FINANCE = 0.014; // 상호금융권 및 새마을금고, 신협 저과세

  if (taxType == '') {
    return addTax2InterestObject(interestObject, 0);
  } else if (taxType == '1') {
    return addTax2InterestObject(interestObject, NORMAL_TAX);
  } else if (taxType == '2') {
    return addTax2InterestObject(interestObject, BREAK_TAX);
  } else if (taxType == '3') {
    return addTax2InterestObject(interestObject, MUTUAL_FINANCE);
  }
};

const compoundInterestCalculate = ({ won, month, rate, taxType }) => {
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

  return calculateTax(interestObject, taxType);
};

const simpleInterestCalculate = ({ won, month, rate, taxType }) => {
  const interest = won * ((month * (month + 1)) / 2) * (rate / 1200);
  const interestObject = {
    principal: won * month,
    interest,
    total: Math.round(won * month + interest),
  };
  return calculateTax(interestObject, taxType);
};

export const getPrincipalInterestTotal = (status, wonMonthRateTaxtype) => {
  console.log(wonMonthRateTaxtype);

  if (status == '1') {
    const compoundInterest = compoundInterestCalculate(wonMonthRateTaxtype);
    return compoundInterest;
  } else {
    const simpleInterest = simpleInterestCalculate(wonMonthRateTaxtype);
    return simpleInterest;
  }
};
