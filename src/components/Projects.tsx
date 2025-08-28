interface ProjectsItem {
  title: string;
  description: string;
  githubUrl: string;
  deployUrl: string;
  portfolioUrl: string;
  technologies: string[];
  contributions: string[];
  position: string;
  period: string;
}

const projects: ProjectsItem[] = [
  {
    title: "WiseSub(개인프로젝트)",
    position: "프론트엔드 개발자",
    period: "2025.07.01 - 2025.08.04",
    description:
      "구독 서비스를 많이 이용하다 보니 결제일을 놓치거나, 사용 중인 서비스조차 기억하기 어려운 불편함이 있었습니다. 이를 해결하기 위해, 사용자가 구독 현황과 결제 일정을 한눈에 파악하고 쉽게 관리할 수 있는 웹 서비스를 개발했습니다.",
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
      "Supabase의 RESTful API를 활용해 구독 정보 조회, 등록, 수정, 삭제 기능 구현",
      "구독 시작일, 결제 주기(월간/연간)에 따라 다음 결제일 표시",
      "다음 결제일까지 남은 일수를 계산하여 UI 표시",
      "월간 구독은 매월 비용에 포함, 연간 구독은 시작 월에만 비용 포함되도록 조건부 합산 로직 구현",
      "특정 월에 활성 상태인 구독만 목록에 표시",
      "CSS Grid를 활용한 반응형 구독 서비스 목록 UI 구현으로 모든 화면 크기에서 일관된 사용자 경험 제공",
      "조건부 스타일링 (clsx + Tailwind)으로 동적 UI 변화 구현",
      "폼 검증 실패 시 useRef를 통한 자동 포커스 이동으로 사용자 입력 오류 최소화",
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
          {projects.map((project, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{project.period}</p>
                  <p className="text-md text-gray-600 mt-2 mb-1">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {project.technologies.map((tech, techIndex) => (
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
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Github 저장소
                  </a>
                </span>
                <span>
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    배포 페이지
                  </a>
                </span>
                <span>
                  <a
                    href={project.portfolioUrl}
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
                <ul className="space-y-1">
                  {project.contributions.map((item, index) => (
                    <li key={index} className="text-gray-700 items-start">
                      <span className="text-2xl mr-2">•</span>
                      <span>{item}</span>
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
