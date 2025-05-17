import React, { useState, useEffect, useRef } from 'react';
import './styles/Service.css';

const serviceData = [
  {
    title: "AI 맞춤형 챌린지 학습",
    description1: "AI가 챌린지를 분석하고, 사용자의 실력에 맞춘 단계별 학습을 제공",
    description2: "속도 조절, 구간 반복, 동작 피드백으로 체계적인 학습 지원",
  },
  {
    title: "AI 동작 분석 & 실시간 피드백",
    description1: "사용자의 동작을 AI가 실시간 분석해 잘못된 부분을 시각적으로 안내",
    description2: "손, 발, 타이밍 등 개선 포인트를 AI가 정확하게 추천",
  },
  {
    title: "최신 챌린지 추천 & 업데이트",
    description1: "틱톡, 릴스, 숏츠에서 유행하는 챌린지를 AI가 자동 분석해 추천",
    description2: "놓치기 쉬운 최신 트렌드도 빠르게 캐치하고 참여 가능",
  },
  {
    title: "나만의 연습 기록 & 성장 피드백",
    description1: "연습 기록을 저장하고, 나의 성장 과정을 시각적으로 확인",
    description2: "이전과 현재를 비교하며 도전 의욕을 높이는 성장 피드백 제공",
  },
  {
    title: "구독 & 추가 학습 결제 모델",
    description1: "하루 4회 무료 학습 제공, 추가 학습은 개별 결제 또는 구독으로 확장",
    description2: "프리미엄 구독 시 무제한 학습과 고급 피드백 제공",
  },
];

function Service() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef();

  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 인디케이터 클릭 시 이동
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  // Title 애니메이션
  useEffect(() => {
    const observerCallback = (entries) => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="service" className="service-section">
      <h2 className="service-title" ref={titleRef}>
        AI 기반 개인 맞춤 챌린지 학습부터 실시간 피드백까지, <strong>누구나 챌린지를 완성할 수 있는 트레이닝 플랫폼</strong>
      </h2>
      <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {serviceData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-line">
              <img src="/assets/service_line.svg" alt="Divider Line" />
            </div>
            <div className="service-card-contents">
              <h3 className="service-title-small">Service {index + 1}</h3>
              <h3 className="service-title-large">{service.title}</h3>
              <p>{service.description1}</p>
              <p>{service.description2}</p>
              <p className="read-more">read more →</p>
            </div>
          </div>
        ))}
      </div>
      <div className="indicators">
        {serviceData.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Service;
