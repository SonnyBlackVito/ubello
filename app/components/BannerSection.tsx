import Image from "next/image";
import { DownloadButton } from "./HeroSection";

export default function BannerSection() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/bannner_.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        // backgroundSize: "50%",
        backgroundPosition: "center",
      }}
      className="relative w-full h-screen bg-ubello-dark overflow-hidden">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2
            className="
              font-inter 
              font-medium 
              tracking-wide 
              mb-12
              text-center
              leading-[150%]
              text-[32px]
              sm:text-[32px]
              lg:text-[32px]
              font-variant-oldstyle-nums 
              font-variant-proportional-nums
            "
            style={{
              background: "linear-gradient(90deg, #9DBFFF 0%, #FFA2A2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px black",
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
            }}>
            Permissionless & Borderlesstype
            <br />
            <span className="text-white" style={{ WebkitTextStroke: "0" }}>
              Live the future today
            </span>
          </h2>
        </div>
        <div>
          <DownloadButton />
        </div>
      </div>
    </section>
  );
}
