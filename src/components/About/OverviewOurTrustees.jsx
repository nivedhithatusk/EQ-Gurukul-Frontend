import React from "react";
import Image from "next/image";
import trustee1 from "@/assets/about/trustees/vasudevan.png";
import trustee2 from "@/assets/about/trustees/gariyali.png";
import trustee3 from "@/assets/about/trustees/sabitha.png";
import trustee4 from "@/assets/about/trustees/anoopjaiswal.png";
import trustee5 from "@/assets/about/trustees/jayashreenambiar.png";

const OurTrustees = () => {
  function ClickHandler(id) {
    if (typeof window !== "undefined") {
      window.location.href = `#aboutus`;
    }
  }
  return (
    <section className="py-16 px-4 md:px-8 lg:px-30">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-[#06409B] text-center">
          Our Trustees
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-16 py-16  text-[#242424]">
        <div
          className="trustee-card text-center justify-center items-center"
          id="vasudevan"
        >
          <Image
            src={trustee1}
            alt="Trustee 1"
            width={250}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-xl font-semibold text-[#5885DD] pt-4 ">
            Mr. P N Vasudevan
          </h3>
          <p className="text-xl italic font-medium pt-2">Trustee</p>
          <button
            onClick={() => ClickHandler("vasudevan")}
            className="cursor-pointer text-lg font-medium py-2 rounded-md underline decoration-solid decoration-auto decoration-underline-offset-auto"
          >
            Know more
          </button>
        </div>
        <div
          className="trustee-card text-center justify-center items-center"
          id="gariyali"
        >
          <Image
            src={trustee2}
            alt="Trustee 1"
            width={250}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-xl font-semibold text-[#5885DD] pt-4 ">
            Dr. C K Gariyali
          </h3>
          <p className="text-xl italic font-medium pt-2">Trustee</p>
          <button
            onClick={() => ClickHandler("gariyali")}
            className="cursor-pointer text-lg font-medium py-2 rounded-md underline decoration-solid decoration-auto decoration-underline-offset-auto"
          >
            Know more
          </button>
        </div>
        <div
          className="trustee-card text-center justify-center items-center"
          id="sabitha"
        >
          <Image
            src={trustee3}
            alt="Trustee 1"
            width={250}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-xl font-semibold text-[#5885DD] pt-4 ">
            Mrs. D Sabitha
          </h3>
          <p className="text-xl italic font-medium pt-2">Trustee</p>
          <button
            onClick={() => ClickHandler("sabitha")}
            className="cursor-pointer text-lg font-medium py-2 rounded-md underline decoration-solid decoration-auto decoration-underline-offset-auto"
          >
            Know more
          </button>
        </div>
        <div
          className="trustee-card text-center justify-center items-center"
          id="anoopjaiswal"
        >
          <Image
            src={trustee4}
            alt="Trustee 1"
            width={250}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-xl font-semibold text-[#5885DD] pt-4 ">
            Mr. Anoop Jaiswal
          </h3>
          <p className="text-xl italic font-medium pt-2">Trustee</p>
          <button
            onClick={() => ClickHandler("anoopjaiswal")}
            className="cursor-pointer text-lg font-medium py-2 rounded-md underline decoration-solid decoration-auto decoration-underline-offset-auto"
          >
            Know more
          </button>
        </div>
        <div className="trustee-card text-center justify-center items-center">
          <Image
            src={trustee5}
            alt="Trustee 1"
            width={250}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-xl font-semibold text-[#5885DD] pt-4 ">
            Ms. Jayashree Nambiar
          </h3>
          <p className="text-xl italic font-medium pt-2">Trustee</p>
          <button
            onClick={() => ClickHandler("jayashreenambiar")}
            className="cursor-pointer text-lg font-medium py-2 rounded-md underline decoration-solid decoration-auto decoration-underline-offset-auto"
          >
            Know more
          </button>
        </div>
        <div
          className="trustee-card text-center justify-center items-center"
          id="trustee6"
        ></div>
      </div>
    </section>
  );
};

export default OurTrustees;
