import React, { useState } from "react";

export function MyFooter(){
    const [shopclick, Setshopclick] = useState(false);
    const [conClick, setConClick] = useState(false);
    return(
        <>
        <div className="grid mt-28 border-t bg-[#0D1110] border-t-gray-600/10 w-screen">
            <div className="grid p-6 lg:grid-cols-3 w-full">
                <div className=" lg:border-r-[0.5px] lg:border-r-gray-600/10 grid p-6 lg:col-start-1 lg:col-end-2 justify-start">
                    <span className=" items-center flex gap-4 text-white text-xl md:text-2xl">
                        <img src="/logo.png" className=" h-10" alt="" />
                        <h6>VAPO<span className=" text-green-600">RO</span></h6>
                    </span>
                    <br />
                    <p className=" md:w-fit wrap-break-word text-base md:text-lg text-gray-300">Premium vape products, accessories and e-liquid. Quality you can trust, an experience you'll love.</p>
                    <br />
                    <div className=" flex gap-4 justify-center flex-wrap">
                        <div className=" h-fit w-fit hover:drop-shadow-md hover:drop-shadow-green-700 cursor-pointer transition-transform ease-in-out duration-500 rounded-full p-3 border border-green-700">
                            <img src="/insta.svg" className=" h-5" alt="" />
                        </div>
                        <div className=" h-fit w-fit hover:drop-shadow-md hover:drop-shadow-green-700 cursor-pointer transition-transform ease-in-out duration-500 rounded-full p-3 border border-green-700">
                            <img src="/facebook.svg" className=" h-5" alt="" />
                        </div>
                        <div className=" h-fit w-fit hover:drop-shadow-md hover:drop-shadow-green-700 cursor-pointer transition-transform ease-in-out duration-500 rounded-full p-3 border border-green-700">
                            <img src="/tiktok.svg" className=" h-5" alt="" />
                        </div>
                        <div className=" h-fit w-fit hover:drop-shadow-md hover:drop-shadow-green-700 cursor-pointer transition-transform ease-in-out duration-500 rounded-full p-3 border border-green-700">
                            <img src="/youtube.svg" className=" h-5" alt="" />
                        </div>
                    </div>
                </div>
                <div className=" grid lg:col-start-2 p-6 pl-10 lg:col-end-3 border-t border-t-gray-600/20 border-b border-b-gray-600/20 lg:border-0 lg:border-r lg:border-gray-600/10 ">
                    <span onClick={() => Setshopclick(!shopclick)} className=" flex w-full justify-between lg:w-fit"><h6 className="text-white w-fit text-xl md:text-2xl">SHOP</h6><span className={` w-fit block text-xl lg:hidden transition-transform duration-500 ease-linear ${shopclick? "rotate-180" : "rotate-0"} text-green-600`}>&darr;</span></span>
                    <div className=" h-0.5 w-8 hidden lg:block bg-green-600"></div>
                    <br />
                    <div className={`${shopclick? "grid" : "hidden"} lg:grid`}>
                        <div className=" flex gap-4 text-base md:text-lg text-gray-200 hover:text-green-600 cursor-pointer">
                            <span className="text-green-600 font-semibold">&gt;</span><span>Devices</span>
                        </div>
                        <div className=" flex gap-4 text-base md:text-lg text-gray-200 hover:text-green-600 cursor-pointer">
                            <span className="text-green-600 font-semibold">&gt;</span><span>E-liquids</span>
                        </div>
                        <div className=" flex gap-4 text-base md:text-lg text-gray-200 hover:text-green-600 cursor-pointer">
                            <span className="text-green-600 font-semibold">&gt;</span><span>Pods & Cartridges</span>
                        </div>
                        <div className=" flex gap-4 text-base md:text-lg text-gray-200 hover:text-green-600 cursor-pointer">
                            <span className="text-green-600 font-semibold">&gt;</span><span>Coils & Accessories</span>
                        </div>
                        <div className=" flex gap-4 text-base md:text-lg text-gray-200 hover:text-green-600 cursor-pointer">
                            <span className="text-green-600 font-semibold">&gt;</span><span>New Arrivals</span>
                        </div>
                        <div className=" flex gap-4 text-base md:text-lg text-gray-200 hover:text-green-600 cursor-pointer">
                            <span className="text-green-600 font-semibold">&gt;</span><span>Deals & Offers</span>
                        </div>
                    </div>
                </div>
                <div className=" grid lg:col-start-3 p-6 pl-10 lg:col-end-4 border-t border-t-gray-600/20 border-b border-b-gray-600/20 lg:border-0 lg:border-r lg:border-gray-600/10 ">
                    <span onClick={() => setConClick(!conClick)} className=" flex w-full justify-between lg:w-fit"><h6 className="text-white w-fit text-xl md:text-2xl">CONTACT INFO</h6><span className={` w-fit block text-xl lg:hidden transition-transform duration-500 ease-linear ${conClick? "rotate-180" : "rotate-0"} text-green-600`}>&darr;</span></span>
                    <div className=" h-0.5 w-8 hidden lg:block bg-green-600"></div>
                    <br />
                    <div className={`${conClick? "grid" : "hidden"} p-4 lg:grid`}>
                        {/* first card */}
                        <div className=" flex items-center h-fit w-fit gap-4 pb-2 border-t border-b border-t-gray-600/20 border-b-gray-600/30 md:border-0 text-base md:text-lg text-gray-200 hover:text-green-600 cursor-pointer">
                            <div className=" rounded-2xl h-fit flex w-fit p-2 border border-green-600">
                                <img src="/whats.svg" className=" h-6" alt="" />
                            </div>
                            <div className="grid">
                                <span className=" text-lg md:text-xl font-medium tracking-tight text-gray-300">WhatsApp</span>
                                <span className=" text-base md:text-lg font-light transition-transform text-gray-200"> +1 (555) 123-4567</span>
                            </div>
                        </div>
                        {/* second card */}
                        <div className=" flex items-center h-fit w-fit gap-4 pb-2 border-t border-b border-t-gray-600/20 border-b-gray-600/30 md:border-0 text-base md:text-lg text-gray-200 hover:text-green-600 cursor-pointer">
                            <div className=" rounded-2xl h-fit flex w-fit p-2 border border-green-600">
                                <img src="/phon.svg" className=" h-6" alt="" />
                            </div>
                            <div className="grid">
                                <span className=" text-lg md:text-xl font-medium tracking-tight text-gray-300">Phone</span>
                                <span className=" text-base md:text-lg font-light transition-transform text-gray-200"> +1 (555) 123-4567</span>
                            </div>
                        </div>
                        {/* third card */}
                        <div className=" flex items-center h-fit w-fit gap-4 pb-2 border-t border-b border-t-gray-600/20 border-b-gray-600/30 md:border-0 text-base md:text-lg text-gray-200 hover:text-green-600 cursor-pointer">
                            <div className=" rounded-2xl h-fit flex w-fit p-2 border border-green-600">
                                <img src="/loca.svg" className=" h-6" alt="" />
                            </div>
                            <div className="grid">
                                <span className=" text-lg md:text-xl font-medium tracking-tight text-gray-300">Store Location</span>
                                <span className=" text-base md:text-lg font-light transition-transform text-gray-200">123 Vape Street, suite 101 <br />Los Angeles, CA 90001 </span>
                            </div>
                        </div>
                        {/* fourth card */}
                        <div className=" flex items-center h-fit w-fit gap-4 pb-2 border-t border-b border-t-gray-600/20 border-b-gray-600/30 md:border-0 text-base md:text-lg text-gray-200 hover:text-green-600 cursor-pointer">
                            <div className=" rounded-2xl h-fit flex w-fit p-2 border border-green-600">
                                <img src="/clock.svg" className=" h-6" alt="" />
                            </div>
                            <div className="grid">
                                <span className=" text-lg md:text-xl font-medium tracking-tight text-gray-300">Opening Hours</span>
                                <span className=" text-base md:text-lg font-light transition-transform text-gray-200"> Mon-Sat: 10:00 AM - 09:00 PM <br /> Sunday: 11:00 AM - 07:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full grid lg:border-t p-6 lg:border-t-green-600 h-fit ">
                <div className=" w-full md:pl-4 md:pr-6 grid md:flex p-2 justify-start md:justify-between">

                    <div className=" flex items-center gap-4">
                        <div className=" h-fit w-fit p-3 rounded-full border border-gray-600/20">
                            <img src="/aut.svg" className=" h-6 md:h-10" alt="" />
                        </div>
                        <div className="grid">
                            <span className=" text-lg md:text-xl text-white">100% Secure Shopping</span><span className="text-gray-300 text-sm md:text-base">Your satisfaction is our priority</span>
                        </div>
                    </div>
                    <br />
                    <div className=" flex items-center lg:mr-10 gap-4">
                        <div className=" h-fit w-fit p-2 rounded-full border border-gray-600/20">
                            <img src="/sup.png" className=" h-7 md:h-10" alt="" />
                        </div>
                        <div className="grid">
                            <span className=" text-lg md:text-xl text-white">NEED HELP</span><span className="text-gray-300 text-sm md:text-base">We're here for you</span><span className="text-green-600 group cursor-pointer text-sm md:text-base flex transition-transform ease-linear duration-500 gap-4"><span className=" group-hover:scale-110">Chat On WhatsApp</span><span className=" group-hover:scale-110">&gt;</span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" text-gray-300/80 flex-wrap justify-center flex gap-3 lg:gap-4">
                <div>&copy; {new Date().getFullYear()} <span className=" text-green-600/80">VAPORO.</span>All rights reserved</div>
                <div className=" h-5 w-0.5 bg-gray-300/20"></div>
                <div className=" cursor-pointer">Privacy Policy</div>
                <div className=" h-5 w-0.5 bg-gray-300/20"></div>
                <div className=" cursor-pointer">Terms & Conditions</div>
                <div className=" h-5 w-0.5 bg-gray-300/20"></div>
                <div className=" cursor-pointer">Refund Policy</div>
            </div>
            <br /><br />
        </div>
        </>
    )
}