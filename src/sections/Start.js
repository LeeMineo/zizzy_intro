import React from 'react';
import './styles/Start.css';

function Start() {
  return (
    <section id="start" className="start-section">
  <img src="/assets/zizzy_bg.jpg" alt="Running Background" className="intro-background" />
  <div className="fade-out"></div>
  <div className="text-container">
    <h1>ZIZZY</h1>
    <p>
    누구나 쉽게 학습하는 챌린지, <strong>AI 댄스 트레이닝 플랫폼</strong>
    </p>
  </div>
  <div className="app-logos">
    <img src="/assets/icon/app-store-logo.png" alt="App Store" className="app-logo" />
    <img src="/assets/icon/google-play-logo.png" alt="Google Play" className="app-logo" />
  </div>
</section>

  //   <section id="start" className="start-section">
  //   <img src="/assets/zizzy_bg.jpg" alt="Running Background" className="intro-background" />
  //   <div className="text-container">
  //     <h1>ZIZZY</h1>
  //     <p>
  //       AI 맞춤형 댄스 학습과 트렌디한 영상 촬영, <strong>올인원 솔루션</strong>
  //     </p>
  //   </div>
  //   <div className="app-logos">
  //     <img src="/assets/icon/app-store-logo.png" alt="App Store" className="app-logo" />
  //     <img src="/assets/icon/google-play-logo.png" alt="Google Play" className="app-logo" />
  //   </div>
  // </section>

    // <>
    //   <section id="start" className="start-section">
    //     <div className="text-container">
    //       <h1>ZIZZY</h1>
    //       <p>
    //       AI 맞춤형 댄스 학습과 트렌디한 영상 촬영, <strong>올인원 솔루션</strong>
    //       </p>
    //     </div>
    //   </section>
    //   <section className="image-section">
    //     <div className="image-container">
    //       <img
    //         src="/assets/zizzy_bg.jpg"
    //         alt="AMOGU 소개 이미지"
    //         className="start-image"
    //       />
    //     </div>
    //   </section>
    // </>
  );
}

export default Start;
