import React, { useEffect, useReducer, useRef } from "react";
import { useState } from "react";
import { useFormState } from "react-dom";

export function Navbar (){

    //scrolling effect of nav bar
    const [scrl, setScrl] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50){
            setScrl(true);
        } else{
            setScrl(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return (() => {window.removeEventListener("scroll", handleScroll);});
    }, []);

    //scrolling from nav
    const scrollOntoSection = (ref) => {
        ref.current.scrollIntoView({behavior:"smooth"});
    }
    //updating the link in nav bar
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
        const homeRef = document.getElementById("home");
        const productsRef = document.getElementById("products");
        const aboutRef = document.getElementById("about");
        const contactRef = document.getElementById("contact");

        const observer = new IntersectionObserver((enteries) => {
            let mostVisible = null;
            let maxRatio = 0;
            enteries.forEach((entery) => {
                if (entery.isIntersecting &&  entery.intersectionRatio > maxRatio){
                    maxRatio = entery.intersectionRatio;
                    mostVisible = entery.target.id;
                    setActiveSection(mostVisible);
                }
            });
            if(mostVisible){
                setActiveSection(mostVisible);
            }
        }, {threshold:0.2});
        const refs = [homeRef, productsRef, aboutRef, contactRef];
        refs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
        return() => {
            refs.forEach((ref) => {
                if(ref) observer.unobserve(ref);
            });
        }
    }, []);

    //hambergur menu for mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const menuBtnRef = useRef(null)

    useEffect(() => {
        if(isMenuOpen){
            document.body.style.overflow = "hidden";
        } else if (!isMenuOpen){
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    //handle changing state of menu
    useEffect(() => {
        const handleClick = (e) => {
            if( menuBtnRef.current && !menuBtnRef.current.contains(e.target)){
                if (menuRef.current && !menuRef.current.contains(e.target)){
                    setIsMenuOpen(false);
                }
            }
        }
        if (isMenuOpen){
            document.addEventListener("click", handleClick)
        }
        return () => {document.removeEventListener("click", handleClick)}
        }, [isMenuOpen]);

    //scroll
    function scrolOn (id){
        const elmnt = document.getElementById(id);
        elmnt.scrollIntoView({ behavior:"smooth"});
    }
    return(
        <>
        <div id="nav" className={` bg-[rgba(10,10,10,0.45)] backdrop-blur-[14px] border border-[rgba(255,255,255,0.06)] w-[90%] sm:w-[95%] md:w-[95%] pl-4 pr-4 rounded-xl grid ${scrl? "fixed top-2 md:top-0 justify-self-center m-4 z-20 h-fit" : " h-fit m-4 justify-self-center"}`}>
            <div className=" font-inter w-full justify-self-start align-middle h-fit m-0 pt-3 pb-3 pl-0 pr-0 sm:p-3 flex">

                <div className="flex gap-1 w-[95%] md:w-[95%] justify-self-start">
                    <img src="/logo.png" className="w-6 sm:w-6 md:w-7" alt="" />
                    <div className=" text-xl sm:text-2xl md:text-3xl grid gap-0 h-fit w-fit">
                        <h1 className=" text-xl sm:text-2xl md:text-3xl font-bold m-0 h-fit w-fit"><span className="text-white m-0">VAPO</span> <span className=" m-0 text-green-500">RO</span></h1>
                        <i className="text-xs sm:text-sm h-fit m-0 md:text-base min-w-fit text-white">PREMIUM VAPE STORE</i>
                    </div>
                </div>

                <div className="flex items-center justify-end lg:gap-0 h-fit w-full m-0">
                    <div className="justify-end text-base sm:text-lg md:text-xl p-2 pl-4 pr-4 font-normal sm:gap-5 md:gap-10 lg:flex items-center hidden">
                        <div className={` cursor-pointer pt-2 pb-2 ${activeSection == "home" ? "border-b-green-600 text-green-500 border-b-2" : "text-white"} `}
                        onClick={() => {scrolOn("home")}}>
                            <b>Home</b>
                        </div>
                        <div className={` cursor-pointer pt-2 pb-2 ${activeSection == "products" ? " font-semibold border-b-green-600 text-green-500  border-b-2" : "text-white"} `}
                        onClick={() => {{scrolOn("products")}}}>
                            <b>Products</b>
                        </div><div className={` cursor-pointer pt-2 pb-2 ${activeSection == "about" ? " font-semibold border-b-green-600 text-green-500  border-b-2" : "text-white"} `}
                        onClick={() => {{scrolOn("about")}}}>
                            <b>About</b>
                        </div><div className={` cursor-pointer pt-2 pb-2 ${activeSection == "contact" ? " font-semibold border-b-green-600 text-green-500  border-b-2" : "text-white"} `}
                        onClick={() => {{scrolOn("contact")}}}>
                            <b>Contact</b>
                        </div>
                    </div>
                    <div id="btn1" className="flex drop-shadow-[0_0_5px_rgba(22,163,74,0.8)] font-light items-center w-fit border border-green-600 text-sm sm:text-base gap-2 md:text-xl text-white p-0 pt-2 pb-2 pl-1 pr-1 md:p-2 sm:p-2 sm:pt-4 sm:pb-4 cursor-pointer rounded-xl justify-center align-middle">
                        <img src="/loc.png" className=" h-3 sm:h-5 md:h-6 brightness-150 " alt="loc" />
                        <b>Visit Store</b>
                    </div>
                    <div ref={menuBtnRef} className="h-full ml-4 w-fit grid sm:hidden justify-center items-center align-middle" onClick={() => {setIsMenuOpen(!isMenuOpen);
                        console.log (isMenuOpen)
                    }}>
                        <img src="/menu.png" alt="" className=" h-4 sm:h-5 md:h-6 invert cursor-pointer hover:shadow-sm" />
                    </div>
                </div>
            </div>
        </div>
        {isMenuOpen && (
            <div ref={menuRef} className={`w-fit z-50 p-2 bg-black/70 backdrop-blur-2xl h-fit fixed align-middle right-20 justify-self-end grid transition-transform duration-1000 ease-in ${isMenuOpen? "justify-self-center" : ""}`}
            onClick={(e) => e.stopPropagation()}>
                <div className={` cursor-pointer pt-2 pb-2 ${activeSection == "home" ? "border-b-green-600 text-green-500 border-b-2" : "text-white"} `}
                onClick={() => scrollOntoSection(homeRef)}>
                    <b>Home</b>
                </div>
                <div className={` cursor-pointer pt-2 pb-2 ${activeSection == "products" ? " font-semibold border-b-green-600 text-green-500  border-b-2" : "text-white"} `}
                onClick={() => scrollOntoSection(productsRef)}>
                    <b>Products</b>
                </div><div className={` cursor-pointer pt-2 pb-2 ${activeSection == "about" ? " font-semibold border-b-green-600 text-green-500  border-b-2" : "text-white"} `}
                onClick={() => scrollOntoSection(aboutRef)}>
                    <b>About</b>
                </div><div className={` cursor-pointer pt-2 pb-2 ${activeSection == "contact" ? " font-semibold border-b-green-600 text-green-500  border-b-2" : "text-white"} `}
                onClick={() => scrollOntoSection(contactRef)}>
                    <b>Contact</b>
                </div>
            </div>
        )}
        </>
    )
}
