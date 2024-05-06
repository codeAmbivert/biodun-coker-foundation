"use client";
import NavBar from "./components/NavBar";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [imgSrc, setImgSrc] = useState("/img3.jpg");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // useEffect(() => {
  //   const allImg = ["/img3.jpg", "/img3.jpg", "/img3.jpg"];
  //   let count = 0;
  //   const interval = setInterval(() => {
  //     if (count < 2) {
  //       count += 1;
  //     } else count = 0;

  //     setImgSrc(allImg[count]);
  //     setIsImageLoaded(false); // Reset image loaded state for smooth transition
  //   }, 5000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  console.log(currentScroll);

  return (
    <main className={`${poppins.className} w-screen overflow-hidden bg-[#bbbbc9] `}>
      <NavBar setCurrentScroll={setCurrentScroll} />
      <div id="home" className="h-screen w-full bg-[#bbbbc9] relative mt-24">
        <div className="max-w-7xl mx-auto p-5 md:p-10 h-full flex flex-col justify-center gap-5 text-white relative z-10">
          <p className="text-lg font-medium text-[#282d55]">Let&apos;s Stand Together</p>
          <p className="text-6xl max-w-3xl font-bold text-[#282d55]">
            Improving communities and imparting change
          </p>
          <p className="text-lg font-medium max-w-2xl text-[#282d55]">
            Let&apos;s create an avenue to improve the quality of life in our
            community, render change and foster unity
          </p>
        </div>
        <div
          className={`absolute right-0 bottom-0 transition-opacity duration-500 ${
            isImageLoaded && currentScroll <= 400 ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={imgSrc}
            alt="biodun coker"
            width={600}
            height={700}
            className="transition-opacity duration-1000"
            onLoad={handleImageLoad}
          />
          {/* <div className="h-full w-full bg-white bg-opacity-100 z-20" /> */}
        </div>
      </div>
      <div id="about" className="w-full text-gray-500 bg-white">
        <div className="max-w-7xl mx-auto p-5 md:px-10 py-32">
          <h2
            className={`text-center text-[#39ADF8] transition-all transform duration-500 ${
              currentScroll >= 400
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-40"
            }`}
          >
            About{" "}
            <span className="text-[#1F7EC9] text-3xl font-medium">
              Biodun Coker
            </span>
          </h2>
          <div className={`mt-10 flex flex-col gap-10`}>
            <div
              className={`transition-all duration-500 sm:flex gap-5 items-start  ${
                currentScroll >= 400
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-40"
              }`}
            >
              <Image
                src="/igbonla_logo.jpg"
                alt="igbonla"
                width={100}
                height={100}
                className="float-left sm:float-none mr-3"
              />
              <p className="leading-8">
                Biodun Coker is a vision-driven bonified Nigerian who’s
                constantly seizing the opportunity to serve communities and
                positively impact lives. His early life began in Olowogbowo Area
                of Lagos Island, Lagos State, where he was raised within the
                four walls of his biological parents’ home. Fortunately,
                Biodun’s parents knew how essential it was for a child to
                receive a sound education from an early age. He was sent to
                Flora Nursery and Primary School, and then to Lagos State Model
                College, Igbonla.{" "}
              </p>
            </div>

            <div
              className={`transition-all duration-500 sm:flex sm:flex-row-reverse gap-5 items-start ${
                currentScroll >= 400
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-40"
              }`}
            >
              <Image
                src="/oxford_brookes.png"
                alt="oxford brookes"
                width={100}
                height={100}
                className="float-right sm:float-none"
              />
              <p className="leading-8">
                Upon the completion of his secondary schooling, Biodun furthered
                his education as he got admitted to Lagos State University,
                where he successfully bagged a BSc in Economics. Interestingly,
                he was willing to broaden his horizons even after this
                milestone. This impelled him to earn another BSc in Applied
                Accounting from Oxford Brookes University.
              </p>
            </div>

            <div
              className={`transition-all duration-500 sm:flex gap-5 items-start ${
                currentScroll >= 400
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-40"
              }`}
            >
              <Image
                src="/fruition.jpeg"
                alt="fruition"
                width={100}
                height={100}
                className="float-left sm:float-none mr-3"
              />
              <p className="leading-8">
                As an accomplished chartered accountant, Biodun Coker is a
                Fellow member of Association of Chartered Certified Accountants
                (ACCA) and also a member of Institute of Financial Accountants
                (IFA). Aside from his thriving career in accounting, he has also
                carved a brilliant entrepreneurial trajectory by establishing
                two businesses. He’s the founder and director of Fruition
                Consultant Limited and Fruition Outsourcing Limited.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="leadership" className="text-white bg-blue-500">
        <h2 className="text-center text-3xl font-medium">Exceptional Leader</h2>
      </div>
    </main>
  );
}
