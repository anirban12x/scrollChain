// import { BotMessageSquare } from "lucide-react";
// import { BatteryCharging } from "lucide-react";
// import { Fingerprint } from "lucide-react";
// import { ShieldHalf } from "lucide-react";
// import { PlugZap } from "lucide-react";
// import { GlobeLock } from "lucide-react";

// import user1 from "../assets/bg1.png";
// import user2 from "../assets/bg1.png";
// import user3 from "../assets/bg1.png";
// import user4 from "../assets/bg1.png";
// import user5 from "../assets/bg1.png";
// import user6 from "../assets/bg1.png";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


// import Navbar from "./Navbar";
// import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Workflow from "./Workflow";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";



export default function ConnectWallet(props) {
  useEffect(()=>{
    AOS.init({
      duration : 2000
    });
  });
  return (<>   
        <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
       <b>Art</b>
        <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
          {" "}
        <b>Chain</b>
        </span>
      </h1>
      <p className="mt-10 text-3xl text-center text-white max-w-4xl">
        Reviving India's Ancient Art and Textile Heritage
      </p>
      {/* <div className="flex justify-center my-10">
      <div className="walletButtonContainer">
                <button className='walletButton duration-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800' onClick={props.connectMetamask}>
                    Connect to Metamask
                </button>
            </div>
      </div> */}

      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md" data-aos="fade-right" data-aos-offset="300"
          data-aos-easing="ease-in-sine" onClick={props.connectMetamask}>
        
          Donate the Artist Community
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border" data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          Get Original & Verified Artworks
        </a>
      </div>

      

        <div className="flex mt-10 justify-center" data-aos="fade-up">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 mr-10"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 ml-10"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        {/* <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a> */}


      </div>
      

      {/* <Navbar /> */}
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* <HeroSection /> */}
        <FeatureSection />
        <Workflow />
        {/* <Pricing /> */}
        <Testimonials />
      </div>

</>
  );


}





