import React, { useState } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const Date = styled.div`
  margin: 1rem;
  border: ${(prop) => (prop.border ? '1px solid pink' : '')};
`;

const GoalSettingStep4PlanComponent2Monthly = (prop) => {
  const [date, setDate] = useState(prop.date);
  /*
  var datesArr = [];
  for (i = 1; i <= 30; i++) {
    arr.push(String(i));
  }
  var dateList = arr.map((d) => {
    {
      date !== d && (
        <Date
          onClick={() => {
            prop.onClickDate(d);
            setDate(d)
          }}
        >
          {d}
        </Date>
      );
    }
    {
      date === d && <Date border={true}>{d}</Date>;
    }
  });
*/
  return (
    <React.Fragment>
      <Row>
        {date !== '1' && (
          <Date
            onClick={() => {
              setDate('1');
              prop.onClickDate('1');
            }}
          >
            1
          </Date>
        )}
        {date === '1' && <Date border={true}>1</Date>}
        {date !== '2' && (
          <Date
            onClick={() => {
              setDate('2');
              prop.onClickDate('2');
            }}
          >
            2
          </Date>
        )}
        {date === '2' && <Date border={true}>2</Date>}
        {date !== '3' && (
          <Date
            onClick={() => {
              setDate('3');
              prop.onClickDate('3');
            }}
          >
            3
          </Date>
        )}
        {date === '3' && <Date border={true}>3</Date>}
        {date !== '4' && (
          <Date
            onClick={() => {
              setDate('4');
              prop.onClickDate('4');
            }}
          >
            4
          </Date>
        )}
        {date === '4' && <Date border={true}>4</Date>}
        {date !== '5' && (
          <Date
            onClick={() => {
              setDate('5');
              prop.onClickDate('5');
            }}
          >
            5
          </Date>
        )}
        {date === '5' && <Date border={true}>5</Date>}
        {date !== '6' && (
          <Date
            onClick={() => {
              setDate('6');
              prop.onClickDate('6');
            }}
          >
            6
          </Date>
        )}
        {date === '6' && <Date border={true}>6</Date>}
        {date !== '7' && (
          <Date
            onClick={() => {
              setDate('7');
              prop.onClickDate('7');
            }}
          >
            7
          </Date>
        )}
        {date === '7' && <Date border={true}>7</Date>}
      </Row>
      <Row>
        {date !== '8' && (
          <Date
            onClick={() => {
              setDate('8');
              prop.onClickDate('8');
            }}
          >
            8
          </Date>
        )}
        {date === '8' && <Date border={true}>8</Date>}
        {date !== '9' && (
          <Date
            onClick={() => {
              setDate('9');
              prop.onClickDate('9');
            }}
          >
            9
          </Date>
        )}
        {date === '9' && <Date border={true}>9</Date>}
        {date !== '10' && (
          <Date
            onClick={() => {
              setDate('10');
              prop.onClickDate('10');
            }}
          >
            10
          </Date>
        )}
        {date === '10' && <Date border={true}>10</Date>}
        {date !== '11' && (
          <Date
            onClick={() => {
              setDate('11');
              prop.onClickDate('11');
            }}
          >
            11
          </Date>
        )}
        {date === '11' && <Date border={true}>11</Date>}
        {date !== '12' && (
          <Date
            onClick={() => {
              setDate('12');
              prop.onClickDate('12');
            }}
          >
            12
          </Date>
        )}
        {date === '12' && <Date border={true}>12</Date>}
        {date !== '13' && (
          <Date
            onClick={() => {
              setDate('13');
              prop.onClickDate('13');
            }}
          >
            13
          </Date>
        )}
        {date === '13' && <Date border={true}>13</Date>}
        {date !== '14' && (
          <Date
            onClick={() => {
              setDate('14');
              prop.onClickDate('14');
            }}
          >
            14
          </Date>
        )}
        {date === '14' && <Date border={true}>14</Date>}
      </Row>
      <Row>
        {date !== '15' && (
          <Date
            onClick={() => {
              setDate('15');
              prop.onClickDate('15');
            }}
          >
            15
          </Date>
        )}
        {date === '15' && <Date border={true}>15</Date>}
        {date !== '16' && (
          <Date
            onClick={() => {
              setDate('16');
              prop.onClickDate('16');
            }}
          >
            16
          </Date>
        )}
        {date === '16' && <Date border={true}>16</Date>}
        {date !== '17' && (
          <Date
            onClick={() => {
              setDate('17');
              prop.onClickDate('17');
            }}
          >
            17
          </Date>
        )}
        {date === '17' && <Date border={true}>17</Date>}
        {date !== '18' && (
          <Date
            onClick={() => {
              setDate('18');
              prop.onClickDate('18');
            }}
          >
            18
          </Date>
        )}
        {date === '18' && <Date border={true}>18</Date>}
        {date !== '19' && (
          <Date
            onClick={() => {
              setDate('19');
              prop.onClickDate('19');
            }}
          >
            19
          </Date>
        )}
        {date === '19' && <Date border={true}>19</Date>}
        {date !== '20' && (
          <Date
            onClick={() => {
              setDate('20');
              prop.onClickDate('20');
            }}
          >
            20
          </Date>
        )}
        {date === '20' && <Date border={true}>20</Date>}
        {date !== '21' && (
          <Date
            onClick={() => {
              setDate('21');
              prop.onClickDate('21');
            }}
          >
            21
          </Date>
        )}
        {date === '21' && <Date border={true}>21</Date>}
      </Row>
      <Row>
        {date !== '22' && (
          <Date
            onClick={() => {
              setDate('22');
              prop.onClickDate('22');
            }}
          >
            22
          </Date>
        )}
        {date === '22' && <Date border={true}>22</Date>}
        {date !== '23' && (
          <Date
            onClick={() => {
              setDate('23');
              prop.onClickDate('23');
            }}
          >
            23
          </Date>
        )}
        {date === '23' && <Date border={true}>23</Date>}
        {date !== '24' && (
          <Date
            onClick={() => {
              setDate('24');
              prop.onClickDate('24');
            }}
          >
            24
          </Date>
        )}
        {date === '24' && <Date border={true}>24</Date>}
        {date !== '25' && (
          <Date
            onClick={() => {
              setDate('25');
              prop.onClickDate('25');
            }}
          >
            25
          </Date>
        )}
        {date === '25' && <Date border={true}>25</Date>}
        {date !== '26' && (
          <Date
            onClick={() => {
              setDate('26');
              prop.onClickDate('26');
            }}
          >
            26
          </Date>
        )}
        {date === '26' && <Date border={true}>26</Date>}
        {date !== '27' && (
          <Date
            onClick={() => {
              setDate('27');
              prop.onClickDate('27');
            }}
          >
            27
          </Date>
        )}
        {date === '27' && <Date border={true}>27</Date>}
        {date !== '28' && (
          <Date
            onClick={() => {
              setDate('28');
              prop.onClickDate('28');
            }}
          >
            28
          </Date>
        )}
        {date === '28' && <Date border={true}>28</Date>}
      </Row>
      <Row>
        {date !== '29' && (
          <Date
            onClick={() => {
              setDate('29');
              prop.onClickDate('29');
            }}
          >
            29
          </Date>
        )}
        {date === '29' && <Date border={true}>29</Date>}
        {date !== '30' && (
          <Date
            onClick={() => {
              setDate('30');
              prop.onClickDate('30');
            }}
          >
            30
          </Date>
        )}
        {date === '30' && <Date border={true}>30</Date>}
        {date !== 'fin' && (
          <Date
            onClick={() => {
              setDate('fin');
              prop.onClickDate('fin');
            }}
          >
            월말
          </Date>
        )}
        {date === 'fin' && <Date border={true}>월말</Date>}
      </Row>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent2Monthly;
