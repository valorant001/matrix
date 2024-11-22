import './CPUCase.css';
const CPUCase =() =>{
    return <>
    <section className="main-mostSelling-container flex flex-wrap items-center flex-col md:flex-row pb-4">
  <section className="mostSellingSection flex flex-wrap items-center h-screen flex-col md:flex-row mt-10">
    {/* Content Section */}
    <div className="content w-full md:w-1/2 flex flex-wrap items-center justify-between h-1/2 md:h-full">
      <div className="txt-btn">
        <h1 className="text-6xl flex flex-wrap  font-semibold">
        CPU Cases
        </h1>
        <h1 className="md:text-2xl flex flex-wrap font-medium mt-10">
        ROG Hyperion GR701 BTF Edition E-ATX computer case, motherboard hidden connectors design support, 420 mm dual radiator support, four 140 mm fans, metal GPU holder, component storage, ARGB fan hub, 60W fast charging.
        </h1>
        <button className="explore-btn mt-5 ml-1.2  font-semibold text-1xl antialiased">
          View
        </button>
      </div>
    </div>

    {/* Image Section */}
    <div className="image w-full md:w-1/2 flex items-center h-1/2 md:h-full">
      <div className="image-wrapper w-full h-full flex justify-center items-center">
        <img
          src="./cpu_case.png"
          alt="Keyboard Image"
          className="object-contain mt-8 md:mt-24" /* Margin top only for mobile view */
        />
      </div>
    </div>
  </section>
</section>
    </>
}
export default CPUCase;