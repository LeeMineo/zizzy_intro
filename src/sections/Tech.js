import React, { useEffect, useRef } from 'react';
import './styles/Tech.css';

const techData = [
  {
    title: "AI 기반 안무 분석 & 피드백 시스템",
    description: "AI가 사용자 모션을 실시간으로 인식하고, 정확도와 타이밍을 비교하여 피드백을 제공합니다. 손/발/리듬의 오차를 시각적으로 표시하여 교정 학습을 돕습니다.",
  },
  {
    title: "맞춤형 속도 조절 및 구간 반복 학습",
    description: "사용자의 실력에 따라 AI가 속도를 자동 조절하며, 어려운 구간은 반복 학습을 유도합니다. 챌린지 전체를 단계별로 완성할 수 있게 지원합니다.",
  },
  {
    title: "AI 유사도 비교 알고리즘",
    description: "기준 모션과 사용자 모션의 프레임별 유사도를 분석하여 학습 성공 여부를 판단합니다. 사용자가 원하는 정확도 수준별로 기준 만족 시 다음 단계로 진행됩니다.",
  },
  {
    title: "챌린지 자동 분석 & 추천 엔진",
    description: "틱톡, 릴스 등 숏폼 플랫폼의 인기 챌린지를 자동 크롤링·분석하고, 사용자 스타일에 맞는 챌린지를 추천합니다.",
  },
  {
    title: "학습 이력 기반 성장 분석 시스템",
    description: "사용자의 연습 기록과 정확도 데이터를 클라우드에 저장하여 성장 그래프와 피드백을 시각화합니다.",
  },
  {
    title: "AI 모션 캡처 연동",
    description: "회사 내 댄서의 고품질 모션을 수집하고, 사용자는 이를 기반으로 트레이닝을 받을 수 있습니다.",
  },
];

function Tech() {
  const titleRef = useRef();

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
    <section id="tech" className="tech-section">
      <h2 className="tech-title" ref={titleRef}>
        <strong>AI 기술</strong>을 통해 <strong>개인 맞춤형 챌린지 학습과 피드백</strong>을 제공합니다.
      </h2>
      <div className="tech-grid">
        {techData.map((tech, index) => (
          <div className="tech-item" key={index}>
            <div className="tech-icon"></div>
            <div className="tech-content">
              <h3>{tech.title}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tech;
