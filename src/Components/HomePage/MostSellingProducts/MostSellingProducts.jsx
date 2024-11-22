import './MostSellingProducts.css';
const MostSellingProducts = ()=>{
    return <>
 <section className="main-container-most-selling-product-Card flex flex-wrap items-center justify-center p-4 mt-36 md:mt-8">
  <div className="child-container-most-selling-product-Card  flex flex-wrap gap-14  justify-center ">
    
    <div className="card w-52 h-5/4 p-4 flex flex-col items-center justify-center shadow-md rounded-lg">
      <div className="card-data gap-0 mt-2 h-full flex flex-col items-center justify-center">
        <div className="product-image">
        <img src="keyboard.png" alt="Wireless Keyboard" className="category-images w-full h-full object-contain" />
        </div>
        <h1 className="text-start text-xs font-medium mt-4">Aula F2088 Mechanical Wired USB Gaming Keyboard (White)</h1>
        <h1 className="text-start  w-full   text-sm  font-medium mt-4">₹500</h1>
        <button className="explore-btn mt-5 ml-1.2  font-semibold text-1xl antialiased">
          View
        </button>
      </div>
    </div>
    <div className="card w-52 h-5/4 p-4 flex flex-col items-center justify-center shadow-md rounded-lg">
      <div className="card-data gap-0 mt-2 h-full flex flex-col items-center justify-center">
      <div className="product-image">
        <img src="monitor.png" alt="Wireless Keyboard" className="category-images w-full h-full object-contain" />
        </div>        
        <h1 className="text-start text-xs font-medium mt-4">Aula F2088 Mechanical Wired USB Gaming Keyboard (White)</h1>
        <h1 className="text-start  text-sm  w-full font-medium mt-4">₹500</h1>
        <button className="explore-btn mt-5 ml-1.2  font-semibold text-1xl antialiased">
          View
        </button>
      </div>
    </div>
      <div className="card w-52 h-5/4 p-4 flex flex-col items-center justify-center shadow-md rounded-lg">
      <div className="card-data gap-0 mt-2 h-full flex flex-col items-center justify-center">
      <div className="product-image">
        <img src="cpu_case.png" alt="Wireless Keyboard" className="category-images w-full h-full object-contain" />
        </div>       
         <h1 className="text-start text-xs font-medium mt-4">Aula F2088 Mechanical Wired USB Gaming Keyboard (White)</h1>
        <h1 className="text-start    text-sm  w-full font-medium mt-4">₹500</h1>
        <button className="explore-btn mt-5 ml-1.2  font-semibold text-1xl antialiased">
          View
        </button>
      </div>
    </div>
      <div className="card w-52 h-5/4 p-4 flex flex-col items-center justify-center shadow-md rounded-lg">
      <div className="card-data gap-0 mt-2 h-full flex flex-col items-center justify-center">
      <div className="product-image">
        <img src="wirelessKeyboard.png" alt="Wireless Keyboard" className="category-images w-full h-full object-contain" />
        </div>       
         <h1 className="text-start text-xs font-medium mt-4">Aula F2088 Mechanical Wired USB Gaming Keyboard (White)</h1>
        <h1 className="text-start text-sm w-full font-medium mt-4">₹500</h1>
        <button className="explore-btn mt-5 ml-1.2  font-semibold text-1xl antialiased">
          View
        </button>
      </div>
    </div>
   



   
  </div>
</section>
    </>
}
export default MostSellingProducts;