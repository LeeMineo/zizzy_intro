import React, { useEffect, useRef } from 'react';
import './styles/Team.css';

const teamData = [
  {
    name: "Lee Min Seo",
    role: "프론트엔드 개발자 & PM",
    description: "ZIZZY의 UI/UX 개발 및 서비스 기획 총괄. 다수의 웹 서비스 & 애니메이션 인터랙션 개발 경험 보유.",
    image: "/assets/sli.png", 
  },
  {
    name: "Chae Jung Won",
    role: "백엔드 & AI 개발자",
    description: "AI 기반 모션 분석 & 피드백 시스템 개발 담당. 데이터 처리 및 알고리즘 최적화 경험 다수.",
    image: "/assets/sli.png",
  },
  {
    name: "Kang Hyee Kun",
    role: "디자이너 & 마케팅 기획",
    description: "ZIZZY의 브랜드 디자인 및 UX 최적화 담당. AI 기반 영상 편집 트렌드 분석 및 사용자 경험 연구.",
    image: "/assets/octo.png", 
  },
  {
    name: "Woo Ji Yun",
    role: "AI 엔지니어",
    description: "댄스 모션 인식 및 학습 최적화 모델 개발 담당. AI 기반 영상 분석 프로젝트 경험 보유.",
    image: "/assets/sli.png", 
  },
];

function Team() {
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

    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="team-section">
      <h2 className="team-title" ref={titleRef}>
        우리는 <strong>AI와 영상 기술</strong>을 활용하여 <strong>숏폼 콘텐츠 제작의 미래</strong>를 만듭니다.
      </h2>
      <div className="team-container">
        {teamData.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={`${member.name} 이미지`} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
