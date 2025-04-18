import { useRef } from "react";
import hero from "/hero.jpeg";

const HeroSection = () => {
  const heroSectionRef = useRef(null);

  return (
    <section
      id="heroSection"
      ref={heroSectionRef}
      className={`bg-[#F2F2F2] rounded-3xl mt-24 py-20 h-fit `}
    >
      <div className="container h-full mx-auto flex flex-col-reverse md:flex-row justify-center md:justify-between items-center ">
        <div className=" h-full md:w-1/2 flex flex-col items-center justify-center md:justify-start md:items-start ">
          <p className="w-[80%] text-black text-center mt-10 mx-auto text-2xl font-semibold     md:text-4xl md:leading-[60px] md:w-full md:text-left md:mt-0    lg:text-6xl lg:leading-[80px] ">
            Empowering Futures with AI Excellence
            <span className="text-primaryColor"></span>
          </p>
          <p className="w-[80%] text-center mt-10 mx-auto    md:w-full md:text-left md:text-2xl   lg:mt-16">
            Unlock Your Potential with AI Certification Gain in-demand skills
            and become a certified AI professional
          </p>

          {/* <button className="bg-linear-[135deg, #2B2660,#594EC6] text-white rounded-full px-6 py-4 mt-10   lg:mt-16">
            Try us out now!
          </button> */}
        </div>
        <div className="h-1/2 w-full md:h-full md:w-1/2 flex justify-center items-center ">
          <img
            src={hero}
            alt=""
            className=" w-[80%] object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
