import Image from "next/image";
import { DownloadButton } from "./HeroSection";

export default function BannerSection() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/bannner_.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full h-screen bg-ubello-dark px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      <div className="flex flex-col items-center justify-center min-h-screen w-full  lg:ml-44 mx-auto max-w-7xl">
        {/* Text Container */}
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 z-10 text-center lg:text-right lg:ml-auto lg:max-w-4xl xl:max-w-5xl">
          <h2
            className="
              font-inter 
              font-medium 
              tracking-wide 
              mb-8
              sm:mb-10
              md:mb-12
              leading-[150%]
              text-[28px]
              xs:text-[32px]
              sm:text-[36px]
              md:text-[40px]
              lg:text-[44px]
              xl:text-[48px]
            ">
            <div
              className="text-center lg:text-center"
              style={{
                background: "linear-gradient(90deg, #9DBFFF 0%, #FFA2A2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: "1px black",
                textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
              }}>
              Permissionless & Borderless
              <br />
              Live the future today
            </div>
          </h2>
        </div>

        {/* Button Container */}
        <div className="relative z-10 flex justify-center w-full lg:max-w-4xl xl:max-w-5xl lg:ml-auto">
          <DownloadButton />
        </div>
      </div>
    </section>
  );
}
