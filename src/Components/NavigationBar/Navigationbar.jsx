import Footer from '../Footer/Footer';
import './Navigation.css';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { useState } from 'react'

const NavigationBar = ({ children }) => {
  const [open, setOpen] = useState(false);

  return <>
    <section className="main-container w-full h-full justify-center">
      <nav className="flex justify-center w-full">
        <section className='navigation-bar flex justify-between'>
          <div className="drawer-logo flex items-center justify-center">
            <div className="drawer md:hidden">
              <i className="ri-menu-line" onClick={() => { setOpen(true) }}></i>
              <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                  transition
                  className="fixed inset-0 bg-gray-500/75 transition-opacity duration-8500 ease-in-out data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                      <DialogPanel
                        transition
                        className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                      >


                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                          <div className="px-4 sm:px-6">
                            <div className="internalContent flex justify-between items-center">
                              <DialogTitle className="text-base font-semibold text-gray-900">
                                <div className="logo-container">
                                  <img src="./matrix_logo.png" alt="Logo Part" className='w-full' />
                                </div>
                              </DialogTitle>
                              <i type="button"
                                onClick={() => setOpen(false)}
                                className="ri-close-large-fill"></i>
                            </div>
                            <div className="navigation-links mt-7 items-center ">
                              <ul className=" items-start justify-center gap-8 ml-6 flex flex-col">
                                <a href="#">Home</a>
                                <a href="#">Shop</a>
                                <a href="#">New Arrivals</a>
                                <div className="cart flex items-center mr-2">
                                  <i className="ri-shopping-bag-4-fill"></i>
                                    {/* <button className="login-button  text-white rounded">Login</button> */}
                                  </div>
                        
                              </ul>
                            </div>
                          </div>
                          <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
                        </div>
                      </DialogPanel>
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>
            <div className="logo-container">
              <img src="./matrix_logo.png" alt="Logo Part" className='w-full' />
            </div>
          </div>

          <div className="navigation-links md:flex hidden items-center ">
            <ul className="flex items-center justify-center gap-20">
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">New Arrivals</a>
            </ul>
          </div>
          <div className="cart flex items-center mr-2">
          <i className="ri-shopping-bag-4-fill"></i>
            {/* <button className="login-button  text-white rounded">Login</button> */}
          </div>

        </section>
      </nav>
      {children} 
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  </>
}
export default NavigationBar;