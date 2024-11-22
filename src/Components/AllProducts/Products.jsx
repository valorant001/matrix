import NavigationBar from "../NavigationBar/Navigationbar";
import './Products.css';

const Product = () => {
    const productdumydata = [
        {
            product_name: "product1",
            product_price: "500",
        },
        {
            product_name: "product2",
            product_price: "500",
        },
        {
            product_name: "product3",
            product_price: "500",
        },
        {
            product_name: "product4",
            product_price: "500",
        },
        {
            product_name: "product5",
            product_price: "500",
        },
        {
            product_name: "product6",
            product_price: "500",
        },
    ];

    return (
        <>
            <NavigationBar>
                <section className="product-page">
                    <section className="product-page-header"> {/* This Section Contains Text and Filter Button */}
                        <div className="header-bar w-full mt-8 px-14 pt-8 flex flex-wrap flex-col items-center">
                            <div className="categories w-full flex flex-wrap flex-row items-center justify-between mt-4">
                                <div className="category-btns flex flex-nowrap gap-4">
                                    <button type="button" className="category-btn px-6 py-2">Monitor</button>
                                    <button type="button" className="category-btn px-6 py-2">Mouse</button>
                                    <button type="button" className="category-btn px-6 py-2">CPU Case</button>
                                    <button type="button" className="category-btn px-6 py-2">Keyboard</button>
                                </div>
                                <button className="filter-btn justify-center"><i className="ri-equalizer-line"></i></button>
                            </div>
                        </div>
                    </section>
                    <section className="products-list w-full items-center justify-center">
                        <div className="product-grid mt-8 p-20 grid md:grid-cols-3 gap-9 bg-red-500">
                            {
                                productdumydata.map((product_data) => (
                                    <div className="card w-52 h-5/4 p-4 flex flex-col items-center justify-center shadow-md rounded-lg" key={product_data.product_name}>
                                        <div className="card-data gap-0 mt-2 h-full flex flex-col items-center justify-center">
                                            <div className="product-image">
                                                <img src="keyboard.png" alt="Wireless Keyboard" className="category-images w-full h-full object-contain" />
                                            </div>
                                            <h1 className="text-start text-xs font-medium mt-4">{product_data.product_name}</h1>
                                            <h1 className="text-start w-full text-sm font-medium mt-4">{product_data.product_price}</h1>
                                            <button className="explore-btn mt-5 ml-1.2 font-semibold text-1xl antialiased">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </section>
            </NavigationBar>
        </>
    );
};

export default Product;
