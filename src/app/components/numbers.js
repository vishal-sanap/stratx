export default function Numbers() {
  return (
    <div className="w-full min-h-[100vh] flex flex-col md:flex-row text-white p-8 sm:p-12 md:p-16 gap-4 sm:gap-14 bg-[#FAF7F3] text-center md:text-left">
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-bold text-[#B27A50] text-left">Numbers</p>
          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight text-[#134155] text-left">
            Our figures grow by the year
          </h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div className="flex justify-between p-6 sm:p-12 border-b-2 border-[#B27A50]">
          <h2 className="text-2xl font-bold text-[#B27A50]">Assets</h2>
          <h1 className="text-3xl font-bold text-[#B27A50]">$30M</h1>
        </div>
        <div className="flex justify-between p-6 sm:p-12 border-b-2 border-[#B27A50]">
          <h2 className="text-2xl font-bold text-[#B27A50]">Clients</h2>
          <h1 className="text-3xl font-bold text-[#B27A50]">500+</h1>
        </div>
        <div className="flex justify-between p-6 sm:p-12 border-b-2 border-[#B27A50]">
          <h2 className="text-2xl font-bold text-[#B27A50]">Ratings</h2>
          <h1 className="text-3xl font-bold text-[#B27A50]">4.9/5</h1>
        </div>
      </div>
    </div>
  );
}
