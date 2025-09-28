export default function Numbers() {
  return (
    <div className="w-full min-h-[100vh] flex text-white p-6 sm:p-26 gap-14 bg-[#FAF7F3]">
      <div className="w-1/2">
        <div className="flex flex-col gap-6 w-3/4">
          <h2 className="text-2xl font-bold text-[#B27A50]">Numbers</h2>
          <p className="text-5xl sm:text-6xl font-extrabold leading-tight text-[#134155]">
            Our figures grow by the year
          </p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-6">
        <div className="flex justify-between p-12 border-b-2 border-[#B27A50]">
          <h2 className="text-2xl font-bold text-[#B27A50]">Assets</h2>
          <h1 className="text-3xl font-bold text-[#B27A50]">$30M</h1>
        </div>
        <div className="flex justify-between p-12 border-b-2 border-[#B27A50]">
          <h2 className="text-2xl font-bold text-[#B27A50]">Clients</h2>
          <h1 className="text-3xl font-bold text-[#B27A50]">500+</h1>
        </div>
        <div className="flex justify-between p-12 border-b-2 border-[#B27A50]">
          <h2 className="text-2xl font-bold text-[#B27A50]">Ratings</h2>
          <h1 className="text-3xl font-bold text-[#B27A50]">4.9/5</h1>
        </div>
      </div>
    </div>
  );
}
