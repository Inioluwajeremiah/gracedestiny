import { useRef } from "react";

const data = [
  {
    title: "AI Training",
    description:
      "We offer a comprehensive AI Certification Training program designed to provide you with the knowledge and practical skills required to succeed in the field of Artificial Intelligence. Our training covers key concepts, tools, and techniques, and prepares you for industry-recognized certification.",
  },
  {
    title: "Additional Benefits",
    description:
      "Gain hands-on practical experience through an industry-relevant curriculum designed to equip you with real-world skills. Learn from expert instructors who are seasoned professionals in the field, and benefit from comprehensive career support and resources. You'll also get access to a thriving network of AI professionals, opening doors to collaboration and opportunity.",
  },
];

const Services = () => {
  const servicesRef = useRef(null);

  return (
    <section
      id="services"
      ref={servicesRef}
      className=" bg-[#F2F2F2] rounded-3xl mt-24 py-20 h-fit "
    >
      <div className="container h-full mx-auto flex flex-col items-center">
        <h2 className="text-center text-4xl mb-14 md:mb-24  mx-auto border-b-[#021343] font-bold">
          Services
        </h2>
        {/* what we offer */}
        <div className="flex flex-col md:flex-row gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[92%]  bg-white rounded-2xl p-10 mx-auto   md:mx-0 md:w-1/2"
            >
              <p className="w-[80%] text-center mx-auto text-xl font-semibold    md:text-3xl md:w-full md:text-left ">
                {item.title}
              </p>
              <p className="w-[80%] text-center tex-sm mt-10 mx-auto    md:w-full md:text-left md:text-2xl ">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-[80%] flex flex-col justify-center items-center mt-16 md:mt-24  ">
          <div className="flex flex-col ">
            {/* right text container */}

            <p className="w-full text-center mx-auto text-xl font-semibold    md:text-3xl md:w-full  ">
              Contact Information
            </p>

            <p className="w-full text-center tex-sm mt-10 mx-auto md:text-2xl ">
              Email: gracedestinyacademy25@gmail.com
            </p>
            <p className="w-full text-center tex-sm mt-4 mx-auto md:text-2xl ">
              Contact: +2347033192673
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
