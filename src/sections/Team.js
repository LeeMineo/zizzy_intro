// import React, { useEffect, useRef } from 'react';
// import './styles/Team.css';

// const teamData = [
//   {
//     name: "Lee Min Seo",
//     role: "프론트엔드 개발자 & PM",
//     description: "ZIZZY의 UI/UX 개발 및 서비스 기획 총괄. 다수의 웹 서비스 & 애니메이션 인터랙션 개발 경험 보유.",
//     image: "/assets/sli.png", 
//   },
//   {
//     name: "Chae Jung Won",
//     role: "백엔드 & AI 개발자",
//     description: "AI 기반 모션 분석 & 피드백 시스템 개발 담당. 데이터 처리 및 알고리즘 최적화 경험 다수.",
//     image: "/assets/sli.png",
//   },
//   {
//     name: "Kang Hyee Kun",
//     role: "디자이너 & 마케팅 기획",
//     description: "ZIZZY의 브랜드 디자인 및 UX 최적화 담당. AI 기반 영상 편집 트렌드 분석 및 사용자 경험 연구.",
//     image: "/assets/octo.png", 
//   },
//   {
//     name: "Woo Ji Yun",
//     role: "AI 엔지니어",
//     description: "댄스 모션 인식 및 학습 최적화 모델 개발 담당. AI 기반 영상 분석 프로젝트 경험 보유.",
//     image: "/assets/sli.png", 
//   },
// ];

// function Team() {
//   const titleRef = useRef();

//   useEffect(() => {
//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show');
//         } else {
//           entry.target.classList.remove('show'); 
//         }
//       });
//     };

//     const observerOptions = {
//       threshold: 0.1,
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     if (titleRef.current) {
//       observer.observe(titleRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="team" className="team-section">
//       <h2 className="team-title" ref={titleRef}>
//         우리는 <strong>AI와 영상 기술</strong>을 활용하여 <strong>숏폼 콘텐츠 제작의 미래</strong>를 만듭니다.
//       </h2>
//       <div className="team-container">
//         {teamData.map((member, index) => (
//           <div className="team-card" key={index}>
//             <img src={member.image} alt={`${member.name} 이미지`} className="team-image" />
//             <h3 className="team-name">{member.name}</h3>
//             <p className="team-role">{member.role}</p>
//             <p className="team-description">{member.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Team;

import React, { useEffect, useRef } from 'react';
import './styles/Team.css';

const teamData = [
  {
    title: "기획 & 프론트엔드 개발",
    description: "사용자 경험을 최우선으로 고려한 UI/UX 설계와 웹/앱 서비스 개발 역량을 바탕으로, 누구나 쉽고 편하게 챌린지를 배울 수 있는 환경을 만듭니다.",
    image: "/assets/sli.png",
  },
  {
    title: "AI 모션 분석 & 백엔드 기술",
    description: "모션 인식 기술과 AI 피드백 시스템을 개발하여, 정확하고 체계적인 학습 경험을 제공합니다. 사용자 데이터를 안전하게 처리하고 최적화된 서비스를 지원합니다.",
    image: "/assets/sli.png",
  },
  {
    title: "브랜딩 & 서비스 디자인",
    description: "브랜드 아이덴티티와 사용자 경험을 고려한 디자인 전략을 수립하고, 사용자가 ZIZZY에서 즐겁게 학습할 수 있는 환경을 만들어갑니다.",
    image: "/assets/octo.png",
  },
  {
    title: "데이터 기반 성장 지원",
    description: "사용자의 학습 데이터를 분석하여 개인화된 성장 피드백을 제공합니다. 데이터를 통해 더 나은 학습 전략과 서비스를 끊임없이 개선합니다.",
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

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="team-section">
      <h2 className="team-title" ref={titleRef}>
        우리는 <strong>AI 기술과 사용자 경험</strong>을 결합해  
        <strong>누구나 챌린지를 완성할 수 있는 학습 플랫폼</strong>을 만듭니다.
      </h2>
      <div className="team-container">
        {teamData.map((item, index) => (
          <div className="team-card" key={index}>
            <img src={item.image} alt={`${item.title} 아이콘`} className="team-image" />
            <h3 className="team-name">{item.title}</h3>
            <p className="team-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
