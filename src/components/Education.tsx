export default function Education() {
  return (
    <section className="mb-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Education</h1>
        <hr className="border-blue-500 w-12 mb-8" />
        <div className="space-y-12 text-gray-700 leading-relaxed">
          <div>
            <div>
              <h3 className="text-2xl font-semibold">
                프로그래머스 풀스택 데브코스 4기
              </h3>
              <p className="text-sm text-gray-500 mb-2">2024.08 - 2025.02</p>
            </div>
            <ul>
              <li className="mb-2">
                <span className="text-2xl mr-2">•</span>
                <span className="text-lg text-black">
                  타입스크립트로 함께하는 웹 풀사이클 개발(Node.js, Typescript)
                  과정 수료
                </span>
              </li>
              <li className="mb-2">
                <span className="text-2xl mr-2">•</span>
                <span className="text-lg text-black">
                  Javascript, Typescript, React, Node.js, Express 환경의 웹 기술
                  학습
                </span>
              </li>
              <li className="mb-2">
                <span className="text-2xl mr-2">•</span>
                <span className="text-lg text-black">
                  Git, Github 및 Slack을 활용한{" "}
                  <a
                    href="https://github.com/kimywann/SP_frontend"
                    className="text-blue-600 hover:underline mr-1 font-bold"
                  >
                    팀프로젝트
                  </a>
                  경험
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h3 className="text-2xl font-semibold">한림대학교</h3>
              <p className="text-sm text-gray-500 mb-2">2020.03 - 2024.08</p>
            </div>
            <ul>
              <li className="mb-2">
                <span className="text-2xl mr-2">•</span>
                <span className="text-lg text-black">
                  소프트웨어학부 콘텐츠IT 졸업
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h3 className="text-2xl font-semibold">한림성심대학교</h3>
              <p className="text-sm text-gray-500 mb-2">2018.03 - 2020.02</p>
            </div>
            <ul>
              <li className="mb-2">
                <span className="text-2xl mr-2">•</span>
                <span className="text-lg text-black">
                  디지털문화콘텐츠과 졸업
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
