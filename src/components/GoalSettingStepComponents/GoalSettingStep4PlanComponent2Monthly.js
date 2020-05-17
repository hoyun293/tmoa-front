import React, { useState } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const Date = styled.div`
  margin: 1rem;
`;
const SelectedDate = styled.div`
  margin: 1rem;
  border: 1px solid red;
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
      date === d && <SelectedDate>{d}</SelectedDate>;
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
        {date === '1' && <SelectedDate>1</SelectedDate>}
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
        {date === '2' && <SelectedDate>2</SelectedDate>}
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
        {date === '3' && <SelectedDate>3</SelectedDate>}
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
        {date === '4' && <SelectedDate>4</SelectedDate>}
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
        {date === '5' && <SelectedDate>5</SelectedDate>}
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
        {date === '6' && <SelectedDate>6</SelectedDate>}
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
        {date === '7' && <SelectedDate>7</SelectedDate>}
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
        {date === '8' && <SelectedDate>8</SelectedDate>}
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
        {date === '9' && <SelectedDate>9</SelectedDate>}
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
        {date === '10' && <SelectedDate>10</SelectedDate>}
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
        {date === '11' && <SelectedDate>11</SelectedDate>}
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
        {date === '12' && <SelectedDate>12</SelectedDate>}
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
        {date === '13' && <SelectedDate>13</SelectedDate>}
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
        {date === '14' && <SelectedDate>14</SelectedDate>}
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
        {date === '15' && <SelectedDate>15</SelectedDate>}
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
        {date === '16' && <SelectedDate>16</SelectedDate>}
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
        {date === '17' && <SelectedDate>17</SelectedDate>}
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
        {date === '18' && <SelectedDate>18</SelectedDate>}
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
        {date === '19' && <SelectedDate>19</SelectedDate>}
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
        {date === '20' && <SelectedDate>20</SelectedDate>}
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
        {date === '21' && <SelectedDate>21</SelectedDate>}
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
        {date === '22' && <SelectedDate>22</SelectedDate>}
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
        {date === '23' && <SelectedDate>23</SelectedDate>}
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
        {date === '24' && <SelectedDate>24</SelectedDate>}
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
        {date === '25' && <SelectedDate>25</SelectedDate>}
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
        {date === '26' && <SelectedDate>26</SelectedDate>}
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
        {date === '27' && <SelectedDate>27</SelectedDate>}
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
        {date === '28' && <SelectedDate>28</SelectedDate>}
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
        {date === '29' && <SelectedDate>29</SelectedDate>}
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
        {date === '30' && <SelectedDate>30</SelectedDate>}
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
        {date === 'fin' && <SelectedDate>월말</SelectedDate>}
      </Row>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent2Monthly;
