import React, { useEffect, useRef, useState } from "react";
export function Category(){

    return(
        <>
        <div id="products" className="grid gap-0 justify-center p-5 w-screen h-auto align-top">
            <div className="grid justify-center w-full self-start" >
                <div className="flex font-inter tracking-tight leading-1 justify-self-center justify-center text-center gap-1 md:gap-2 text-green-600 align-middle items-center">
                    <div className=" h-0.5 w-15 bg-green-600"></div> <p className="w-fit text-base sm:text-lg md:text-xl">CATEGORIES</p> <div className=" h-0.5 w-15 bg-green-600"></div>
                </div>
                <br />
                <div className=" grid w-full font-int0er mb-2 justify-self-center justify-center text-center">
                    <h2 className=" mt-2 leading-5 font-inter w-fit font-semibold text-3xl sm:text-4xl md:text-5xl"><span className="text-white">Shop by</span> <span className="text-green-600">Category</span></h2>
                    <i className="text-gray-300 font-extralight mt-4 text-base sm:text-lg md:text-xl">Find exactly what you're looking for. <br /> Premium quility across every category</i>
                </div>
            </div>
            <br /><br />

            {/* laptop interface */}
            <div className=" hidden md:grid md:grid-cols-2 lg:grid-cols-4">

                {/* first card */}
                <div className=" relative group w-[95%] overflow-hidden rounded-xl shadow-sm shadow-green-600 border border-gray-600">
                    <div>
                        {/* bg */}
                        <div className=" bg-custom1 absolute inset-0 bg-cover bg-center h-1/2 align-middle justify-self-center transition-transform duration-700 ease-in-out group-hover:scale-105">
                            <img src="/vap1.png" className=" w-full opacity-75" alt="" />
                        </div>

                        {/* content */}
                        <div className=" relative z-10 w-full grid items-end align-bottom justify-start bg-linear-to-b from-transparent via-85% to-black text-white p-4">
                            <div className=" h-fit pt-2 pb-2 pr-4 pl-4 self-start justify-self-start rounded-full border border-green-600 transition-transform duration-300 ease-in group-hover:shadow-md group-hover:shadow-green-700">
                                <img src="/v1.png" alt="" className="h-10 brightness-75" />
                            </div>
                            <div className=" mt-40 justify-self-center grid self-end">
                                <div className=" w-fit h-fit">
                                    <h3 className=" text-xl md:text-2xl font-medium">DISPOSIBLES</h3>
                                    <div className=" h-1 w-10 bg-linear-to-r from-green-600 to-transparent mt-2 mb-2"></div>
                                    <p className=" text-base w-fit font-normal md:text-xl h-fit wrap-break-word text-gray-300">Premium ready to use devices with amazing flavors</p>
                                </div>
                                <div className=" mt-5 flex align-bottom pt-4 text-green-600 font-semibold text-2xl">
                                    <p>Explore</p>
                                    <img src="/arr1.png" className="h-10 group-hover:scale-110 transition-transform duration-100 ease-in justify-self-end ml-auto brightness-115" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second card */}
                <div className=" relative group w-[95%] overflow-hidden rounded-xl shadow-sm shadow-green-600 border border-gray-600">
                    <div>
                        {/* bg */}
                        <div className=" bg-custom1 absolute inset-0 bg-cover bg-center h-1/2 align-middle justify-self-center transition-transform duration-700 ease-in-out group-hover:scale-105">
                            <img src="/vap3.png" className=" w-full opacity-75" alt="" />
                        </div>

                        {/* content */}
                        <div className=" relative z-10 w-full grid items-end align-bottom justify-start bg-linear-to-b from-transparent via-85% to-black text-white p-4">
                            <div className=" h-fit p-2 self-start justify-self-start rounded-full border border-green-600 transition-transform duration-300 ease-in group-hover:shadow-md group-hover:shadow-green-700">
                                <img src="/drop.svg" alt="" className="h-10 brightness-75" />
                            </div>
                            <div className=" mt-40 justify-self-center grid self-end">
                                <div className=" w-fit h-fit">
                                    <h3 className=" text-xl md:text-2xl font-medium">E_LIQUIDS</h3>
                                    <div className=" h-1 w-10 bg-linear-to-r from-green-600 to-transparent mt-2 mb-2"></div>
                                    <p className=" text-base w-fit font-normal md:text-xl h-fit wrap-break-word text-gray-300">Wide range of flavors for every taste</p>
                                </div>
                                <div className=" mt-5 flex align-bottom pt-4 text-green-600 font-semibold text-2xl">
                                    <p>Explore</p>
                                    <img src="/arr1.png" className="h-10 group-hover:scale-110 transition-transform duration-100 ease-in justify-self-end ml-auto brightness-115" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* third card */}
                <div className=" relative group md:mt-4 w-[95%] overflow-hidden rounded-xl shadow-sm shadow-green-600 border border-gray-600">
                    <div>
                        {/* bg */}
                        <div className=" bg-custom1 absolute inset-0 bg-cover bg-center h-1/2 align-middle justify-self-center transition-transform duration-700 ease-in-out group-hover:scale-105">
                            <img src="/vap4.png" className=" w-full opacity-75" alt="" />
                        </div>

                        {/* content */}
                        <div className=" relative z-10 w-full grid items-end align-bottom justify-start bg-linear-to-b from-transparent via-85% to-black text-white p-4">
                            <div className=" h-fit p-2 pb-3 self-start justify-self-start rounded-full border border-green-600 transition-transform duration-300 ease-in group-hover:shadow-md group-hover:shadow-green-700">
                                <img src="/v2.png" alt="" className="h-10 brightness-75" />
                            </div>
                            <div className=" mt-40 justify-self-center grid self-end">
                                <div className=" w-fit h-fit">
                                    <h3 className=" text-xl md:text-2xl font-medium">POD SYSTEM</h3>
                                    <div className=" h-1 w-10 bg-linear-to-r from-green-600 to-transparent mt-2 mb-2"></div>
                                    <p className=" text-base w-fit font-normal md:text-xl h-fit wrap-break-word text-gray-300">Advance pod for smooth performance</p>
                                </div>
                                <div className=" mt-5 flex align-bottom pt-4 text-green-600 font-semibold text-2xl">
                                    <p>Explore</p>
                                    <img src="/arr1.png" className="h-10 group-hover:scale-110 transition-transform duration-100 ease-in justify-self-end ml-auto brightness-115" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* fourth card */}
                <div className=" relative group md:mt-4 w-[95%] overflow-hidden rounded-xl shadow-sm shadow-green-600 border border-gray-600">
                    <div>
                        {/* bg */}
                        <div className=" bg-custom1 absolute inset-0 bg-cover bg-center h-full align-middle justify-self-center transition-transform duration-700 ease-in-out group-hover:scale-105">
                            <img src="/va.png" className=" w-full opacity-75" alt="" />
                        </div>

                        {/* content */}
                        <div className=" relative z-10 w-full grid items-end align-bottom justify-start bg-linear-to-b from-transparent via-85% to-black text-white p-4">
                            <div className=" h-fit pt-2 pb-2 pr-4 pl-4 self-start justify-self-start rounded-full border border-green-600 transition-transform duration-300 ease-in group-hover:shadow-md group-hover:shadow-green-700">
                                <img src="/vaa.png" alt="" className="h-10 brightness-75" />
                            </div>
                            <div className=" mt-40 justify-self-center grid self-end">
                                <div className=" w-fit h-fit">
                                    <h3 className=" text-xl md:text-2xl font-medium">ACCESSORIES</h3>
                                    <div className=" h-1 w-10 bg-linear-to-r from-green-600 to-transparent mt-2 mb-2"></div>
                                    <p className=" text-base w-fit font-normal md:text-xl h-fit wrap-break-word text-gray-300">Everything you need to elevate your experience</p>
                                </div>
                                <div className=" mt-5 flex align-bottom pt-4 text-green-600 font-semibold text-2xl">
                                    <p>Explore</p>
                                    <img src="/arr1.png" className="h-10 group-hover:scale-110 transition-transform duration-100 ease-in justify-self-end ml-auto brightness-115" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile interface */}
            <div className="grid md:hidden">

                {/* first card */}
                    <div className="relative group mb-4 overflow-hidden rounded-xl shadow-sm shadow-green-700 border border-gray-600">
                        {/* bg */}
                        <div className="bg-custom1 absolute inset-0 bg-cover bg-center h-[150%] align-middle justify-self-end transition-transform duration-700 ease-in-out group-hover:scale-110"> 
                            <img src="/vap1.png" className=" h-full opacity-75" alt="" />
                        </div>
                        {/* Foreground content */}
                        <div className="relative z-10 w-full md:w-[95%] flex gap-6 items-center justify-start bg-linear-to-l from-transparent via-100% via-black text-white p-4">
                            <div className=" h-fit pt-2 pb-2 pr-4 pl-4 self-center justify-self-start rounded-full border border-green-600">
                                <img src="/v1.png" alt="" className="h-10 brightness-75" />
                            </div>
                            <div className=" h-fit w-[50%] grid text-white font-inter">
                                <h3 className=" text-xl md:text-2xl font-medium">DISPOSIBLES</h3>
                                <p className=" text-base w-fit font-normal md:text-xl h-fit wrap-break-word text-gray-300">Premium ready to use devices with amazing flavors</p>
                            </div>
                            <div className=" h-10 w-fit flex justify-self-end ml-auto gap-2 self-end">
                                <b className="text-base sm:text-lg md:text-xl hidden md:block w-fit text-green-600 self-center ">Explore</b>
                                <img src="/arr1.png" className="h-full brightness-75 transition-transform duration-100 ease-in group-hover:scale-110" alt="" />
                            </div>
                        </div> 
                    </div>
                
                {/* second card */}
                    <div className="relative group mb-4 overflow-hidden rounded-xl shadow-sm shadow-green-700 border border-gray-600">
                        {/* bg */}
                        <div className="bg-custom1 absolute inset-0 bg-cover bg-center h-[150%] align-middle justify-self-end transition-transform duration-700 ease-in-out group-hover:scale-110"> 
                            <img src="/vap3.png" className=" h-full opacity-75" alt="" />
                        </div>
                        {/* Foreground content */}
                        <div className="relative z-10 w-full md:w-[95%] flex gap-6 items-center justify-start bg-linear-to-l from-transparent via-100% via-black text-white p-4">
                            <div className=" h-fit p-2 self-center justify-self-start rounded-full border border-green-600">
                                <img src="/drop.svg" alt="" className="h-10 brightness-75" />
                            </div>
                            <div className=" h-fit w-[50%] grid text-white font-inter">
                                <h3 className=" text-xl md:text-2xl font-medium">E-LIQUID</h3>
                                <p className=" text-base w-fit font-normal md:text-xl h-fit wrap-break-word text-gray-300">Wide range of flavors for every taste</p>
                            </div>
                            <div className=" h-10 w-fit flex justify-self-end ml-auto gap-2 self-end">
                                <b className="text-base sm:text-lg md:text-xl hidden md:block w-fit text-green-600 self-center ">Explore</b>
                                <img src="/arr1.png" className="h-full brightness-75 transition-transform duration-100 ease-in group-hover:scale-110" alt="" />
                            </div>
                        </div> 
                    </div>
                
                {/* third card */}
                    <div className="relative group overflow-hidden mb-4 rounded-xl shadow-sm shadow-green-700 border border-gray-600">
                        {/* bg */}
                        <div className="bg-custom1 absolute inset-0 bg-cover bg-center h-[150%] align-middle justify-self-end transition-transform duration-700 ease-in-out group-hover:scale-110"> 
                            <img src="/vap4.png" className=" h-full opacity-75" alt="" />
                        </div>
                        {/* Foreground content */}
                        <div className="relative z-10 w-full md:w-[95%] flex gap-6 items-center justify-start bg-linear-to-l from-transparent via-100% via-black text-white p-4">
                            <div className=" h-fit p-2 pb-3 self-center justify-self-start rounded-full border border-green-600">
                                <img src="/v2.png" alt="" className="h-10 brightness-75" />
                            </div>
                            <div className=" h-fit w-[50%] grid text-white font-inter">
                                <h3 className=" text-xl md:text-2xl font-medium">POD SYSTEM</h3>
                                <p className=" text-base w-fit font-normal md:text-xl h-fit wrap-break-word text-gray-300">Advance pod for smooth performance</p>
                            </div>
                            <div className=" h-10 w-fit flex justify-self-end ml-auto gap-2 self-end">
                                <b className="text-base sm:text-lg md:text-xl hidden md:block w-fit text-green-600 self-center ">Explore</b>
                                <img src="/arr1.png" className="h-full brightness-75 transition-transform duration-100 ease-in group-hover:scale-110" alt="" />
                            </div>
                        </div> 
                    </div>

                {/* fourth card */}
                    <div className="relative group overflow-hidden mb-4 rounded-xl shadow-sm shadow-green-700 border border-gray-600">
                        {/* bg */}
                        <div className="bg-custom1 absolute inset-0 bg-cover bg-center h-[150%] align-middle justify-self-end transition-transform duration-700 ease-in-out group-hover:scale-110"> 
                            <img src="/va.png" className=" h-full opacity-75" alt="" />
                        </div>
                        {/* Foreground content */}
                        <div className="relative z-10 w-full md:w-[95%] flex gap-6 items-center justify-start bg-linear-to-l from-transparent via-100% via-black text-white p-4">
                            <div className=" h-fit pt-2 pb-2 pr-4 pl-4 self-center justify-self-start rounded-full border border-green-600">
                                <img src="/vaa.png" alt="" className="h-10 brightness-75" />
                            </div>
                            <div className=" h-fit w-[50%] grid text-white font-inter">
                                <h3 className=" text-xl md:text-2xl font-medium">ACCESSORIES</h3>
                                <p className=" text-base w-fit font-normal md:text-xl h-fit wrap-break-word text-gray-300">Everything you need to elevate your experience</p>
                            </div>
                            <div className=" h-10 w-fit flex justify-self-end ml-auto gap-2 self-end">
                                <b className="text-base sm:text-lg md:text-xl hidden md:block w-fit text-green-600 self-center ">Explore</b>
                                <img src="/arr1.png" className="h-full brightness-75 transition-transform duration-100 ease-in group-hover:scale-110" alt="" />
                            </div>
                        </div> 
                    </div>
            </div>
        </div>
        </>
    )
}