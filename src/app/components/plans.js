export default function Plan() {
  return (
    <div className="w-full min-h-[100vh] text-white p-6 sm:p-26 gap-14 bg-[#FAF7F3]">
      <div className="w-1/2">
        <div className="flex flex-col gap-6 w-3/4"></div>
        <h2 className="text-2xl font-bold text-[#B27A50]">Plans</h2>
        <p className="text-5xl sm:text-6xl font-extrabold leading-tight text-[#134155]">
          Choose a plan that fits your investment goals.
        </p>
      </div>
      <div className="flex gap-6 mt-12">
        <div>
          <h2 className="text-2xl font-bold text-[#B27A50]">
            CZIP - Czech Passive Income Plan
          </h2>
          <h3 className="text-[#134155] text-lg sm:text-xl font-semibold mb-4">
            Secure, high-yield investment opportunity with monthly fixed
            returns.
          </h3>
          <ul className="list-disc list-inside text-[#134155] mb-4">
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
          <p className="text-[#134155]">
            Historically, our strategies have delivered returns of approximately
            20% per year. We are proud of this track record, though it is
            important to note that past results do not guarantee future
            performance.
          </p>
          <button className="w-1/3 mt-6 px-8 py-4 text-lg font-semibold rounded-lg shadow-xl bg-transparent text-[#997851] border-2 border-[#997851] transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-[#997851] hover:text-white hover:border-[#997851] focus:outline-none focus:ring-4 focus:ring-[#997851]/50">
          Download Brochure
        </button>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#B27A50]">
            LTWP - Long Term Wealth Planning
          </h2>
          <h3 className="text-[#134155] text-lg sm:text-xl font-semibold mb-4">
            We don’t just focus on monthly income — we help investors grow their
            wealth over time with strategic planning.
          </h3>
          <ul className="list-disc list-inside text-[#134155] mb-4">
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
          <p className="text-[#134155]">
            Historically, our strategies have delivered returns of approximately
            40% per year. We are proud of this track record, though it is
            important to note that past results do not guarantee future
            performance.
          </p>
          <button className="w-1/3 mt-6 px-8 py-4 text-lg font-semibold rounded-lg shadow-xl bg-transparent text-[#997851] border-2 border-[#997851] transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-[#997851] hover:text-white hover:border-[#997851] focus:outline-none focus:ring-4 focus:ring-[#997851]/50">
          Download Brochure
        </button>
        </div>
      </div>
    </div>
  );
}
