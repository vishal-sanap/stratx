export default function Plan() {
  return (
    <div id="plans" className="w-full text-white p-8 sm:p-12 md:p-16 gap-4 sm:gap-14 bg-[#FAF7F3] flex flex-col text-center md:text-left">
      <div className="w-full">
        <div className="flex flex-col gap-6"></div>
        <p className="text-2xl font-bold text-[#B27A50] text-left">Plans</p>
        <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight text-[#134155] text-left">
          Choose a plan that fits your investment goals.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-6 mt-12">
        <div id="czip">
          <p className="text-2xl font-bold text-[#B27A50] text-left">
            CZIP - Czech Passive Income Plan
          </p>
          <p className="text-[#134155] text-lg sm:text-xl font-semibold mb-4 text-left">
            Secure, high-yield investment opportunity with monthly fixed
            returns.
          </p>
          <ul className="list-disc list-inside text-[#134155] mb-4 text-left">
            <li>Investment Term: minimum 12-months, renewable</li>
            <li>
              Target Returns: 10%–15% annually (8,333 - 12,500 czk per month)
            </li>
            <li>Exit Flexibility: 60-days notice</li>
            <li>No ongoing management fees</li>
            <li>Capital requirements: 1M czk</li>
            <li>One - Time Setup Fee: 5000 czk</li>
            <li>
              Accepting Just 10 Strategic Investment Partners based in Czech
              Republic
            </li>
          </ul>
          <p className="text-[#134155] text-left">
            Historically, our strategies have delivered returns of approximately
            20% per year. We are proud of this track record, though it is
            important to note that past results do not guarantee future
            performance.
          </p>
          <button className="w-full md:w-1/2 mt-6 sm:px-8 sm:py-4 px-4 py-2 text-lg font-semibold rounded-lg shadow-xl bg-transparent text-[#997851] border-2 border-[#997851] transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-[#997851] hover:text-white hover:border-[#997851] focus:outline-none focus:ring-4 focus:ring-[#997851]/50">
          Download Brochure
        </button>
        </div>
        <div id="ltwp">
          <p className="text-2xl font-bold text-[#B27A50] text-left">
            LTWP - Long Term Wealth Planning
          </p>
          <p className="text-[#134155] text-lg sm:text-xl font-semibold mb-4 text-left">
            We don’t just focus on monthly income — we help investors grow their
            wealth over time with strategic planning.
          </p>
          <ul className="list-disc list-inside text-[#134155] mb-4 text-left">
            <li>Reinvest monthly returns into long-term stock portfolios</li>
            <li>Diversify beyond short-term income to build lasting value</li>
            <li>
              Focus on high-quality growth assets including major tech, S&P500,
              and dividend stocks
            </li>
            <li>
              Guidance on portfolio allocation tailored to your financial goals
            </li>
            <li>
              Tax-conscious investment planning for CZ and international
              investors
            </li>
            <li>Assistance with global brokerage setup and stock selection</li>
            <li>Capital requirements: minimum 250 czk</li>
            <li>One - Time Setup Fee: 2000 czk</li>
            <li>Only available to our Investment Partners</li>
          </ul>
          <p className="text-[#134155] text-left">
            Historically, our strategies have delivered returns of approximately
            40% per year. We are proud of this track record, though it is
            important to note that past results do not guarantee future
            performance.
          </p>
          <button className="w-full md:w-1/2 mt-6 sm:px-8 sm:py-4 px-4 py-2 text-lg font-semibold rounded-lg shadow-xl bg-transparent text-[#997851] border-2 border-[#997851] transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-[#997851] hover:text-white hover:border-[#997851] focus:outline-none focus:ring-4 focus:ring-[#997851]/50">
          Download Brochure
        </button>
        </div>
      </div>
    </div>
  );
}
