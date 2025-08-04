interface CommunityItem {
  title: string;
  period: string;
  description: string[];
}

const community: CommunityItem[] = [
  {
    title: "Typescript 스터디",
    period: "2024.08 - 2025.02",
    description: [
      `"타입스크립트 교과서" 도서를 기반으로 매주 스터디를 진행하며, 학습한 내용을 정리해 발표하고 팀원들과 토론하였습니다.`,
    ],
  },
];

export default function Community() {
  return (
    <section className="mb-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-b from-[#93c5fd] to-[#2563eb] bg-clip-text mb-5">
          Community
        </h1>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {community.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                </div>
                <ul className="list-disc list-inside pl-3 text-md">
                  {item.description.map((item, index) => {
                    return <li key={index}>{item}</li>;
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
