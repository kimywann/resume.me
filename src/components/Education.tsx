interface EducationItem {
  title: string;
  period: string;
  description: string[];
}

const education: EducationItem[] = [
  {
    title: "프로그래머스 풀스택 데브코스 4기",
    period: "2024.08 - 2025.02",
    description: [
      "타입스크립트로 함께하는 웹 풀사이클 개발(Node.js, TypeScript) 과정 수료",
      "JavaScript/TypeScript, React, node.js, express 환경의 전반적인 웹 기술 학습",
    ],
  },
  {
    title: "한림대학교",
    period: "2020.03 - 2024.08",
    description: ["소프트웨어학부 콘텐츠IT 졸업"],
  },
  {
    title: "한림성심대학교",
    period: "2018.03 - 2020.02",
    description: ["디지털문화콘텐츠과 졸업"],
  },
];

export default function Education() {
  return (
    <section className="mb-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">
          Education
          <span className="text-blue-500 rounded-full">.</span>
        </h1>
        <div className="space-y-10 text-gray-700 leading-relaxed">
          {education.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p>{item.period}</p>
                </div>
                <ul>
                  {item.description.map((item, index) => {
                    return (
                      <li key={index}>
                        <span className="text-blue-400 text-xl mr-2">•</span>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
