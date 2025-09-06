export default function Hero() {
  return (
    <section className="proflie">
      <div className="mb-6">
        <div className="mb-5 flex"></div>
        <div className="info">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">Contact</h1>
          <hr className="border-blue-500 w-12 mb-8" />
          <ul className="space-y-2 list-disc list-outside text-md text-black pl-4">
            <li className="text-indent-0">
              <a
                href="mailto:kimywan10@gmail.com"
                className="hover:underline text-blue-600 font-semibold"
              >
                kimywan10@gmail.com
              </a>
            </li>
            <li className="text-indent-0">
              <a
                href="https://kimywan.tistory.com/"
                className="hover:underline text-blue-600 font-semibold"
              >
                블로그
              </a>
            </li>
            <li className="text-indent-0">
              <a
                href="https://github.com/kimywann"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600 font-semibold"
              >
                깃허브
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
