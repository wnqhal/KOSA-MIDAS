import React from "react";
import styled from "styled-components";
import AdminHeader from "../admin/AdminHeader";

const Meeting = () => {
  const onClickTime = () => {
    alert("시간이 입력되었습니다.");
  };

  const onClickNoTime = () => {
    alert("취소되었습니다.");
    window.location.replace("/admin-meeting");
  };

  const onClickSubmit = () => {
    alert("회의가 신청되었습니다.");
  };

  return (
    <Wrapper>
      <AdminHeader />
      <Title>회의</Title>
      <hr />
      <InputWrapper>
        <InputWrapperOne>
          <div className="one">
            <div className="date">
              <p>회의 날짜</p>
              <div className="showDate">
                <input type={"text"} placeholder="yymmdd" />
              </div>
            </div>
            <div className="people">
              <p>참석자</p>
              <input className="showPeople" />
            </div>
          </div>
          <MeetingContent placeholder="회의 안건" />
          <BtnWrapper>
            <button onClick={onClickSubmit}>회의 신청하기</button>
          </BtnWrapper>
        </InputWrapperOne>
        <InputWrapperTwo>
          <TimeInput>
            <div className="choice">
              <AM>AM</AM>
              <PM>PM</PM>
            </div>
            <HourInput type={"text"} placeholder="시간을 입력해주세요" />
            <MinutInput type={"text"} placeholder="분을 입력해주세요" />
            <hr />
            <TimeBtnWrapper>
              <button className="cancle" onClick={onClickNoTime}>
                취소
              </button>
              <button className="ok" onClick={onClickTime}>
                확인
              </button>
            </TimeBtnWrapper>
          </TimeInput>
        </InputWrapperTwo>
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > hr {
    width: 1150px;
    margin: 0;
    margin-left: 180px;
    margin-bottom: 55px;
  }
`;

const Title = styled.h1`
  margin: 120px 0 5px 180px;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const InputWrapperOne = styled.div`
  display: flex;
  flex-direction: column;
  .one {
    display: flex;
  }

  .date {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 385px;
    height: 70px;
    margin-left: 180px;
    margin-right: 30px;
    border-radius: 15px;
    background-color: #f0f4f9;
    .showDate {
      width: 120px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 15px;
      margin-left: 80px;
      > input {
        width: 60px;
        border: none;
        outline: none;
      }
    }
  }

  .people {
    display: flex;
    align-items: center;
    width: 385px;
    height: 70px;
    margin-right: 30px;
    border-radius: 15px;
    background-color: #f0f4f9;
    > p {
      margin-left: 70px;
    }
    .showPeople {
      border: none;
      outline: none;
      width: 120px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      margin-left: 30px;
    }
  }
`;

const MeetingContent = styled.textarea`
  width: 780px;
  height: 140px;
  margin-left: 180px;
  margin-top: 30px;
  border-radius: 15px;
  background-color: #f0f4f9;
  border: none;
  padding: 10px;
  outline: none;
  resize: none;
`;

const BtnWrapper = styled.div`
  width: 800px;
  margin-top: 30px;
  margin-left: 180px;
  display: flex;
  justify-content: flex-end;
  > button {
    cursor: pointer;
    width: 200px;
    height: 62px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    background-color: #0051cb;
    border: none;
  }
`;

const InputWrapperTwo = styled.div``;

const TimeInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 350px;
  background-color: #f0f4f9;
  border-radius: 20px;
  .choice {
    margin-bottom: 43px;
  }

  > hr {
    width: 300px;
    height: 1px;
    margin-bottom: 25px;
    border: none;
    background-color: white;
  }
`;

const AM = styled.button`
  cursor: pointer;
  width: 50px;
  height: 30px;
  outline: none;
  border: none;
  background-color: white;
  border-radius: 15px 0px 0px 15px;
`;

const PM = styled.button`
  cursor: pointer;
  width: 50px;
  height: 30px;
  outline: none;
  border: none;
  color: white;
  background-color: #1c6de8;
  border-radius: 0px 15px 15px 0px;
`;

const HourInput = styled.input`
  width: 200px;
  height: 36px;
  padding-left: 6px;
  border-radius: 20px;
  margin-bottom: 14px;
  border: none;
  outline: none;
`;

const MinutInput = styled.input`
  width: 200px;
  height: 36px;
  padding-left: 6px;
  border-radius: 20px;
  margin-bottom: 36px;
  border: none;
  outline: none;
`;

const TimeBtnWrapper = styled.div`
  width: 262px;
  display: flex;
  justify-content: space-between;

  .cancle {
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: white;
  }

  .ok {
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: #1c6de8;
  }
`;

export default Meeting;
