import Image from "next/image";
import React from "react";

const AboutEquitasGurukul = ({
  id,
  title,
  image,
  imageAlt,
  steps,
}) => {
  return (
    <>
      <section className="aboutgurukul-container" id={id}>
        <div className=" py-16 px-4 md:px-8 lg:px-30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="w-full">
                <h2 className="text-5xl font-bold text-[#00488B]">{title}</h2>
                <div className="w-full pt-12">
                  <div className="list-disc list-inside">
                    {steps.map((step, index) => (
                      <div
                        key={index}
                        className="text-lg p-4 rounded-md mb-4"
                        style={{
                          borderTop: `0.5px solid ${step.color}`,
                          borderRight: `0.5px solid ${step.color}`,
                          borderBottom: `0.5px solid ${step.color}`,
                          borderLeft: `3px solid ${step.color}`,
                          background:
                            "linear-gradient(90deg, #F6F6FE 0%, rgba(255, 255, 255, 0.10) 100%)",
                        }}
                      >
                        {step.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full h-30"></div>
                <Image
                  src={image}
                  alt={imageAlt}
                  width={1000}
                  height={1000}
                  className="w-full h-[600px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutEquitasGurukul;
