import Image from "next/image";

// Constants
const GRADIENTS = {
  primaryBlob: `radial-gradient(ellipse at center,
    #FF00E5 0%, #FF00E5 15%, #FF00E5 25%,
    #3C0A68 35%, #3C0A68 50%,
    #4500BC 60%, #4500BC 100%)`,
  secondaryBlob: `radial-gradient(ellipse at center,
    #7F62FF 0%, #7F62FF 80%,
    #ffffff 90%, #ffffff 100%)`,
  titleGradient: `linear-gradient(45deg,
    #ECBFBF 18.02%, #ECBFBF 65.83%,
    #5C24FF 85.83%, #8059c3 100%)`,
} as const;

// Sub-components
const GradientBlob = ({
  className,
  style,
}: {
  className: string;
  style?: React.CSSProperties;
}) => <div className={className} style={style} aria-hidden="true" />;

export const DownloadButton = () => (
  <div
    className=" 
  w-full sm:w-auto
   p-0.5 rounded-xl
  bg-[linear-gradient(90deg,#9DBFFF,#FFB7FF)]">
    <button
      className="flex items-center justify-center gap-2.5 sm:gap-3 
    px-6 py-3.5 sm:px-8 sm:py-4 
    rounded-xl 
    bg-black  
    transition-all duration-300 
    group w-full sm:w-auto
    active:scale-95 hover:scale-98
    min-h-12]
   
    "
      aria-label="Download Ubello App from App Store or Google Play">
      {/* Apple Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="30"
        viewBox="0 0 24 30"
        fill="none"
        className="w-4 h-5 sm:w-5 sm:h-6 shrink-0"
        aria-hidden="true">
        <path
          d="M20.0454 15.7487C20.0747 13.4627 21.2977 11.2995 23.2378 10.1021C22.0139 8.34736 19.9639 7.23478 17.8311 7.16779C15.5563 6.92809 13.3509 8.53432 12.1917 8.53432C11.0101 8.53432 9.22533 7.19159 7.30342 7.23129C4.79831 7.31254 2.46291 8.74237 1.24411 10.9411C-1.37581 15.4948 0.578418 22.1872 3.08808 25.868C4.34372 27.6704 5.81121 29.6838 7.73138 29.6124C9.61038 29.5341 10.3122 28.4095 12.5803 28.4095C14.8273 28.4095 15.4857 29.6124 17.4449 29.567C19.4611 29.5341 20.7315 27.7566 21.9431 25.9371C22.8452 24.6528 23.5394 23.2334 24 21.7314C21.6305 20.7253 20.0482 18.3315 20.0454 15.7487Z"
          fill="white"
        />
        <path
          d="M16.3449 4.74708C17.4443 3.4222 17.9859 1.7193 17.8547 0C16.1752 0.177094 14.6237 0.982946 13.5095 2.25699C12.42 3.5018 11.853 5.17474 11.9602 6.82832C13.6403 6.84569 15.2921 6.06168 16.3449 4.74708Z"
          fill="white"
        />
      </svg>

      {/* Google Play Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="27"
        viewBox="0 0 24 27"
        fill="none"
        className="w-4 h-5 sm:w-5 sm:h-7 shrink-0"
        aria-hidden="true">
        <g filter="url(#filter0_ii_6095_16171)">
          <path
            d="M0.481259 0.414493C0.178784 0.735888 -4.44094e-07 1.23468 -4.44094e-07 1.8806V24.9585C-4.44094e-07 25.6054 0.178784 26.1032 0.481259 26.4246L0.558176 26.4997L13.4357 13.5719V13.4195V13.2672L0.558176 0.338318L0.481259 0.414493Z"
            fill="url(#paint0_linear_6095_16171)"
          />
          <path
            d="M17.7274 17.8823L13.4355 13.5716V13.4192V13.2669L17.7284 8.95728L17.8251 9.01258L22.911 11.9135C24.3631 12.742 24.3631 14.0975 22.911 14.9271L17.8251 17.828L17.7274 17.8823Z"
            fill="url(#paint1_linear_6095_16171)"
          />
          <g filter="url(#filter1_i_6095_16171)">
            <path
              d="M17.8253 17.8268L13.4347 13.4191L0.481294 26.4242C0.959433 26.9334 1.75044 26.996 2.64124 26.4889L17.8253 17.8268Z"
              fill="url(#paint2_linear_6095_16171)"
            />
          </g>
          <path
            d="M17.8253 9.01167L2.64124 0.350692C1.75044 -0.157489 0.959433 -0.0938354 0.481294 0.415388L13.4358 13.4204L17.8253 9.01167Z"
            fill="url(#paint3_linear_6095_16171)"
          />
        </g>
        <defs>
          <filter
            id="filter0_ii_6095_16171"
            x="0"
            y="0"
            width="24.0001"
            height="26.8392"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.156524" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_6095_16171"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.156524" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_6095_16171"
              result="effect2_innerShadow_6095_16171"
            />
          </filter>
          <filter
            id="filter1_i_6095_16171"
            x="0.481293"
            y="13.4191"
            width="17.344"
            height="13.42"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.156524" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_6095_16171"
            />
          </filter>
          <linearGradient
            id="paint0_linear_6095_16171"
            x1="12.2942"
            y1="1.63642"
            x2="-5.21752"
            y2="19.0801"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#00A0FF" />
            <stop offset="0.0066" stopColor="#00A1FF" />
            <stop offset="0.2601" stopColor="#00BEFF" />
            <stop offset="0.5122" stopColor="#00D2FF" />
            <stop offset="0.7604" stopColor="#00DFFF" />
            <stop offset="1" stopColor="#00E3FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_6095_16171"
            x1="24.8012"
            y1="13.4192"
            x2="-0.348807"
            y2="13.4192"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE000" />
            <stop offset="0.4087" stopColor="#FFBD00" />
            <stop offset="0.7754" stopColor="#FFA500" />
            <stop offset="1" stopColor="#FF9C00" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_6095_16171"
            x1="15.4409"
            y1="15.8128"
            x2="-8.30718"
            y2="39.4686"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_6095_16171"
            x1="-2.78108"
            y1="-7.267"
            x2="7.82312"
            y2="3.29596"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#32A071" />
            <stop offset="0.0685" stopColor="#2DA771" />
            <stop offset="0.4762" stopColor="#15CF74" />
            <stop offset="0.8009" stopColor="#06E775" />
            <stop offset="1" stopColor="#00F076" />
          </linearGradient>
        </defs>
      </svg>

      <span className="text-white font-medium text-sm sm:text-base whitespace-nowrap">
        Download Ubello App
      </span>
    </button>
  </div>
);

export default function HeroSection() {
  return (
    <section
      className="relative bg-ubello-dark overflow-hidden 
    pt-20 pb-16 
    sm:pt-24 sm:pb-20 
    md:pt-28 md:pb-24 
    lg:pt-32 lg:pb-32 
    px-4 sm:px-6 lg:px-8">
      {/* Background gradient blobs - Responsive positioning */}
      <GradientBlob
        className="absolute 
        top-0 left-0 
        w-[600px] h-[500px] 
        sm:w-[800px] sm:h-[650px] 
        lg:w-[1000px] lg:h-[800px] 
        lg:left-16
        rounded-full opacity-30 sm:opacity-40 
        -translate-y-1/2 -translate-x-1/2 
        blur-[60px] sm:blur-[80px]"
        style={{
          background: GRADIENTS.primaryBlob,
        }}
      />

      <GradientBlob
        className="absolute 
        top-[10%] right-0
        sm:top-[15%] sm:right-[5%]
        lg:top-[20%] lg:right-1/5 
        w-[400px] h-[400px] 
        sm:w-[500px] sm:h-[500px] 
        lg:w-[600px] lg:h-[600px] 
        rounded-full 
        translate-x-1/4 opacity-30 sm:opacity-40 
        blur-[80px] sm:blur-[100px] lg:blur-[120px]"
        style={{
          background: GRADIENTS.secondaryBlob,
        }}
      />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
      grid grid-cols-1 lg:grid-cols-2 
      gap-10 lg:gap-12 
      items-center
    ">
          {/* LEFT CONTENT */}
          <div className="mx-auto text-center z-10">
            <div className="space-y-6 sm:space-y-8">
              {/* TITLE */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="font-roboto font-normal">
                  {/* SECURE */}
                  <span
                    className="
                block mx-auto text-center
                text-4xl sm:text-6xl md:text-7xl lg:text-8xl
                font-normal leading-tight lg:leading-normal
                tracking-[0.8px] sm:tracking-[1.2px] lg:tracking-[1.6px]
                bg-clip-text text-transparent
              "
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg,#FF3BFF 0%,#ECBFBF 38%,#5C24FF 75%,#D94FD5 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                    SECURE
                  </span>

                  {/* YOUR ASSETS */}
                  <span
                    className="
                block mx-auto text-center 
                text-3xl sm:text-5xl md:text-6xl lg:text-7xl
                font-semibold
                text-white
                tracking-wide
              ">
                    YOUR ASSETS
                  </span>
                </h1>

                {/* DESCRIPTION */}
                <p
                  className="
              text-white/70 
              text-sm sm:text-base md:text-lg 
              leading-relaxed 
              max-w-md sm:max-w-lg 
              mx-auto text-center 
              px-2
            ">
                  Store & Manage your crypto assets in a truly non-custodial
                  wallet that belongs to you only.
                </p>
              </div>

              {/* CTA BUTTON */}
              <div className="flex justify-center">
                <div className="w-full sm:w-auto max-w-sm sm:max-w-none">
                  <DownloadButton />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE (HERO MOCKUP) */}
          <div
            className="
        relative 
        h-64 sm:h-80 md:h-[420px] lg:h-[530px] xl:h-[600px]
        flex items-center justify-center 
        order-1 lg:order-2
      ">
            <div className="relative w-full h-full max-w-[360px] sm:max-w-md lg:max-w-none">
              <Image
                src="/images/hero_banner_section.png"
                alt="Ubello wallet interface"
                width={1616}
                height={3232}
                priority
                quality={100}
                className="
            w-full h-full object-contain 
            drop-shadow-2xl
            scale-90 sm:scale-95 lg:scale-100
          "
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
