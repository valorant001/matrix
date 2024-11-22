import './Category.css'
const Category = () => {
    return <>
 <section className="main-container-Card flex flex-wrap items-center justify-center p-4">
  <div className="child-container flex flex-wrap gap-14  justify-center ">
    
    <div className="card w-52 h-64 p-4 flex flex-col items-center justify-center shadow-md rounded-lg">
      <div className="card-data gap-10 mt-11 h-full flex flex-col items-center justify-center">
        <img src="wirelessKeyboard.png" alt="Wireless Keyboard" className="category-images" />
        <h1 className="text-center text-lg font-medium">Keyboards</h1>
      </div>
    </div>
    <div className="card w-52 h-64 p-4 flex flex-col items-center justify-center shadow-md rounded-lg">
      <div className="card-data gap-4 h-full flex flex-col items-center justify-center">
        <img src="monitor.png" alt="Wireless Keyboard" className="category-images mr-3" />
        <h1 className="text-center text-lg font-medium">Monitors</h1>
      </div>
    </div>
    <div className="card w-52 h-64 p-4 flex flex-col items-center justify-center shadow-md rounded-lg">
      <div className="card-data gap-4 h-full flex flex-col items-center justify-center">
        <img src="mouse.png" alt="Wireless Keyboard" className="category-images" />
        <h1 className="text-center text-lg font-medium">Mouse</h1>
      </div>
    </div>
    <div className="card w-52 h-64 p-4 flex flex-col items-center justify-center shadow-md rounded-lg">
      <div className="card-data gap-4 h-full flex flex-col items-center justify-center">
        <img src="case.png" alt="Wireless Keyboard" className="category-images" />
        <h1 className="text-center text-lg font-medium">CPU Case</h1>
      </div>
    </div>
  </div>
</section>

    </>
}
export default Category;