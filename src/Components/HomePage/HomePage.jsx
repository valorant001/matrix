import NavigationBar from "../NavigationBar/Navigationbar";
import Category from "./Category/Category";
import CPUCase from "./CPU Case/CPUCase";
import './HomePage.css';
import MostSelling from "./MostSelling/MostSelling"; 
import MostSellingProducts from "./MostSellingProducts/MostSellingProducts";
const HomePage = ()=>{
    return <>
  <NavigationBar>
  <section className="main-container flex flex-wrap items-center h-full flex-col mt-36 md:flex-row px-11 pb-4 md:mt-0 ">
  <section className="homePageSection1 flex flex-wrap items-center h-screen flex-col md:flex-row">
  <div className="content w-full md:w-1/2 flex items-center justify-between h-1/2 md:h-full">
    <div className="txt-btn">
      <h1 className="text-7xl md:text-8xl flex flex-wrap  font-semibold">
        Level Up Your Game
      </h1>
      <button className="explore-btn mt-9 ml-1.5 font-semibold text-1xl antialiased">
        Explore
      </button>
    </div>
  </div>

  <div className="image w-full md:w-1/2 flex items-center h-1/2 md:h-full">
      <div className="image-wrapper w-full h-full flex justify-center items-center">
        <img
          src="./section1Keyboard.png"
          alt="Keyboard Image"
          className="object-contain mt-0 md:mt-0" /* Margin top only for mobile view */
        />
      </div>
    </div>
</section>

    <section className="category-section w-full">
        <Category></Category>
    </section>
    <section className="most-selling-section w-full">
        <MostSelling></MostSelling>
    </section>
    <section className="most-selling-products-section w-full">
        <MostSellingProducts></MostSellingProducts>
    </section>
    <section className="cpu-case-section w-full">
        <CPUCase></CPUCase>
    </section>
    <section>

    </section>
  </section>
  <div className="image w-full flex items-center ">
      
      <img
        src="./ROG_Strix_Helios.jpg"
        alt="Keyboard Image"
        className="object-contain mt-8 md:mt-24" /* Margin top only for mobile view */
      />

  </div>
</NavigationBar>

    </>
}
export default HomePage;