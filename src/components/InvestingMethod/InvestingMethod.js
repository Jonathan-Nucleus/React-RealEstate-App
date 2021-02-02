import React from "react";
import "./InvestingMethod.sass";
import firstMethod from "./../../assets/icons/InvestingMethod/method-1.svg";
import secondMethod from "./../../assets/icons/InvestingMethod/method-2.svg";
import thirdMethod from "./../../assets/icons/InvestingMethod/method-3.svg";
import fourthMethod from "./../../assets/icons/InvestingMethod/method-4.svg";
import fifthMethod from "./../../assets/icons/InvestingMethod/method-5.svg";
import sixthMethod from "./../../assets/icons/InvestingMethod/method-6.svg";
import numberOne from "./../../assets/icons/InvestingMethod/01.svg";
import numberTwo from "./../../assets/icons/InvestingMethod/2.png";
import numberThree from "./../../assets/icons/InvestingMethod/03.svg";
import numberFour from "./../../assets/icons/InvestingMethod/4.png";
import numberFive from "./../../assets/icons/InvestingMethod/05.svg";
import numberSix from "./../../assets/icons/InvestingMethod/6.png";

const InvestingMethod = () => {
  return (
    <div className="investing-method">
      <div className="investing-method__container">
        <span>
          <div className="investing-method__container-block">
            <div className="investing-method__container-block-title">
              Real Buy 와 함께
            </div>
            <div className="investing-method__container-block-title">
              부동산 투자의 꿈을 실현해보세요
            </div>
          </div>
          <div className="investing-method__container-block">
            <div className="investing-method__pic-block">
              <img
                src={firstMethod}
                alt="first method"
                className="investing-method__left-icon"
              />
              <img
                src={numberOne}
                alt="number one"
                className="investing-method__full-img"
              />
              <div className="investing-method__button-right-container">
                <button className="investing-method__button-right investing-method__button">
                  REAL BUY 회원가입
                </button>
              </div>
              <div className="investing-method__container-large">
                <button className="investing-method__button-right investing-method__button">
                  REAL BUY 회원가입
                </button>
              </div>
            </div>

            <div className="investing-method__pic-block">
              <img
                src={numberTwo}
                alt="number one"
                className="investing-method__number-left investing-method__full-img"
              />
              <img
                src={secondMethod}
                alt="first method"
                className="investing-method__right-icon"
              />
              <div className="investing-method__button-container">
                <button className="investing-method__button-left investing-method__button">
                  가상계좌 개설 및 확인
                </button>
              </div>
              <div className="investing-method__container-large">
                <button className="investing-method__button-left investing-method__button">
                  가상계좌 개설 및 확인
                </button>
              </div>
            </div>

            <div className="investing-method__pic-block">
              <img
                src={thirdMethod}
                alt="first method"
                className="investing-method__left-icon"
              />
              <img
                src={numberThree}
                alt="number one"
                className="investing-method__full-img"
              />
              <div className="investing-method__button-right-container">
                <button className="investing-method__button-right investing-method__button">
                  투자상품 확인
                </button>
              </div>
              <div className="investing-method__container-large">
                <button className="investing-method__button-right investing-method__button">
                  투자상품 확인
                </button>
              </div>
            </div>
            <div className="investing-method__pic-block">
              <img
                src={numberFour}
                alt="number one"
                className="investing-method__number-left investing-method__full-img"
              />
              <img
                src={fourthMethod}
                alt="first method"
                className="investing-method__right-icon"
              />
              <div className="investing-method__button-container">
                <button className="investing-method__button-left investing-method__button">
                  투자하기
                </button>
              </div>
              <div className="investing-method__container-large">
                <button className="investing-method__button-left investing-method__button">
                  투자하기
                </button>
              </div>
            </div>
            <div className="investing-method__pic-block">
              <img
                src={fifthMethod}
                alt="first method"
                className="investing-method__left-icon"
              />
              <img
                src={numberFive}
                alt="number one"
                className="investing-method__full-img"
              />
              <div className="investing-method__button-right-container">
                <button className="investing-method__button-right investing-method__button">
                  투자 내역
                </button>
              </div>
              <div className="investing-method__container-large">
                <button className="investing-method__button-right investing-method__button">
                  투자 내역
                </button>
              </div>
            </div>
            <div className="investing-method__pic-block">
              <img
                src={numberSix}
                alt="number one"
                className="investing-method__number-left investing-method__full-img"
              />
              <img
                src={sixthMethod}
                alt="first method"
                className="investing-method__right-icon investing-method__right-icon-last"
              />
              <div className="investing-method__text-container"></div>
              <div className="investing-method__button-container">
                <button className="investing-method__button-last investing-method__button">
                  마이페이지
                </button>
              </div>
              <div className="investing-method__container-large">
                <button className="investing-method__button-last investing-method__button">
                  마이페이지
                </button>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default InvestingMethod;
