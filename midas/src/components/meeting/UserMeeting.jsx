import React from "react";
import styled from "styled-components";
import MenuBar from "../menu";
import StartBar from "../start";

const UserMeeting = () => {
  return (
    <Wrapper>
      <MenuBar />
      <MainWrapper>
        <HeaderWrapper>
          <p>회의</p>
        </HeaderWrapper>
        <hr />
        <InputWrapper>
          <InputWrapperOne>
            <div className="one">
              <div className="date">
                <p>회의 날짜</p>
                <div className="showDate">
                  <p>2022 / 11 / 05</p>
                </div>
              </div>
              <div className="people">
                <p>참석자</p>
                <div className="showPeople">2팀</div>
              </div>
            </div>
            <MeetingContent placeholder="회의 안건" />
            <BtnWrapper>
              <button>회의 신청하기</button>
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
                <button className="cancle">취소</button>
                <button className="ok">확인</button>
              </TimeBtnWrapper>
            </TimeInput>
          </InputWrapperTwo>
        </InputWrapper>
      </MainWrapper>
      <StartBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  margin-top: 160px;
  > hr {
    margin: 0 0 60px 0;
  }
`;

const HeaderWrapper = styled.div`
  width: 780px;
  display: flex;
  justify-content: space-between;

  > p {
    margin: 0 0 10px 0;
    font-size: 30px;
  }
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
    width: 260px;
    height: 70px;
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
      margin-left: 40px;
    }
  }

  .people {
    display: flex;
    align-items: center;
    width: 210px;
    height: 70px;
    margin-right: 30px;
    border-radius: 15px;
    background-color: #f0f4f9;
    > p {
      margin-left: 15px;
    }
    .showPeople {
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
  width: 480px;
  height: 140px;
  margin-top: 30px;
  border-radius: 15px;
  background-color: #f0f4f9;
  border: none;
  padding: 10px;
  outline: none;
  resize: none;
`;

const BtnWrapper = styled.div`
  width: 500px;
  margin-top: 30px;
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
  width: 50px;
  height: 30px;
  outline: none;
  border: none;
  background-color: white;
  border-radius: 15px 0px 0px 15px;
`;

const PM = styled.button`
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

export default UserMeeting;
