import Link from "next/link";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="new-app-main-banner-wrap-area">
        <div className="container-fluid">
          <div className="row align-items-center mb-5">
            <div className="col-xl-7 col-lg-8 col-md-12">
              <div className="new-app-main-banner-wrap-content" style={{textAlign: 'center'}}>
                <h1>CDL на русском языке</h1>
                <p>
                  Приложение CDL Help поможет Вам не только подготовиться к
                  тестам CDL для того чтобы получить водительские права и стать
                  дальнобойщиком в США, но с изучением английского языка.
                </p>

                <div className="app-btn-box">
                  <a href="#download" className="applestore-btn">
                    <i><img src="images/icons/download-bar-down.svg" style={{color: "white", width: 30, height: 30}}></img></i>
                    iOS / Android
                    <span>Скачать</span>
                  </a>
                    <a href="https://test.cdlhelp.com" className="playstore-btn">
                      <i className="ri-play-fill main-banner-btn-icon"></i>
                      Попробовать 
                      <span>Бесплатно</span>
                    </a>
                </div>
                <div style={{display: 'flex', gap: 10, alignItems: 'center', margin: '20px 5px', justifyContent: 'center'}}>
                  <img src="images/stars.png" style={{color: "white", width: 100, height: 20}}></img>
                  <p>
                    Более 3000 отзывов на Google Play и App Store
                  </p>
                </div>
                <div style={{marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5}}>
                  <a href="https://www.t.me/TruckDriverHelp" target="_blank">
                    <i
                      className="ri-telegram-fill"
                      style={{ color: "#3c9ff0", fontSize: 26 }}
                    ></i>
                  </a>
                  <a style={{ fontWeight: 600 }} href="https://www.t.me/truckdrivergroup">
                    Телеграм чат для начинающих дальнобойщиков
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 d-lg-block d-none">
              <ScrollAnimation
                animateIn="fadeInLeft"
                duration={2}
                animateOnce={true}
                initiallyVisible={false}
              >
                <div className="new-app-main-banner-wrap-image">
                  <Image
                    src="/images/banner/cdl-help-app.png"
                    alt="image"
                    width={380}
                    height={600}
                  />

                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default MainBanner;
