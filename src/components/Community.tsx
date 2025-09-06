interface CommunityItem {
  title: string;
  period: string;
  link: string;
  description: string[];
}

const community: CommunityItem[] = [
  {
    title: "Typescript 스터디",
    period: "2024.08 - 2025.02",
    link: "스터디 기록 링크",
    description: [
      `"타입스크립트 교과서" 도서를 기반으로 매주 스터디를 진행하며, 학습한 내용을 정리해 발표하고 팀원들과 지식 공유를 한 경험이 있습니다.`,
    ],
  },
];

export default function Community() {
  return (
    <section className="mb-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Community</h1>
        <hr className="border-blue-500 w-12 mb-8" />
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {community.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                  <a
                    className="cursor-pointer text-blue-600 hover:underline font-bold"
                    href="https://imminent-lunch-7f5.notion.site/18169751594480409bdbe4164170eeee?pvs=74"
                  >
                    {item.link}
                  </a>
                </div>

                {item.description.map((item, index) => {
                  return (
                    <span key={index} className="text-lg text-black">
                      <span className="text-2xl mr-2">•</span>
                      {item}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
