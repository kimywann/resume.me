export default function Projects() {
  return (
    <section className="py-12 mb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-transparent bg-gradient-to-b from-[#93c5fd] to-[#2563eb] bg-clip-text mb-3">
          프로젝트
        </h1>
        <hr className="border-blue-300 w-12 mb-8" />
        <div className="space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <div>
                <h3 className="text-2xl font-semibold">WiseSub</h3>
                <p className="text-gray-500 text-sm">2025.07.01 - 진행 중</p>
                <p className="text-gray-500 text-sm">개인 프로젝트</p>
                <p className="text-md text-gray-600 mt-2 mb-1">
                  구독 서비스를 많이 이용하다 보니 결제일을 놓치거나, 사용 중인
                  서비스조차 기억하기 어려운 불편함이 있었습니다. 이를 해결하기
                  위해, 사용자가 구독 현황과 결제 일정을 한눈에 확인할 수 있는
                  웹 서비스를 개발했습니다.
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                React
              </span>
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                TypeScript
              </span>
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                Tailwind CSS
              </span>
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                Recharts
              </span>
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                Zustand
              </span>
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                Supabase
              </span>
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                Vite
              </span>
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                Vercel
              </span>
            </div>
            <div className="flex gap-4 mb-8 text-blue-500 font-semibold">
              <span>
                <a
                  href="https://github.com/kimywann/wise-sub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Github 저장소
                </a>
              </span>
              <span>
                <a
                  href="https://wise-sub-deploy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  배포 페이지
                </a>
              </span>
              <span>
                <a
                  href="https://www.canva.com/design/DAGhtrebMj4/fr96Y9hBM3LmPLsSwQpulg/view?utm_content=DAGhtrebMj4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h46fd2eef7c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  포트폴리오
                </a>
              </span>
            </div>
            <section>
              <p className="text-lg mb-4 font-semibold">개발 및 기여 내용</p>
              <ul className="space-y-1 list-disc list-inside marker:text-xl text-gray-700">
                <li>Supabase 기반 구독 관리 시스템</li>
                <li className="ml-6 list-[circle]">
                  PostgreSQL 데이터베이스와 RESTful API를 활용한 구독 데이터
                  CRUD 구현
                </li>
                <li>
                  {" "}
                  <a
                    href="https://kimywan.tistory.com/78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold text-slate-500"
                  >
                    Dashboard와 Chart 컴포넌트 간 동일한 구독 데이터 공유
                  </a>
                </li>
                <li className="ml-6 list-[circle]">
                  Zustand 전역 상태 관리 라이브러리 도입 → Props Drilling 제거
                </li>
                <li className="ml-6 list-[circle]">
                  persist 미들웨어로 데이터 영속성 확보 → 전역 상태로 실시간
                  데이터 동기화
                </li>
                <li>월별 비용 및 구독 개수 시각화 구현</li>
                <li className="ml-6 list-[circle]">
                  Recharts 기반의 데이터 시각화 환경 구축 → LineChart(비용
                  추이), BarChart(구독 개수) 구현
                </li>
                <li className="ml-6 list-[circle]">
                  ResponsiveContainer를 적용해 모든 디바이스에 최적화된 차트
                  제공
                </li>
                <li>결제 주기별 동적 UI 및 조건부 렌더링</li>
                <li className="ml-6 list-[circle]">
                  clsx + Tailwind CSS → 조건부 스타일링으로 월간/연간 구독
                  구분 표시
                </li>
                <li>폼 검증 및 사용자 경험 최적화</li>
                <li className="ml-6 list-[circle]">
                  useRef 기반 자동 포커스 → 검증 실패 시 해당 입력 필드로 이동
                </li>
                <li className="ml-6 list-[circle]">
                  실시간 에러 메시지 표시 → 이메일, 비밀번호, 로그인 실패
                  등 피드백 제공
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
