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
        ZIZZY는 <strong>누구나 쉽게 챌린지를 배우고, 나만의 트레이닐 코치</strong>를 제공합니다.
      </h2>
      <div className="value-container" ref={valueRef}>
      {/* Trust */}
      <div className="value-item">
        <img src="/assets/value_icon1.svg" alt="Trust Icon" className="value-icon" />
        <h3>Trust</h3>
        <h4>정확한 분석, 신뢰할 수 있는 피드백</h4>
        <p>AI가 사용자의 동작을 실시간으로 분석해  
          정확한 평가와 개선 가이드를 제공합니다.</p>
      </div>
      <img src="/assets/value_line.svg" alt="Divider" className="value-divider" />

      {/* Accessibility */}
      <div className="value-item">
        <img src="/assets/value_icon2.svg" alt="Accessibility Icon" className="value-icon" />
        <h3>Accessibility</h3>
        <h4>누구나 쉽게 시작할 수 있는 챌린지 학습</h4>
        <p>초보자도 부담 없이 시작할 수 있도록  
          맞춤 속도와 단계별 학습을 지원합니다.</p>
      </div>
      <img src="/assets/value_line.svg" alt="Divider" className="value-divider" />

      {/* Efficiency */}
      <div className="value-item">
        <img src="/assets/value_icon3.svg" alt="Efficiency Icon" className="value-icon" />
        <h3>Efficiency</h3>
        <h4>빠르고 체계적인 챌린지 완성</h4>
        <p>AI가 구간별로 나눠주는 커리큘럼으로  
          최적의 속도와 순서로 완성도를 높입니다.</p>
      </div>
      <img src="/assets/value_line.svg" alt="Divider" className="value-divider" />

      {/* Growth */}
      <div className="value-item">
        <img src="/assets/value_icon4.svg" alt="Growth Icon" className="value-icon" />
        <h3>Growth</h3>
        <h4>나의 성장 과정을 확인하는 즐거움</h4>
        <p>연습 기록과 성공률을 시각화하여  
          나만의 성장 여정을 확인할 수 있습니다.</p>
      </div>
      <img src="/assets/value_line.svg" alt="Divider" className="value-divider" />
    </div>

    </section>
  );
}

export default Value;
