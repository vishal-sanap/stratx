export default function About() {
  return (
    <section id="about" className="w-full flex flex-col md:flex-row text-white p-8 sm:p-12 md:p-16 gap-12 bg-[#FAF7F3] text-center md:text-left">
      
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-6">
          
          <p className="text-2xl font-bold text-[#B27A50] text-left">About Us</p>
          
          <p className="text-xl font-semibold sm:text-2xl md:text-xl text-[#134155] text-left">
            StratX Capital is a boutique investment and wealth management company
            specialising in alternative, market-driven strategies. We focus on
            delivering consistent monthly returns through structured trading
            programs, backed by disciplined risk management and a commitment to
            transparency. Built in the heart of Europe and serving a select group
            of qualified clients, we offer a personalised, high-touch alternative
            to traditional wealth management — blending advanced trading methods
            with long-term financial planning.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-6">
        
        <p className="text-2xl font-bold text-[#B27A50] text-left">What We do</p>
        
        <h2 className="text-3xl sm:text-6xl font-semibold leading-tight text-[#134155] text-left">
          We provide private investors with access to exclusive, actively
          managed investment programs focused on generating consistent monthly
          income.
        </h2>
        
        <p className="text-xl font-semibold sm:text-2xl md:text-xl text-[#134155] text-left">
          We specialize in capital growth and income strategies,
          designed to deliver high risk-adjusted returns with a disciplined,
          professional approach. Our model blends modern financial tools with
          hands-on portfolio management — allowing our clients to build wealth
          while maintaining flexibility and peace of mind.
        </p>
        {/* <button className="w-full md:w-1/2 mt-6 sm:px-8 sm:py-4 px-4 py-2 text-lg font-semibold rounded-lg shadow-xl bg-transparent text-[#997851] border-2 border-[#997851] transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-[#997851] hover:text-white hover:border-[#997851] focus:outline-none focus:ring-4 focus:ring-[#997851]/50">
          Read More
        </button> */}
      </div>
    </section>
  );
}