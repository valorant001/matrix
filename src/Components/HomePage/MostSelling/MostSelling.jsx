import './MostSelling.css';
const MostSelling = () =>{
    return <>
 <section className="main-mostSelling-container flex flex-wrap items-center flex-col md:flex-row pb-4">
  <section className="mostSellingSection flex flex-wrap items-center h-screen flex-col md:flex-row mt-10">
    {/* Content Section */}
    <div className="content w-full md:w-1/2 flex flex-wrap items-center justify-between h-1/2 md:h-full">
      <div className="txt-btn">
        <h1 className="text-6xl flex flex-wrap  font-semibold">
          Most Selling
        </h1>
        <h1 className="md:text-2xl flex flex-wrap font-medium mt-10">
          Portronics Hydra 10/5.0 + 2.4 GHz, RGB, Type C Charging, Mechanical Hydra 10/5.0 + 2.4 GHz, RGB, Type C Charging, Mechanical Bluetooth, Bluetooth, Wireless Gaming Keyboard (Brown Switch, White)
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
          src="./mostSelling.png"
          alt="Keyboard Image"
          className="object-contain mt-30 md:mt-0" /* Margin top only for mobile view */
        />
      </div>
    </div>
  </section>
</section>

    </>
}
export default MostSelling;