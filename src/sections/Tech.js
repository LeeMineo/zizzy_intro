import React, { useEffect, useRef } from 'react';
import './styles/Tech.css';

const techData = [
  {
    title: "AI 동작 분석 및 피드백 시스템",
    description: "AI가 사용자의 안무를 실시간 분석하여 정확도와 타이밍 피드백 제공. 사용자의 움직임을 감지하고, 개선이 필요한 부분을 자동으로 안내하여 빠른 학습을 지원.",
  },
  {
    title: "AI 기반 속도 최적화 & 구간 학습",
    description: "초보자는 느린 속도부터 시작하고, 숙련도가 올라가면 자동으로 속도를 조절하여 자연스럽게 챌린지를 익힐 수 있도록 지원.",
  },
  {
    title: "AI 자동 촬영 보정 & 체형 최적화",
    description: "AI가 촬영 각도와 조명을 분석하여 사용자가 가장 돋보일 수 있는 환경을 추천. 체형 맞춤 보정 기능을 통해 더 완성도 높은 영상 제작 지원.",
  },
  {
    title: "실시간 AI 모션 트래킹 시스템",
    description: "AI가 실시간으로 사용자의 움직임을 감지하여, 올바른 동작을 수행할 수 있도록 즉각적인 피드백 제공.",
  },
  {
    title: "트렌디 챌린지 자동 분석 엔진",
    description: "최신 인기 챌린지를 자동 분석하고, 사용자의 스타일과 맞는 챌린지를 추천하여 빠르게 트렌드에 적응할 수 있도록 지원.",
  },
  {
    title: "클라우드 기반 데이터 & 학습 기록 저장",
    description: "사용자의 학습 데이터를 클라우드에 저장하여, 맞춤형 피드백 및 학습 진척도를 분석하여 추천 시스템에 반영.",
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
          entry.target.classList.remove('show'); // 뷰포트에서 벗어나면 클래스 제거
        }
      });
    };

    const observerOptions = {
      threshold: 0.1, // 10% 이상 보이면 실행
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech" className="tech-section">
      <h2 className="tech-title" ref={titleRef}>
        <strong>AI 기술</strong>을 활용해 <strong>맞춤형 댄스 학습과 최적의 촬영 환경</strong>을 제공합니다.
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
