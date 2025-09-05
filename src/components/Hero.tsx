export default function Hero() {
  return (
    <section className="proflie">
      <div className="text-left mb-6">
        <div className="text-4xl font-semibold text-transparent bg-gradient-to-b from-[#93c5fd] to-[#2563eb] bg-clip-text mb-5 gap-2 flex flex-col">
          <h1>Frontend Developer</h1>
          <p>김영완</p>
        </div>
        <div className="info">
          <p className="birthday">
            <a className="text-blue-500 font-semibold hover:underline text-lg">
              1999.07.20
            </a>
          </p>
          <p>
            <a
              href="mailto:kimywan10@gmail.com"
              className="text-blue-500 font-semibold hover:underline text-lg"
            >
              kimywan10@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://github.com/kimywann"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-500 font-semibold text-lg"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
