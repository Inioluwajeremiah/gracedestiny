import { useRef } from "react";
import aboutUs from "/aboutus.jpeg";

const AboutUs = () => {
  const aboutUsRef = useRef(null);
  return (
    <section
      id="aboutUs"
      ref={aboutUsRef}
      className=" bg-[#F2F2F2] rounded-3xl mt-24 py-20 h-fit"
    >
      <div className="container h-full mx-auto flex flex-col  items-center">
        <h2 className="text-center text-4xl mb-14 md:mb-24 mx-auto border-b-[#021343] font-bold">
          About Us
        </h2>

        <div className=" flex flex-col md:flex-row justify-center items-center   md:justify-between ">
          <div className="flex flex-col  md:flex-row">
            {/* image container */}
            <div className="h-1/2 w-full md:h-full md:w-1/2 flex justify-center items-center ">
              <img
                src={aboutUs}
                alt="About us image"
                className=" w-[80%] md:w-[80%] object-contain rounded-2xl"
              />
            </div>

            {/* right text container */}
            <div className="h-full md:w-1/2  flex flex-col items-center justify-center md:justify-start md:items-start">
              <p className="w-[80%] text-center tex-sm mt-10 mx-auto    md:w-full md:text-left md:mt-16 md:text-2xl ">
                Grace Destiny Academy is a subsidiary of Grace Destiny Moulding
                Int'l (RC2438266), a leading institution dedicated to fostering
                innovation and excellence in technology education. We are
                committed to providing high-quality training and certification
                programs that equip individuals with the skills needed to thrive
                in the rapidly evolving world of Artificial Intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
