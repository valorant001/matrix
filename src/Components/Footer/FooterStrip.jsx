import './Footer.css'
const FooterStrip = () =>{
    return <>
    <section className="footerstrip flex flex-wrap mb-1 md:gap-20">
        <div className="become-seller p-4 flex flex-wrap items-center gap-1 md:flex-row">
        <i className="ri-store-2-line "></i>
        <a href="" className="text-sm">Become a Seller</a>
        </div>

        <div className="become-seller p-4 flex flex-wrap items-center gap-1 md:flex-row">
        <i className="ri-question-line"></i>
        <a href="" className="text-sm">Help Center</a>
        </div>
    </section>
    </>
}
export default FooterStrip;