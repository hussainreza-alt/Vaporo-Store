import React from "react";

export function About (){
    return(
        <div id="about" className=" h-fit w-screen pt-20 m-0 grid lg:grid-cols-[1fr_2fr] ">
            <br /><br />
            <img src="/mb.png" className=" justify-self-center w-[75%] rounded-xl border border-green-800 lg:hidden" alt="" />
            <img src="/md.png" className=" hidden lg:block h-[45%] w-[90%] col-start-1 col-end-2 rounded-xl border border-green-800 justify-self-center" alt="" />

            <div className="flex gap-4 h-fit w-full lg:col-start-2 lg:col-end-3 justify-self-center justify-center mt-0 mlgd:justify-start">
                <div className=" h-96 hidden lg:block w-1 bg-linear-to-b from-green-800 via-green-600 to-black shadow-[0, 0, 10px] shadow-green-600"></div>
                <div className=" text-white p-4 text-justify grid wrap-break-word w-[85%]">
                    <span className=" text-base sm:text-lg md:text-xl text-green-700 font-inter font-semibold tracking-tight">ABOUT US</span>
                    <h3 className=" text-2xl sm:text-3xl md:text-4xl text-white font-bold">Build For People <br /> Who Appreciate <span className="text-green-600">Quality</span></h3>
                    <br />
                    <p className=" text-lg sm:text-xl md:text-2xl wrap-break-word text-gray-300">VAPORO has founded with a simple goal - to deliver premium vaping products that combine quility, performace and satisfaction. <br /> <br /> We carefully select every product we offer to ensure you get the best experience, every time.</p>
                    <br /><br />

                    {/* cards */}
                    <div className="grid w-[85%] lg:grid-cols-2 justify-self-center justify-center">
                    
                    {/* first card */}
                    <div className=" flex mb-5 p-4 w-full gap-4 items-center lg:col-start-1 lg:col-end-2 rounded-lg border border-gray-700 lg:border-none align-middle">
                        <div className=" p-2 h-fit w-fit rounded-lg border border-green-700">
                        <img src="/aut.svg" className="h-10 md:h-14 brightness-110" alt="" />
                        </div>
                        <div className=" grid wrap-break-word text-left w-[85%]">
                            <h5 className="text-base sm:text-lg md:text-xl text-white">Authentic Products</h5>
                            <i className=" text-sm sm:text-base md:text-lg text-gray-400">100% genuine products from trusted brands. </i>
                        </div>
                    </div>

                    {/* second card */}
                    <div className=" flex mb-5 p-4 w-full gap-4 items-center lg:col-start-2 lg:col-end-3 rounded-lg border border-gray-700 lg:border-none align-middle">
                        <div className=" p-2 pl-4 pr-4 h-fit w-fit rounded-lg border border-green-700">
                        <img src="/v1.png" className="h-10 md:h-14 brightness-110" alt="" />
                        </div>
                        <div className=" grid wrap-break-word text-left w-[85%]">
                            <h5 className="text-base sm:text-lg md:text-xl text-white">Wide Flavor Selection</h5>
                            <i className=" text-sm sm:text-base md:text-lg text-gray-400">100% genuine products from trusted brands. </i>
                        </div>
                    </div>

                    {/* third card */}
                    <div className=" flex p-4 mb-5 w-full gap-4 items-center lg:col-start-1 lg:col-end-2 rounded-lg border border-gray-700 lg:border-none align-middle">
                        <div className=" p-2 h-fit w-fit rounded-lg border border-green-700">
                        <img src="/sup.png" className="h-10 md:h-14 brightness-75" alt="" />
                        </div>
                        <div className=" grid wrap-break-word text-left w-[85%]">
                            <h5 className="text-base sm:text-lg md:text-xl text-white">Freindly Support</h5>
                            <i className=" text-sm sm:text-base md:text-lg text-gray-400">We are here to help you anytime you need. </i>
                        </div>
                    </div>

                    {/* fourth card */}
                    <div className=" flex p-4 w-full gap-4 items-center lg:col-start-2 lg:col-end-3 rounded-lg border border-gray-700 lg:border-none align-middle">
                        <div className=" p-2 h-fit w-fit rounded-lg border border-green-700">
                        <img src="/loca.svg" className="h-10 md:h-14 brightness-110" alt="" />
                        </div>
                        <div className=" grid wrap-break-word text-left w-[85%]">
                            <h5 className="text-base sm:text-lg md:text-xl text-white">Local Availability</h5>
                            <i className=" text-sm sm:text-base md:text-lg text-gray-400">Proudly serving our local community.</i>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}