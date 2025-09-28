export default function About() {
  return (
    <div className="w-full min-h-[100vh] flex text-white p-6 sm:p-26 gap-12 bg-[#FAF7F3]">
      
      <div className="w-1/2">
        <div className="flex flex-col gap-6 w-3/4">
          
          <h2 className="text-2xl font-bold text-[#B27A50]">About Us</h2>
          
          <p className="text-xl sm:text-2xl text-[#134155]">
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

      <div className="w-1/2 flex flex-col gap-6">
        
        <h2 className="text-2xl font-bold text-[#B27A50]">What We do</h2>
        
        <p className="text-5xl sm:text-7xl font-extrabold leading-tight text-[#134155]">
          We provide private investors with access to exclusive, actively
          managed investment programs focused on generating consistent monthly
          income.
        </p>
        
        <p className="text-xl sm:text-2xl text-[#134155]">
          We specialize in capital growth and income strategies,
          designed to deliver high risk-adjusted returns with a disciplined,
          professional approach. Our model blends modern financial tools with
          hands-on portfolio management — allowing our clients to build wealth
          while maintaining flexibility and peace of mind.
        </p>
        <button className="w-1/4 mt-6 px-8 py-4 text-lg font-semibold rounded-lg shadow-xl bg-transparent text-[#997851] border-2 border-[#997851] transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-[#997851] hover:text-white hover:border-[#997851] focus:outline-none focus:ring-4 focus:ring-[#997851]/50">
          Read More
        </button>
      </div>
    </div>
  );
}