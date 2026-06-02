import React, { useEffect, useState } from "react";
import { useRef } from "react";

export function Header(){
    const scrollContainerRef = useRef(null);
    const [pt, setPt] = useState(0);
    const [pb, setPb] = useState(4);

    useEffect(() => {
        const handleScrollDot = () => {
            if(!scrollContainerRef) return;
            
            const rect = scrollContainerRef.current.getBoundingClientRect();
            const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if(inView){
                const scrolly = window.scrollY;
                const value = Math.min(Math.floor(scrolly / 100), 4);
                console.log(value);
                const nValue = pb - value;
                setPt(value);
                setPb(nValue);
            };
            document.getElementById("home").addEventListener("scroll", handleScrollDot);
            return () => document.getElementById("home").removeEventListener("scroll", handleScrollDot);
        }
    }, []);
    
    return(
        <>
        <div id="home" className=" lg:overflow-y-hidden w-screen h-[90%] mt-5 grid lg:grid-cols-2 lg:gap-0 justify-center pl-4 lg:pl-8 ">
            <div className=" lg:col-start-1 lg:col-end-2"><div className="flex mb-2 gap-4 w-full wrap-break-word justify-self-start items-center m-4 md:m-2 md:mb4">
                <h1 className="text-green-600 font-inter tracking-tightness text-lg sm:text-xl md:text-2xl font-medium leading-0.5">PREMIUM VAPE SHOP</h1><div className=" h-1 w-16 sm:w-20 md:w-32 bg-linear-to-r from-green-600 via-green-700 to-[#07111f]"></div>
            </div>
            <br />
            <div className=" mb-1 mt-3 m-4 md:m-2 flex flex-wrap text-2xl sm:text-3xl md:text-6xl justify-self-start justify-start font-bold font-satoshi tracking-tightness leading-tight">
                <h2 className=" text-black h-fit mt-0 mb-1"><span className="text-white">Premium</span> <span className="text-green-600">Flavors</span></h2>
                <h2 className=" text-black mt-1 mb-0 h-fit"><span className="text-white">Elevated</span> <span className="text-green-600">Experience</span></h2>
            </div>
            <p className=" wrap-break-word w-[75%] m-4 md:m-2 text-gray-300 mt-2 ">Discover the best vape products, devices and flavors - curated for quility and satisfaction</p>
            <br />
            <div className=" w-fit justify-self-start grid lg:flex gap-2 lg:gap-4 md:w-1/2 lg:w-full m-4 lg:mt-4 lg:m-2">
                <div id="btn2" className=" group drop-shadow-[0_0_5px] shadow-green-400 justify-self-start w-full p-2 lg:p-4 rounded-lg bg-green-600 text-black font-inter flex text-center gap-1 align-middle items-center justify-center hover:shadow-sm hover:shadow-white pl-4 pr-4 cursor-pointer ">
                    <img src="/shopping.png" className=" h-5 brightness-0 sm:h-6 md:h-7 group-hover:invert " alt="" />
                    <p className=" w-fit text-base sm:text-lg tracking-tight font-medium md:text-lg">View Products</p>
                </div>
                <div id="btn1" className=" md:mt-2 drop-shadow-[0_0_5px] shadow-white justify-self-end w-fit md:w-full lg:w-full p-2 lg:p-4 rounded-lg bg-black text-white font-inter flex text-center gap-1 align-middle items-center justify-center border border-gray-600 pl-4 pr-4 cursor-pointer ">
                    <img src="/whatsapp.png" className=" h-5 sm:h-6 md:h-7 invert" alt="" />
                    <p className=" w-fit text-base sm:text-lg tracking-tight font-medium md:text-lg">View Chat On WhatsApp</p>
                </div>
            </div> 
            <div className="flex justify-self-center gap-2 mt-16 text-gray-700">
                <div ref={scrollContainerRef} className= {`pl-1 pr-1 pb-${pb} pt-${pt} rounded-4xl border border-gray-700 flex`}>
                    <div className=" text-xl text-green-600 w-1 h-1 bg-green-600 rounded-4xl">
                    </div>
                </div>
                <i className="text-gray-700">Scroll to explore</i>
            </div>           
            </div>
            <div className=" h-fit md:h-screen self-center m-0 p-0 top-[50%] grid justify-self-center lg:col-start-2 lg:col-end-3">
                <img src="/vapor.png" alt="" className=" md:h-[85%] justify-self-center" />
            </div>
        </div>
        </>
    )
}