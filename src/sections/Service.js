import React, { useState, useEffect, useRef } from 'react';
import './styles/Service.css';

const serviceData = [
  {
    title: "AI 맞춤형 댄스 학습",
    description1: "AI가 안무를 분석하고, 사용자의 실력에 맞춘 단계별 학습을 제공",
    description2: "속도 조절, 구간 반복, 동작 피드백 등 체계적인 학습 기능 포함",
  },
  {
    title: "AI 동작 정확도 분석 & 피드백",
    description1: "어디서 동작이 틀렸는지 시각적으로 피드백 (예: 손 위치, 발 타이밍 등)",
    description2: "학습 데이터 기반으로 사용자 맞춤 피드백 & 개선 포인트 추천",
  },
  {
    title: "트렌디한 챌린지 추천",
    description1: "숏폼 플랫폼의 인기 챌린지를 분석하여 사용자 맞춤형 추천",
    description2: "최신 트렌드를 놓치지 않고 빠르게 학습하고 참여 가능",
  },
  {
    title: "AI 자동 촬영 & 보정",
    description1: "AI가 최적의 촬영 각도와 조명을 추천하여 고품질 영상 제작 지원",
    description2: "체형 보정 및 스타일 최적화 기능으로 자신감 있는 영상 촬영 가능",
  },
  {
    title: "구독 & 추가 결제 모델",
    description1: "일일 무료 학습 제공 + 추가 학습은 개별 결제 또는 구독 모델 적용",
    description2: "프리미엄 기능으로 광고 없이 AI 촬영 보정 & 맞춤 학습 지원",
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
          entry.target.classList.remove('show'); // 다시 초기화
        }
      });
    };

    const observerOptions = {
      threshold: 0.1, // 10% 보이면 실행
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="service" className="service-section">
      <h2 className="service-title" ref={titleRef}>
        AI 기반 맞춤형 댄스 학습부터 최적의 촬영까지, <strong>완벽한 숏폼 제작을 위한 올인원 플랫폼</strong>
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
