export default function Service() {
  return (
    <section id="services" className="w-full min-h-[100vh] text-white p-8 sm:p-12 md:p-16 gap-4 sm:gap-14 bg-[#FAF7F3] flex flex-col text-center md:text-left">
      <div className="w-full">
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-bold text-[#B27A50] text-left">Services</p>

          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight text-[#134155] text-left">
            We offer a wide variety of financial services.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="flex flex-col gap-3 border-l-2 border-[#B27A50] pl-4">
            <p className="text-2xl font-bold text-[#B27A50] text-left">01</p>
            <h2 className="text-xl sm:text-3xl font-extrabold leading-tight text-[#134155] text-left">Solutions</h2>
            <p className="text-[#134155] wrap text-left">We offer tailored financial solutions designed to grow and protect your wealth. Whether you&apos;re looking for consistent passive income or long-term asset growth, our services are built to align with your financial goals while keeping things simple, secure, and strategic.</p>
        </div>
        <div className="flex flex-col gap-3 border-l-2 border-[#B27A50] pl-4">
            <p className="text-2xl font-bold text-[#B27A50] text-left">02</p>
            <h2 className="text-xl sm:text-3xl font-extrabold leading-tight text-[#134155] text-left">Financial Strategies</h2>
            <p className="text-[#134155] wrap text-left">We develop personalized strategies to help you make smarter financial decisions — from optimizing your capital allocation to structuring your wealth for tax efficiency and future planning. Every plan is rooted in data, experience, and your unique financial ambitions. The Income Plans are actively managed on a daily basis to maximize returns.</p>
        </div>
        <div className="flex flex-col gap-3 border-l-2 border-[#B27A50] pl-4">
            <p className="text-2xl font-bold text-[#B27A50] text-left">03</p>
            <h2 className="text-xl sm:text-3xl font-extrabold leading-tight text-[#134155] text-left">Investment Planning</h2>
            <p className="text-[#134155] wrap text-left">We help you plan and manage your investments with clarity and confidence. From monthly income plans to long-term portfolio growth, our structured approach ensures your capital is working towards your goals with minimized risk and maximized potential.</p>
        </div>
      </div>
    </section>
  );
}
