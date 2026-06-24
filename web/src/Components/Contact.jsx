import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
const position = [34.0522, -118.2437];
import MY from "/loca.svg"
import "leaflet/dist/leaflet.css";
import { useSVGOverlay } from "react-leaflet/SVGOverlay";


export function Contact (){

    const myLoc = L.icon({
        iconUrl: MY,
        iconSize: [32, 32],
        iconAnchor: [16, 32]
    })
    function ResizeFix(){
        const map = useMap();
            useEffect(() => {
                setTimeout(() => {
                    map.invalidateSize();
                }, 0);
            }, [map]);
        return null;
    }

    // form part of logic
    const [active, setactive] = useState(false);
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [message, Setmessage] = useState("");
    const btnsubmit = useRef(null);
    const txtbutton = useRef (null)
    const imgbuttonsubmit = useRef(null);

    const validateInput = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?\d{7,15}$/;

        if (emailRegex.test(value)) return "email";
        if (phoneRegex.test(value)) return "phone";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let type = validateInput(contact);
        if (!type){
            if(btnsubmit.current){
                setactive(false);
                btnsubmit.current.disabled = true;
                txtbutton.current.innerText = "Please Enter valid phone number or email"
                imgbuttonsubmit.current.style.display = "none"
                setTimeout(() => {
                    setactive(true);
                    btnsubmit.current.disabled = false;
                    txtbutton.current.innerText = "Send Message"
                    imgbuttonsubmit.current.style.display = "block"
                }, 3000);
            }
            return
        }
        if (btnsubmit.current){
            setactive(false);
            btnsubmit.current.disabled = true;
            txtbutton.current.innerText = "sending..."
            imgbuttonsubmit.current.style.display = "none"
            btnsubmit.current.focus();

        }
        const msgObj = { "name":name, "email":contact, "msg":message };
         try{
            const res = await fetch ("/api/submit-form", {
                method: "POST",
                headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(msgObj)
            });
            if(!res.ok){
                txtbutton.current.innerText = "An error occured please try again";
                return
            }
            txtbutton.current.innerText = 'Your message has been delivered';
        } catch(err) {
            console.error(err);
            txtbutton.current.innerText = "An error occured please try again";
            alert(err);
        } finally {
        setTimeout(() => {
            if (btnsubmit.current) {
                setactive(true);
                btnsubmit.current.disabled = false;
                btnsubmit.current.blur();
                txtbutton.current.innerText = "Send Message";
                imgbuttonsubmit.current.style.display = "block";
            }
        }, 5000);}
    }
    return(
        <>
        <div id="contact" className=" w-screen mt-1 p-4 grid lg:grid-cols-2">
            <div className=" w-full justify-self-center lg:col-start-1 lg:col-end-2 grid">
                <div className="grid self-start items-start w-full pt-0 p-4">
                    <div className="flex pl-4 justify-self-center font-inter tracking-tight leading-1 lg:justify-self-start justify-center text-center gap-2 md:gap-4 text-green-600 align-middle items-center">
                        <div className=" h-0.5 w-18 lg:w-22 bg-green-600"></div> <p className="w-fit text-base sm:text-lg md:text-xl">CONTACT</p> <div className=" h-0.5 w-18 lg:w-22 bg-green-600"></div>
                    </div>
                    <br />
                    <div className=" grid pl-4 text-left w-full font-int0er mb-2 justify-self-center justify-center">
                        <h2 className=" mt-2 font-inter text-left font-semibold text-3xl sm:text-4xl md:text-5xl"><span className="text-white">Visit The Store <br /> Or Reach Out</span> <span className="text-green-600">Anytime</span></h2>
                        <i className="text-gray-300 w-[90%] wrap-break-word font-extralight mt-4 text-base sm:text-lg md:text-xl">We're here to help! Whether you have a question or just need a recommendation, feel free to reach out.</i>
                    </div>
                    <br /><br />
                    <div className=" w-full p-4 grid">

                        {/* 1st card */}
                        <div className=" relative group mb-2 overflow-hidden h-fit p-2 rounded-lg border-[0.5px] md:border-none border-green-950 flex gap justify-start w-full">
                        <div className=" absolute inset-0 h-[200%] bg-linear-to-l from-green-600/4 via-transparent to-transparent align-middle justify-self-end transition-transform duration-500 ease-in group-hover:scale-110">
                            <img src="/smk.png" loading="lazy" className=" h-full opacity-5" alt="" />
                        </div>
                        <div className=" relative z-10 w-full flex items-center align-middle justify-start p-2">
                                <div className=" m-2 p-4 self-start drop-shadow-md drop-shadow-green-500 rounded-full border border-green-600">
                                    <img src="/whats.svg" className=" h-8" alt="" />
                                </div>
                                <div className=" grid p-2 font-inter items-center self-center text-white">
                                    <p className="text-base sm:text-lg md:text-xl text-white">WHATSAPP</p>
                                    <p className=" text-sm sm:text-base md:text-lg text-green-600"> +1 (555) 123-4567</p>
                                    <br />
                                    <p className="text-gray-400 hidden md:block text-sm sm:text-base md:text-lg">Message us on WhatsApp for quick response</p>
                                </div>
                                <div className="grid justify-self-end ml-auto justify-center align-middle items-center">
                                    <img src="/arr1.png" className="h-10 m-auto self-center" alt="" />
                                </div>
                        </div>
                    </div>

                    {/* 2nd card */}
                    <div className=" relative mt-2 mb-2 group overflow-hidden h-fit p-2 rounded-lg border-[0.5px] md:border-none border-green-950 flex gap justify-start w-full">
                        <div className=" absolute inset-0 h-[200%] bg-linear-to-l from-green-600/4 via-transparent to-transparent align-middle justify-self-end transition-transform duration-500 ease-in group-hover:scale-110">
                            <img src="/smk.png" loading="lazy" className=" h-full opacity-5" alt="" />
                        </div>
                        <div className=" relative z-10 w-full flex items-center align-middle justify-start p-2">
                                <div className=" m-2 p-4 self-start h-fit drop-shadow-md drop-shadow-green-500 rounded-full border border-green-600">
                                    <img src="/phon.svg" className=" h-7" alt="" />
                                </div>
                                <div className=" grid p-2 font-inter items-center self-center text-white">
                                    <p className="text-base sm:text-lg md:text-xl text-white">PHONE</p>
                                    <p className=" text-sm sm:text-base md:text-lg text-green-600"> +1 (555) 123-4567</p>
                                    <br />
                                    <p className="text-gray-400 hidden md:block text-sm sm:text-base md:text-lg">Call us during business hours</p>
                                </div>
                                <div className="grid justify-self-end ml-auto justify-center align-middle items-center">
                                    <img src="/arr1.png" className="h-10 m-auto self-center" alt="" />
                                </div>
                        </div>
                    </div>

                    {/* 3rd card */}
                    <div className=" relative mt-2 mb-2 group overflow-hidden h-fit p-2 rounded-lg border-[0.5px] md:border-none border-green-950 flex gap justify-start w-full">
                        <div className=" absolute inset-0 h-[200%] bg-linear-to-l from-green-600/4 via-transparent to-transparent align-middle justify-self-end transition-transform duration-500 ease-in group-hover:scale-110">
                            <img src="/smk.png" loading="lazy" className=" h-full opacity-5" alt="" />
                        </div>
                        <div className=" relative z-10 w-full flex items-center align-middle justify-start p-2">
                                <div className=" m-2 p-4 self-start drop-shadow-md drop-shadow-green-500 rounded-full border border-green-600">
                                    <img src="loc.png" className=" h-7" alt="" />
                                </div>
                                <div className=" grid p-2 font-inter w-[75%] items-center self-center text-white">
                                    <p className="text-base sm:text-lg md:text-xl text-white">ADDRESS</p>
                                    <br />
                                    <p className="text-gray-400 text-sm sm:text-base md:text-lg wrap-break-word">123 Vape Street, Suite 101 Los Angeles, CA 90001, USA</p>
                                </div>
                                <div className="grid justify-self-end ml-auto justify-center align-middle items-center">
                                    <img src="/arr1.png" className="h-10 m-auto self-center" alt="" />
                                </div>
                        </div>
                    </div>

                    {/* 4th card */}
                    <div className=" relative mt-2 group overflow-hidden h-fit p-2 rounded-lg border-[0.5px] md:border-none border-green-950 flex gap justify-start w-full">
                        <div className=" absolute inset-0 h-[200%] bg-linear-to-l from-green-600/4 via-transparent to-transparent align-middle justify-self-end transition-transform duration-500 ease-in group-hover:scale-110">
                            <img src="/smk.png" loading="lazy" className=" h-full opacity-5" alt="" />
                        </div>
                        <div className=" relative z-10 w-full flex items-center align-middle justify-start p-2">
                                <div className=" m-2 p-3 self-start drop-shadow-md drop-shadow-green-500 rounded-full border border-green-600">
                                    <img src="/clock.svg" className=" h-8" alt="" />
                                </div>
                                <div className=" grid p-2 font-inter items-center self-center text-white">
                                    <p className="text-base sm:text-lg md:text-xl text-white">OPENING HOURS</p>
                                    <p className="text-gray-400 text-sm sm:text-base md:text-lg">Mon-Sat: 10:00 AM - 09:00 PM <br /> Sunday: 11:00 AM - 07:00 PM</p>
                                </div>
                                <div className="grid justify-self-end ml-auto justify-center align-middle items-center">
                                    <img src="/arr1.png" className="h-10 m-auto self-center" alt="" />
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className=" w-full grid lg:col-start-2 lg:col-end-3 p-8">
                <div className=" w-full h-fit grid border-[0.5px] border-green-950 rounded-lg">

                    {/* msg part */}
                    <div className=" relative mt-2 mb-2 group overflow-hidden h-fit p-0 flex gap justify-start w-full">
                        <div className=" absolute inset-0 h-[200%] bg-linear-to-l from-green-600/4 via-transparent to-transparent align-middle justify-self-end transition-transform duration-500 ease-in group-hover:scale-110">
                            <img src="/smk.png" className=" h-full opacity-5" alt="" />
                        </div>
                        <div className=" relative z-10 p-2 w-full bg-linear-to-b from-transparent via-75% to-black flex items-center align-middle justify-start">
                                <div className=" m-2 p-3 self-start drop-shadow-md drop-shadow-green-500 rounded-full border border-green-600">
                                    <img src="/mail.svg" className=" h-7" alt="" />
                                </div>
                                <div className=" grid p-2 w-[75%] font-inter items-center self-center text-white">
                                    <p className="text-base sm:text-lg md:text-xl text-white">Send Us A Message</p>
                                    <p className="text-gray-400 text-sm sm:text-base md:text-lg">Fill out the form and we'll get back to you as soon as possible</p>
                                </div>
                        </div>
                    </div>

                    {/* form section */}
                    <div className=" grid p-4 pt-0 text-sm sm:text-base md:text-lg font-inter">
                        <form className=" p-4 pt-0">
                            <label htmlFor="name" className=" text-base text-white sm:text-lg md:text-xl tracking-tight">Name</label>
                            <div className=" relative mb-4">
                                <img src="/com.png" className=" h-8 absolute left-1 top-1/2 brightness-85 -translate-y-1/2" alt="" />
                                <input type="text" required onChange={(e) => setName(e.target.value)} id="name" className=" w-full border border-green-700 rounded-lg p-1 pl-10 text-gray-300" placeholder="Your Name" />
                            </div>
                            <br />
                            <label htmlFor="contact" className=" text-base text-white sm:text-lg md:text-xl tracking-tight">Phone / Email</label>
                            <div className=" relative mb-4">
                                <img src="/mail-2.svg" className=" h-7 absolute left-3 top-1/2 -translate-y-1/2" alt="" />
                                <input type="text" required id="contact" onChange={(e) => setContact(e.target.value)} className=" w-full border border-green-700 rounded-lg p-1 pl-13 text-gray-300" placeholder="Your phone or email " />
                            </div>
                            <br />
                            <label htmlFor="message"></label>
                            <div className=" relative mb-4">
                                <img src="/pen.png" className=" h-5 absolute left-2 top-4 brightness-85 -translate-y-1/2" alt="" />
                                <textarea name="message" required onChange={(e) => Setmessage(e.target.value)} id="" rows={5} placeholder="Your message" className=" w-full border border-green-600 rounded-lg p-1 pl-9 text-gray-300"></textarea>
                            </div>
                            <button id="btn2" type="submit" ref={btnsubmit} onClick={(e) => {
                                e.preventDefault();
                                handleSubmit(e);
                            }} className={` hover:text-white group w-full rounded-lg bg-green-600 text-black tracking-wide flex justify-between items-center p-2`}> <span ref={txtbutton} className=" font-medium mx-auto">SEND MESSAGE</span> <img src="/arr.png" ref={imgbuttonsubmit} className=" h-10 group-hover:scale-110 group-hover:invert" alt="" /></button>
                        </form>
                    </div>
                </div>
                <br />
                <div className=" w-full relative">
                    <div className=" absolute z-10 left-2 bottom-2 bg-black/30 backdrop-blur-xl p-2 tracking-tight">
                        <span className=" text-base md:text-lg font-medium text-green-600">VAPORO STORE</span> <br /> <span className=" text-sm md:text-base text-white">123 Vape Street, suite 101 <br />Los Angeles, CA 90001 </span>
                    </div>
                    <div className=" overflow-hidden z-0 w-full h-72 rounded-lg border border-green-900">
                        <MapContainer center={position} zoom={25} className=" w-full h-full">
                            <ResizeFix/>
                            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'/>
                            <Marker position={position} icon={myLoc}>
                                <Popup>
                                    <strong>VAPORO STORE</strong>
                                    <br />123 Vape Street, Suite 101<br />Los Angeles, CA 90001
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}