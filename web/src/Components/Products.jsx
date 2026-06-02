import React, { useEffect, useRef, useState } from "react";

export function Product(){

    //animation for dots beneath cards
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);
    const [card1V, setCard1V] = useState(true);
    const [card2V, setCard2V] = useState(true);
    const [card3V, setCard3V] = useState(false);
    const [card4V, setCard4V] = useState(false);

    useEffect(() => {
        const dots = [card1Ref, card2Ref, card3Ref, card4Ref];
        const handleView =new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === card1Ref.current){
                    setCard1V(entry.isIntersecting);
                } else if(entry.target === card2Ref.current){
                    setCard2V(entry.isIntersecting);
                } else if(entry.target === card3Ref.current){
                    setCard3V(entry.isIntersecting);
                } else if(entry.target == card4Ref.current){
                    setCard4V(entry.isIntersecting);
                }
            })
        }, {threshold:0.6});
        dots.forEach((dot) => {
            if(dot.current) handleView.observe(dot.current);
        });
        return () => {
            dots.forEach((dot) => {
            if(dot.current) handleView.unobserve(dot.current);
        })
        }

    })

    return(
        <>
        <div id="products" className="grid gap-0 justify-center p-5 w-screen h-auto align-top">
            <div className="grid justify-center self-start" >
                <div className="flex font-inter tracking-tight leading-1 justify-self-center justify-center text-center gap-1 md:gap-2 text-green-600 align-middle items-center">
                    <div className=" h-0.5 w-15 bg-green-600"></div> <p className="w-fit text-base sm:text-lg md:text-xl">FEATURED PRODUCTS</p> <div className=" h-0.5 w-15 bg-green-600"></div>
                </div>
                <br />
                <div className=" grid w-full md:w-[70%] font-int0er mb-2 justify-self-center justify-center text-center">
                    <h2 className=" mt-2 leading-5 font-inter font-semibold text-3xl sm:text-4xl md:text-5xl"><span className="text-white">Explore</span> <span className="text-green-600">Popular Picks</span></h2>
                    <i className="text-gray-300 font-extralight mt-4 text-base sm:text-lg md:text-xl">Handpicked favourites from our collection. Premium quility, smooth hits unforgettable flavors</i>
                </div>
            </div>
            <div className=" w-full justify-self-start self-start grid overflow-x-scroll lg:overflow-x-hidden">
            <div className="grid self-start w-[200%] md:mt-4 lg:w-full grid-cols-4 mt-0 align-top h-fit gap-2">

                {/* first card */}
                <div ref={card1Ref} className="grid justify-self-center p-0 w-full md:w-full h-full rounded-md border border-gray-600 shadow-md shadow-green-700 overflow-clip col-start-1 col-end-2 gap-0">
                    <img src="/vap1.png" className=" w-full h-52 md:h-72 justify-self-center" alt="" />
                    <div className=" grid gap-1 font-inter p-2 md:p-4">.
                        <h3 className="text-white font-semibold tracking-tight text-base sm:text-lg md:text-xl">VAPORO NEXA 6000</h3>
                        <p className=" text-green-600 font-medium tracking-tight text-sm sm:text-lg md:text-xl">Mint Ice</p>
                        <p className="text-gray-300 font-normal tracking-tight text-sm sm:text-base md:text-lg">Crisp mint with icy finish for the ultimate chill.</p>
                    </div>
                    <div className="flex p-1 md:p-4 md:pr-6 w-full align-middle items-center">
                        <b className="text-green-600 font-medium tracking-tight text-sm sm:text-balance md:text-lg justify-self-start">$24.99</b>
                        <div id="btn1" className="text-white cursor-pointer p-2 justify-self-end ml-auto rounded-xl border border-green-600 drop-shadow-sm drop-shadow-green-600">View Details</div>
                    </div>
                </div>

                {/* second card */}
                <div ref={card2Ref} className="grid justify-self-center p-0 w-full md:w-full h-fit rounded-md border border-gray-600 shadow-md shadow-green-700 overflow-clip col-start-2 col-end-3 gap-0">
                    <img src="/vap2.png" className=" w-full h-52 md:h-72 justify-self-center" alt="" />
                    <div className=" grid gap-1 font-inter p-2 md:p-4">.
                        <h3 className="text-white font-semibold tracking-tight text-base sm:text-lg md:text-xl">VAPORO MAX 4000</h3>
                        <p className=" text-green-600 font-medium tracking-tight text-sm sm:text-lg md:text-xl">Watermelon Ice</p>
                        <p className="text-gray-300 font-normal tracking-tight text-sm sm:text-base md:text-lg">Juicy Watermelon blended with refreshing ice</p>
                    </div>
                    <div className="flex p-2 md:p-4 md:pr-6 w-full align-middle items-center">
                        <b className="text-green-600 font-medium tracking-tight text-sm sm:text-balance md:text-lg justify-self-start">$19.99</b>
                        <div id="btn1" className="text-white cursor-pointer p-1 justify-self-end ml-auto rounded-xl border border-green-600 drop-shadow-sm drop-shadow-green-600">View Details</div>
                    </div>
                </div>

                {/* third card */}
                <div ref={card3Ref} className="grid justify-self-center p-0 w-full h-full rounded-md border border-gray-600 shadow-md shadow-green-700 overflow-clip col-start-3 col-end-4 gap-0">
                    <img src="/vap3.png" className=" w-full h-52 md:h-72 justify-self-center" alt="" />
                    <div className=" grid gap-1 font-inter p-2 md:p-4">.
                        <h3 className="text-white font-semibold tracking-tight text-base sm:text-lg md:text-xl">VAPORO E-LIQUID</h3>
                        <p className=" text-green-600 font-medium tracking-tight text-sm sm:text-lg md:text-xl">Mango Ice</p>
                        <p className="text-gray-300 font-normal tracking-tight text-sm sm:text-base md:text-lg">Tropical mango with cool exhale. Smooth and satisfying</p>
                    </div>
                    <div className="flex p-2 md:p-4 md:pr-6 w-full align-middle items-center">
                        <b className="text-green-600 font-medium tracking-tight text-sm sm:text-balance md:text-lg justify-self-start">$14.99</b>
                        <div id="btn1" className="text-white cursor-pointer p-1 justify-self-end ml-auto rounded-xl border border-green-600 drop-shadow-sm drop-shadow-green-600">View Details</div>
                    </div>
                </div>

                {/* fourth card */}
                <div ref={card4Ref} className="grid justify-self-center p-0 w-full md:w-full h-full rounded-md border border-gray-600 shadow-md shadow-green-700 overflow-clip col-start-4 col-end-5 gap-0">
                    <img src="/vap4.png" className=" w-full h-52 md:h-72 justify-self-center" alt="" />
                    <div className=" grid gap-1 font-inter p-2 md:p-4">.
                        <h3 className="text-white font-semibold tracking-tight text-base sm:text-lg md:text-xl">VAPORO EDGE 8000</h3>
                        <p className=" text-green-600 font-medium tracking-tight text-sm sm:text-lg md:text-xl">Blue Razz Ice</p>
                        <p className="text-gray-300 font-normal tracking-tight text-sm sm:text-base md:text-lg">Sweet blue raspberry with an icy twist</p>
                    </div>
                    <div className="flex p-2 md:p-4 md:pr-6 w-full align-middle items-center">
                        <b className="text-green-600 font-medium tracking-tight text-sm sm:text-balance md:text-lg justify-self-start">$27.99</b>
                        <div id="btn1" className="text-white cursor-pointer p-1 justify-self-end ml-auto rounded-xl border border-green-600 drop-shadow-sm drop-shadow-green-600">View Details</div>
                    </div>
                </div>
            </div>
            </div>
            <div className=" mt-4 lg:hidden flex gap-4 justify-center justify-self-center align-middle">
                <div className= {`h-1 w-1 ${card1V? "bg-green-600" : "bg-gray-600"} `}></div>
                <div className= {`h-1 w-1 ${card2V? "bg-green-600" : "bg-gray-600"} `}></div>
                <div className= {`h-1 w-1 ${card3V? "bg-green-600" : "bg-gray-600"} `}></div>
                <div className= {`h-1 w-1 ${card4V? "bg-green-600" : "bg-gray-600"} `}></div>
            </div>
            <div id="btn1" className=" mt-8 flex align-middle items-center md:gap-4 gap-2 p-4 text-white cursor-pointer justify-self-center rounded-xl border border-green-600 drop-shadow-md drop-shadow-green-700 font-inter text-sm sm:text-base md:text-lg">
                <p className=" w-fit">VIEW ALL PRODUCTS</p>
                <img src="/arr.png" className=" w-10 invert" alt="" />
            </div>
        </div>
        </>
    )
}