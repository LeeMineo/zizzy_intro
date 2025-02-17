import React, { useEffect, useRef } from 'react';
import './styles/Value.css';

function Value() {
  const valueRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    };

    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    const items = valueRef.current.querySelectorAll('.value-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="value" className="value-section">
      <h2 className="value-title" ref={titleRef}>
        ZIZZY는 <strong>누구나 쉽게 챌린지를 배우고, 자신 있게 촬영</strong>할 수 있는 환경을 제공합니다.
      </h2>
      <div className="value-container" ref={valueRef}>
        {/* Trust */}
        <div className="value-item">
          <img src="/assets/value_icon1.svg" alt="Trust Icon" className="value-icon" />
          <h3>Trust</h3>
          <h4>정확한 가이드, 신뢰할 수 있는 피드백</h4>
          <p>AI 분석을 통해 안무 정확도를 평가하고, 개선할 부분을 안내합니다.</p>
        </div>
        <img src="/assets/value_line.svg" alt="Divider" className="value-divider" />

        {/* Accessibility */}
        <div className="value-item">
          <img src="/assets/value_icon2.svg" alt="Accessibility Icon" className="value-icon" />
          <h3>Accessibility</h3>
          <h4>초보자도 쉽게 배울 수 있는 학습 시스템</h4>
          <p>맞춤형 속도 조절과 단계별 학습으로 누구나 쉽게 따라 할 수 있습니다.</p>
        </div>
        <img src="/assets/value_line.svg" alt="Divider" className="value-divider" />

        {/* Efficiency */}
        <div className="value-item">
          <img src="/assets/value_icon3.svg" alt="Efficiency Icon" className="value-icon" />
          <h3>Efficiency</h3>
          <h4>최단 시간 내 완벽한 챌린지 마스터</h4>
          <p>AI가 최적의 학습 방식과 촬영 가이드를 제공하여 시간을 절약합니다.</p>
        </div>
        <img src="/assets/value_line.svg" alt="Divider" className="value-divider" />

        {/* Creativity */}
        <div className="value-item">
          <img src="/assets/value_icon4.svg" alt="Creativity Icon" className="value-icon" />
          <h3>Creativity</h3>
          <h4>자신만의 스타일로 챌린지를 완성</h4>
          <p>AI 보정과 촬영 최적화를 통해 개성 있는 영상을 제작할 수 있습니다.</p>
        </div>
        <img src="/assets/value_line.svg" alt="Divider" className="value-divider" />
      </div>
    </section>
  );
}

export default Value;
