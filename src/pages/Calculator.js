import React, { useEffect, useState, useCallback } from 'react';
import Layout from './Layout';
import { getPrincipalInterestTotal } from '../js/CalculatorPageFunc';

const replaceAllComma = (value) => {
  let validator = true;
  const commaPattern = /[,]/;

  while (validator) {
    value = value.replace(',', '');
    validator = commaPattern.test(value);
  }

  return value;
};

const addComma2Number = (price) => {
  const type = typeof price;

  if (type == 'number') {
    price += '';
  }

  price = replaceAllComma(price);

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

const useWonHook = (initValue = null) => {
  const [value, setValue] = useState(initValue);
  const setComma = useCallback((e) => {
    const result = addComma2Number(e.target.value);
    setValue(result);
  }, []);

  return [value, setComma];
};

const Calculator = () => {
  const [present, setPresent] = useState('1');
  const [won, setWon] = useWonHook('');
  const [month, setMonth] = useState('');
  const [rate, setRate] = useState('');

  const [status, setStatus] = useState('1');
  const [taxType, setTaxType] = useState('');

  const [principal, setPrincipal] = useState('');
  const [interest, setInterest] = useState('');
  const [tax, setTax] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    const elems = document.querySelectorAll('select');
    //const instances = M.FormSelect.init(elems, {});
  }, []);

  useEffect(() => {
    if (won == '') return;
    if (month == '') return;
    if (rate == '') return;

    const principalInterestTotalTax = getPrincipalInterestTotal(status, {
      won: parseFloat(replaceAllComma(won)),
      month: parseInt(month),
      rate: parseFloat(rate),
      taxType,
    });

    const { principal, interest, total, tax } = principalInterestTotalTax;
    setPrincipal(addComma2Number(principal));
    setInterest(addComma2Number(interest));
    setTotal(addComma2Number(total));
    setTax(addComma2Number(tax));
  }, [present, won, month, rate, status, taxType]);

  return (
    <Layout>
      <div className="row">
        <div className="col s1"></div>
        <div className="col s11">
          <h3>???? ?????? ?????????</h3>
        </div>
      </div>
      <div className="row">
        <div className="col s1"></div>
        <div className="col s11">????????? ????????? ????????? ?????? ??? ????????? ??????????????????.????</div>
      </div>
      <div className="row valign-wrapper">
        <div className="col s1"></div>
        <div className="col s1" style={{ color: '#757575' }}>
          ??????
        </div>
        <div className="input-field col s3">
          <select value={present} onChange={setPresent}>
            <option value="" readOnly>
              ????????? ???????????????.
            </option>
            <option value="1"> ??????</option>
          </select>
        </div>

        <div className="col s7"></div>
      </div>
      <div className="row valign-wrapper">
        <div className="col s1"></div>
        <div className="col s1" style={{ color: '#757575' }}>
          ?????? ????????????
        </div>
        <div className="input-field col s3">
          <input type="text" className="validate" value={won} onChange={setWon} />
          <label htmlFor="won">???????????? (???)</label>
        </div>
        <div className="col s7"></div>
      </div>
      <div className="row valign-wrapper">
        <div className="col s1"></div>
        <div className="col s1" style={{ color: '#757575' }}>
          ??????
        </div>
        <div className="input-field col s3">
          <input
            type="text"
            className="validate"
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          />
          <label htmlFor="month">???????????? (??????)</label>
        </div>
        <div className="col s7"></div>
      </div>
      <div className="row valign-wrapper">
        <div className="col s1"></div>
        <div className="col s1" style={{ color: '#757575' }}>
          ?????????
        </div>
        <div className="input-field col s3">
          <input
            type="text"
            className="validate"
            value={rate}
            onChange={(e) => {
              setRate(e.target.value);
            }}
          />
          <label htmlFor="rate">??????????????? (%)</label>
        </div>
        <div className="col s1">
          <select id="status" onChange={setStatus} value={status}>
            <option value="1"> ??????</option>
            <option value="2"> ??????</option>
          </select>
        </div>
        <div className="col s6"></div>
      </div>

      <div className="row valign-wrapper">
        <div className="col s1"></div>
        <div className="col s1" style={{ color: '#757575' }}>
          ????????????
        </div>
        <div className="input-field col s3">
          <select
            id="taxType"
            onChange={(e) => {
              setTaxType(e.target.value);
            }}
            value={taxType}
          >
            <option value="">????????????</option>
            <option value="1"> ????????????</option>
            <option value="2"> ????????????</option>
            <option value="3"> ??????????????? ??? ???????????????, ?????? ?????????</option>
          </select>
        </div>
        <div className="col s7"></div>
      </div>
      <div className="row white-text valign-wrapper">
        <div className="col s1"></div>
        <div className="col s5">
          <div className="card-panel teal">
            <div className="row">
              <div className="col s12">
                <h5>?????? ????????????</h5>
              </div>
            </div>
            <div className="row" style={{ fontSize: 'large' }}>
              <div className="col s2 right-align">??????</div>
              <div className="col s8 right-align">{principal}</div>
              <div className="col s2 left-align">???</div>
            </div>
            <div className="row" style={{ fontSize: 'large' }}>
              <div className="col s2 right-align">??????</div>
              <div className="col s8 right-align">{interest}</div>
              <div className="col s2 left-align">???</div>
            </div>
            <div className="row" style={{ fontSize: 'large' }}>
              <div className="col s2 right-align">??????</div>
              <div className="col s8 right-align">{tax}</div>
              <div className="col s2 left-align">???</div>
            </div>
            <div className="row" style={{ fontSize: 'larger' }}>
              <div className="col s2 right-align">??????</div>
              <div className="col s8 right-align" style={{ fontWeight: 'bold' }}>
                {total}
              </div>
              <div className="col s2 left-align">???</div>
            </div>
          </div>
        </div>
        <div className="col s6"></div>
      </div>
    </Layout>
  );
};
export default Calculator;
