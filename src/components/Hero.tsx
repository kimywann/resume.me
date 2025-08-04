export default function Hero() {
  return (
    <section className="proflie">
      <div className="text-left mb-6">
        <h1 className="text-4xl font-semibold text-transparent bg-gradient-to-b from-[#93c5fd] to-[#2563eb] bg-clip-text mb-5">
          Frontend Developer
          <p className="font-semibold text-4xl">김영완</p>
        </h1>
        <div className="info">
          <p className="birthday">
            <a className="text-blue-500 font-medium hover:underline text-md">
              1999.07.20
            </a>
          </p>
          <p>
            <a
              href="mailto:kimywan10@gmail.com"
              className="text-blue-500 font-medium hover:underline text-md"
            >
              kimywan10@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://github.com/kimywann"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-500 font-medium text-md"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="tel:01092913036"
              className="text-blue-500 font-medium hover:underline text-md"
            >
              010-9291-3036
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
