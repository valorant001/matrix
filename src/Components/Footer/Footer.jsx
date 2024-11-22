import './Footer.css';
import FooterStrip from './FooterStrip';
const Footer = () =>{
    return <>
  <section className='footer md:p-0 p-7'>
  <div className="footer-main-container flex flex-wrap mt-44 mb-2 md:flex-row">
        <div className="about-help-section flex flex-wrap h-full md:flex-1 w-full justify-between px-20 py-24">
         <div className="about gap-10 ">
            <h2 className="text-2xl font-semibold">About us</h2>
            <ul className='h-full'>
                <li className='mt-2.5'>Contact us</li>
                <li className='mt-2.5'>About us</li>
                <li className='mt-2.5'>Carrers</li>
            </ul>
         </div>
         <div className="help md:mt-0 mt-20">
         <h2 className="text-2xl font-semibold">Help</h2>
            <ul>
                <li className='mt-2.5'>Payments</li>
                <li className='mt-2.5'>Shipping</li>
                <li className='mt-2.5'>Cancellation & Returns</li>
                <li className='mt-2.5'>FAQ</li>
            </ul>
         </div>
        </div>
        <div className="divider">
        </div>

        <div className="known-section items-center justify-center flex flex-1">
          <h1 className='text-center text-pretty text-2xl'> Kya Kr Skte hai</h1>
        </div>
    </div>
    <FooterStrip></FooterStrip>
  </section>
   
    </>
}
export default Footer;