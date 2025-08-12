interface ProjectsItem {
  title: string;
  description: string;
  githubUrl: string;
  deployUrl: string;
  portfolioUrl: string;
  technologies: string[];
  contributions: {
    topic: string;
    details: string[];
  }[];
  position: string;
  period: string;
}

const projects: ProjectsItem[] = [
  {
    title: "WiseSub (개인프로젝트)",
    position: "프론트엔드 개발자",
    period: "2025.07.01 - 2025.08.04",
    description:
      "사용중인 구독 서비스를 등록하고, 월별 지출 흐름을 시각적으로 파악할 수 있는 구독 관리 웹 서비스",
    githubUrl: "https://github.com/kimywann/wise-sub",
    deployUrl: "https://wise-sub-deploy.vercel.app/",
    portfolioUrl:
      "https://www.canva.com/design/DAGhtrebMj4/fr96Y9hBM3LmPLsSwQpulg/view?utm_content=DAGhtrebMj4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h46fd2eef7c",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vite",
      "Vercel",
    ],
    contributions: [
      {
        topic: "구독 서비스 관리",
        details: [
          "Supabase의 RESTful API를 활용해 구독 정보 조회, 등록, 수정, 삭제 기능 구현",
          "API 호출 시 async/await 기반의 비동기 처리 및 에러 핸들링 적용",
          "중복 등록 방지를 위해, 이미 등록된 구독 서비스는 UI 상에서 비활성화 처리",
          "구독 시작일, 결제 주기(월간/연간)에 따라 다음 결제일 표시",
          "다음 결제일까지 남은 일수를 계산하여 UI 표시",
          "useDashboardState, useCostCalculator 등 비즈니스 로직을 커스텀 훅으로 분리해 재사용성 향상",
          "월간 구독은 매월 비용에 포함, 연간 구독은 시작 월에만 비용 포함되도록 조건부 합산 로직 구현",
        ],
      },
      {
        topic: "사용자 경험 개선",
        details: [
          "특정 월에 활성 상태인 구독만 목록에 표시",
          "월간 총 구독 금액 및 구독 개수 요약 제공",
          "구독중인 서비스 목록 다양한 화면 크기에서 최적화된 반응형 UI 구현",
          "조건부 스타일링 (clsx + Tailwind)으로 결제 주기(월간, 연간)에 따른 동적 UI 변화 적용",
          "로그인, 회원가입 폼 검증 및 에러 메시지 표시로 사용자 경험 개선",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-12 mb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-b from-[#93c5fd] to-[#2563eb] bg-clip-text mb-3">
          프로젝트
        </h1>
        <hr className="border-blue-300 w-12 mb-8" />
        <div className="space-y-8">
          {projects.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                  <p className="text-lg text-gray-500">{exp.description}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mb-8 text-blue-500">
                <span>
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Github 저장소
                  </a>
                </span>
                <span>
                  <a
                    href={exp.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    배포 페이지
                  </a>
                </span>
                <span>
                  <a
                    href={exp.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    포트폴리오
                  </a>
                </span>
              </div>
              <section>
                <p className="text-md mb-4 font-medium">주요 기여</p>
                <ul className="space-y-4">
                  {exp.contributions.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 items-start">
                      <span className="text-blue-400 text-2xl mr-2">•</span>
                      <span className="font-semibold">{item.topic}</span>

                      {item.details && (
                        <ul className="list-[circle] list-inside pl-5 text-md mt-1">
                          {item.details.map((desc, descIndex) => (
                            <li className="mt-2" key={descIndex}>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
