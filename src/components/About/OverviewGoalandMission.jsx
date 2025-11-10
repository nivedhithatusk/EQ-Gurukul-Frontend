import React, { useEffect, useState } from "react";
import icon_goal from "@/assets/about/icons/icon_goal.svg";
import icon_mission from "@/assets/about/icons/icon_mission.svg";
import Image from "next/image";
import about_trust_banner from "@/assets/about/about_trust_banner.png";

const GoalandMission = () => {
  const CountUp = ({ targetValue }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let countInterval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= targetValue) {
            clearInterval(countInterval);
            return targetValue;
          }
          return prevCount + Math.ceil(targetValue / 100); 
        });
      }, 25); 

      return () => clearInterval(countInterval);
    }, [targetValue]);

    return <span className="count-number text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{count}+</span>;
  };

  return (
    <>
      <section className="goalandmission-section">
        <div className="goalandmission-container py-16 px-4 md:px-8 lg:px-30">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative py-16 goal-card col-span-1 bg-white border-2 border-[#5885DD] rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col min-h-[14rem]">
                <div className="flex items-center gap-4">
                  <span>
                    <Image src={icon_goal} alt="Goals" width={75} height={75} />
                  </span>
                  <h2 className="text-5xl font-bold text-[#06409B]">
                    Our Goal
                  </h2>
                </div>
                <p className="text-lg pt-4">
                  To improve the quality of life for our students and their
                  families by imparting the right education through a continuous
                  process of nurturing each child's educational journey from
                  kindergarten and providing the necessary support and guidance
                  at every milestone until a Gurukul student is job-ready and
                  well-settled in their dream career.
                </p>
              </div>
              <div className="relative py-16 mission-card col-span-1 bg-white border-2 border-[#5885DD] rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col min-h-[14rem]">
                <div className="flex items-center gap-4">
                  <span>
                    <Image
                      src={icon_mission}
                      alt="mission"
                      width={75}
                      height={75}
                    />
                  </span>

                  <h2 className="text-5xl font-bold text-[#06409B]">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg pt-4">
                  Nurture and empower children by providing holistic education
                  to transform them into responsible individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="goalandmission-section-2">
          <div className="py-16 px-4 md:px-8 lg:px-30">
            <div className="container mx-auto">
              <Image
                src={about_trust_banner}
                alt="goal_banner"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="statistics px-4 md:px-8 lg:px-30">
          <div className="grid grid-cols-4 gap-6">
            <div className="stat-item text-center">
              <CountUp targetValue={13} />
              <p className="count-number-text text-base sm:text-lg md:text-xl pt-2">Total Years</p>
            </div>
            <div className="stat-item text-center">
              <CountUp targetValue={8} />
              <p className="count-number-text text-base sm:text-lg md:text-xl pt-2">Schools</p>
            </div>
            <div className="stat-item text-center">
              <CountUp targetValue={7626}  />
              <p className="count-number-text text-base sm:text-lg md:text-xl pt-2">Students</p>
            </div>
            <div className="stat-item text-center">
              <CountUp targetValue={439} />
              <p className="count-number-text text-base sm:text-lg md:text-xl pt-2">Educators</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoalandMission;
