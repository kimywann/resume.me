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
                <h3 className="text-2xl font-semibold">GAME DB</h3>
                <p className="text-gray-500 text-sm">2025.09.02 - 진행 중</p>
                <p className="text-gray-500 text-sm">개인 프로젝트</p>
                <p className="text-md text-gray-600 mt-2 mb-1">
                  RAWG API를 활용한 게임 정보 웹 서비스
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                Next.js
              </span>
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                React.js
              </span>
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                TypeScript
              </span>
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                Tailwind CSS
              </span>
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                Tanstack Query
              </span>
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                RAWG API
              </span>
              <span className="text-gray-500 text-sm py-1 px-2 bg-gray-100 rounded-lg mr-2">
                Vercel
              </span>
            </div>
            <div className="flex gap-4 mb-12 text-blue-500 font-semibold">
              <span>
                <a
                  href="https://github.com/kimywann/rawg-game-database"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Github 저장소
                </a>
              </span>
              <span>
                <a
                  href="https://rawg-game-database.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  배포 페이지
                </a>
              </span>
            </div>
            <section>
              <p className="text-xl mb-4 font-semibold">개발 및 기여 내용</p>
              <ul className="space-y-2 list-disc list-outside text-lg text-black pl-6">
                <li className="text-indent-0">
                  <a
                    href="https://kimywan.tistory.com/80"
                    className=" text-blue-500 font-semibold"
                  >
                    클라이언트 컴포넌트에서 API Key가 노출되는 문제를 Route
                    Handlers를 통해 해결
                  </a>
                  하여 클라이언트가 서버를 통해 외부 API에 접근하는 구조를
                  구축하여 API Key를 안전하게 관리하고, 클라이언트-서버 간의
                  역할 분리
                </li>
                <li className="text-indent-0">
                  useInfiniteQuery와 Intersection Observer API 활용하여 무한
                  스크롤 구현, 게임 목록 조회 시 사용자 경험 개선
                </li>
                <li className="text-indent-0">
                  리렌더링 시 발생하는 불필요한 API 재호출 문제 →{" "}
                  <a href="https://kimywan.tistory.com/81">
                    TanStack Query의 데이터 갱신 주기 설정 staleTime, gcTime을
                    통해
                    <span className="ml-1 text-blue-500 font-semibold">
                      데이터를 캐싱하여 재요청하지 않게 불필요한 중복 요청
                      최소화
                    </span>
                  </a>
                </li>
                <li className="text-indent-0">
                  반응형 디자인 도입으로 PC 및 모바일 환경에서 웹 서비스를
                  가능하도록 개선
                </li>
              </ul>
            </section>
          </div>
        </div>
        <hr className="border-zinc-100 w-full mb-8 mt-10" />
        <div className="space-y-8 mt-10">
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
            <div className="flex gap-4 mb-12 text-blue-500 font-semibold">
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
              <p className="text-xl mb-4 font-semibold">개발 및 기여 내용</p>
              <ul className="space-y-2 list-disc list-outside text-lg text-black pl-6">
                <li className="text-indent-0">
                  Supabase에 기반한 DB와 RESTful API를 활용한 구독 데이터 CRUD
                  구현
                </li>
                <li className="text-indent-0">
                  컴포넌트 간 동일한 구독 데이터 공유 Zustand 전역 상태 관리
                  라이브러리 도입으로 Props Drilling 제거, persist 미들웨어로
                  데이터 영속성 확보 → 전역 상태로 실시간 데이터 동기화
                </li>
                <li className="text-indent-0">
                  월별 비용과 구독 개수를 한눈에 파악하기 어렵다는 문제를
                  해결하고자, 최근 1년간의 구독 데이터를 기반으로{" "}
                  <span className="font-semibold text-blue-500">
                    Recharts 시각화 대시보드 구축
                  </span>
                </li>
                <li className="text-indent-0">
                  1년간의 비용 변화 추세를 LineChart로, 월별 구독 개수를
                  BarChart로 구현하여 데이터의 목적에 맞는 시각화 대시보드 제공
                </li>
                <li className="text-indent-0">
                  Tailwind CSS와 clsx를 활용, 월간/연간 구독 옵션을 조건부
                  스타일링하여 사용자가 결제 주기를 명확하게 구분하도록 개선
                </li>
                <li className="text-indent-0">
                  useRef와 상태 관리를 통해 실시간 에러 메시지 표시, 입력 오류
                  발생 시 자동으로 해당 필드에 포커스를 이동시켜 사용자에게
                  피드백 제공
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
