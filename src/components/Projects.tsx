interface ProjectsItem {
  title: string;
  description: string;
  technologies: string[];
  contributions: string[];
  position: string;
  period: string;
  githubUrl: string;
}

const projects: ProjectsItem[] = [
  {
    title: "WiseSub - 구독 서비스 관리 플랫폼",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    description:
      "다양한 구독 서비스 현황과 지출을 한눈에 관리할 수 있는 웹 서비스",
    position: "프론트엔드 개발자",
    period: "2025.07.01 - 2025.08.01",
    githubUrl: "https://github.com/kimywann/",
    contributions: [
      "Supabase RESTful API 연동으로 CRUD 작업 구현",
      "Tailwind CSS를 활용한 반응형 UI 개발",
      "성능 최적화 및 사용자 경험 개선",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-12 mb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-b from-[#93c5fd] to-[#2563eb] bg-clip-text mb-5">
          Project
        </h1>
        <div className="space-y-8">
          {projects.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <span className="text-gray-600 text-sm font-sans">
                    {exp.period}
                  </span>
                  <p className="text-md text-blue-500 font-medium">
                    {exp.description}
                  </p>
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2">
                {exp.contributions.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-700 flex items-start"
                  >
                    <span className="text-blue-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
