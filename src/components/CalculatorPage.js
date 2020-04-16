import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import {
  getWonMonthRate,
  getPrincipalInterestTotal,
} from "./CalculatorPageFunc";
import M from "materialize-css";
const Calculator = () => {
  const [flag, setFlag] = useState(false);

  const factoryInputListener = (e) => {
    if (flag === false) {
      return;
    }
    const presentValue = document.getElementById("present").value;
    const wonMonthRate = getWonMonthRate();
    if (presentValue == "") return;

    getPrincipalInterestTotal(wonMonthRate);
  };

  // DOMContentLoaded는 useEffect로 대체한다.
  /*
  document.addEventListener("DOMContentLoaded", function () {
    const elems = document.querySelectorAll("select");
    const instances = M.FormSelect.init(elems, {});
  });
  */

  // 기본 value값이랑 수치가 겹쳐나온다.
  /*
  const wonMonthRateObject = getWonMonthRate();
  setWonMonthRate(wonMonthRateObject);
  */
  useEffect(() => {
    setFlag(true);
    const elems = document.querySelectorAll("select");
    const instances = M.FormSelect.init(elems, {});
    document.addEventListener("input", factoryInputListener);
  });
  return (
    <Layout>
      <div className="row">
        <div className="col s1"></div>
        <div className="col s11">
          <h3>🏦 적금 계산기</h3>
        </div>
      </div>
      <div className="row">
        <div className="col s1"></div>
        <div className="col s11">
          만기에 실제로 얼마를 모을 수 있을지 계산해보세요.😁
        </div>
      </div>
      <div className="row valign-wrapper">
        <div className="col s1"></div>
        <div className="col s1" style={{ color: "#757575" }}>
          상품
        </div>
        <div className="input-field col s3">
          <select
            id="present"
            onChange={() => {
              this.factoryInputListener();
            }}
          >
            <option value="" defaultValue disabled>
              상품을 선택하세요.
            </option>
            <option value="1"> 적금</option>
          </select>
        </div>

        <div className="col s7"></div>
      </div>
      <div className="row valign-wrapper">
        <div className="col s1"></div>
        <div className="col s1" style={{ color: "#757575" }}>
          매달 납입금액
        </div>
        <div className="input-field col s3">
          <input id="won" type="text" className="validate" />
          <label htmlFor="won">금액입력 (원)</label>
        </div>
        <div className="col s7"></div>
      </div>
      <div className="row valign-wrapper">
        <div className="col s1"></div>
        <div className="col s1" style={{ color: "#757575" }}>
          기간
        </div>
        <div className="input-field col s3">
          <input id="month" type="text" className="validate" />
          <label htmlFor="month">기간입력 (개월)</label>
        </div>
        <div className="col s7"></div>
      </div>
      <div className="row valign-wrapper">
        <div className="col s1"></div>
        <div className="col s1" style={{ color: "#757575" }}>
          이자율
        </div>
        <div className="input-field col s3">
          <input id="rate" type="text" className="validate" />
          <label htmlFor="rate">이자율입력 (%)</label>
        </div>
        <div className="col s1">
          <select
            id="status"
            onChange={() => {
              factoryInputListener();
            }}
          >
            <option value="1"> 복리</option>
            <option value="2"> 단리</option>
          </select>
        </div>
        <div className="col s6"></div>
      </div>

      <div className="row valign-wrapper">
        <div className="col s1"></div>
        <div className="col s1" style={{ color: "#757575" }}>
          세금구분
        </div>
        <div className="input-field col s3">
          <select
            id="taxType"
            onChange={() => {
              factoryInputListener();
            }}
          >
            <option value="">적용안함</option>
            <option value="1"> 일반과세</option>
            <option value="2"> 세금우대</option>
            <option value="3"> 상호금융권 및 새마을금고, 신협 저과세</option>
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
                <h5>만기 지급금액</h5>
              </div>
            </div>
            <div className="row" style={{ fontSize: "large" }}>
              <div className="col s2 right-align">원금</div>
              <div id="principal" className="col s8 right-align"></div>
              <div className="col s2 left-align">원</div>
            </div>
            <div className="row" style={{ fontSize: "large" }}>
              <div className="col s2 right-align">이자</div>
              <div id="interest" className="col s8 right-align"></div>
              <div className="col s2 left-align">원</div>
            </div>
            <div className="row" style={{ fontSize: "large" }}>
              <div className="col s2 right-align">세금</div>
              <div id="tax" className="col s8 right-align"></div>
              <div className="col s2 left-align">원</div>
            </div>
            <div className="row" style={{ fontSize: "larger" }}>
              <div className="col s2 right-align">총합</div>
              <div
                id="total"
                className="col s8 right-align"
                style={{ fontWeight: "bold" }}
              ></div>
              <div className="col s2 left-align">원</div>
            </div>
          </div>
        </div>
        <div className="col s6"></div>
      </div>
    </Layout>
  );
};
export default Calculator;
