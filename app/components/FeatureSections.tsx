import Image from "next/image";

export function NonCustodialSection() {
  return (
    <section
      style={{
        background:
          "radial-gradient(125% 125% at 50% 90%, #fff 40%, #CAACFF 100%)",
      }}
      className="w-full py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-linear-to-br from-magenta-500/20 via-purple-800/20 to-blue-700/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-3xl lg:text-7xl font-bold text-ubello-purple">
              Non-custodial
            </h2>
            <p className="text-3xl lg:text-3xl sm:text-xl text-gray-700 leading-relaxed max-w-xl">
              Users retain full control of their assets at all times, ensuring
              maximum security and true ownership.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/non-custodial_section_1.png"
              alt="Non-custodial wallet"
              width={2000}
              height={2000}
              className="w-full h-auto object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function PaymentServicesSection() {
  return (
    <section
      className="
      w-full 
      min-h-[760px] 
      pt-16 sm:pt-24 lg:pt-32 
      pb-0 
      px-4 sm:px-6 lg:px-8 
      bg-[#F0EBFF] 
      relative 
      overflow-hidden
    ">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div
          className="absolute top-1/2 left-0 w-[400px] sm:w-[500px] lg:w-[600px] 
          h-[400px] sm:h-[500px] lg:h-[600px] 
          bg-linear-to-tl from-purple-500/30 via-purple-600/30 to-pink-500/30 
          rounded-full blur-3xl translate-x-1/4 -translate-y-1/2"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20
            items-center lg:items-start">
          {/* IMAGE AREA */}
          <div className="flex justify-center order-2 lg:order-1 relative">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Floating Images – Responsive Positions */}
              <Image
                src="/images/3.png"
                alt="Coins"
                width={170}
                height={150}
                className="
    hidden sm:block
    absolute w-[150px] lg:w-[170px]
    top-[440px] lg:top-[658px]
    -right-10 lg:-right-20 
    z-30
  "
              />

              <Image
                src="/images/2.png"
                alt="Card small"
                width={142}
                height={100}
                className="
    hidden sm:block
    absolute w-[120px] lg:w-[142px]
    top-[300px] lg:top-[400px]
    -left-3 lg:-left-5
    z-20
  "
              />

              <Image
                src="/images/1.png"
                alt="Card small"
                width={142}
                height={100}
                className="
    hidden sm:block
    absolute w-[120px] lg:w-[142px]
    top-[200px] lg:top-[250px]
    -left-14 lg:-left-20
    z-30
  "
              />

              <Image
                src="/images/4.png"
                alt="Card mid"
                width={142}
                height={120}
                className="
    hidden sm:block
    absolute w-[130px] lg:w-[142px]
    -top-16 lg:-top-20
    left-36 lg:left-44
    z-30
  "
              />

              <Image
                src="/images/5.png"
                alt="Card big"
                width={228}
                height={201}
                className="
    hidden sm:block
    absolute w-[200px] lg:w-[228px]
    -top-32 lg:-top-40
    left-48 lg:left-64
    z-30
  "
              />
              {/* PHONE */}
              <Image
                src="/images/phone_home.png"
                alt="Payment services"
                width={500}
                height={850}
                className="
                  relative 
                  w-[260px] sm:w-[350px] md:w-[420px] lg:w-[750px]
                  h-auto lg:h-[700px]
                  drop-shadow-2xl 
                  z-20 
                  mx-auto
                "
              />
            </div>
          </div>

          {/* TEXT */}
          <div
            className="
            space-y-6 sm:space-y-8 
            order-1 lg:order-2 
            max-w-xl 
            text-center lg:text-left z-10
          ">
            <h2
              className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-bold text-ubello-purple leading-tight
            ">
              Convenient payment services
            </h2>

            <p
              className="
              text-base sm:text-lg md:text-xl lg:text-2xl 
              text-ubello-dark leading-relaxed 
              max-w-xl mx-auto lg:mx-0
            ">
              Easily access essential services like eSIM, mobile data plans,
              hotel bookings, and more—right inside the app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WatchVideosSection() {
  return (
    <section
      className="
        w-full 
        py-14 sm:py-20 lg:py-32 
        px-4 sm:px-6 lg:px-8 
        bg-ubello-light-purple-2 
        relative overflow-hidden
      ">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div
          className="
            absolute 
            top-1/2 right-0 
            w-[220px] h-[220px] 
            sm:w-[300px] sm:h-[300px]
            lg:w-[420px] lg:h-[420px]
            bg-linear-to-tl 
            from-magenta-500/20 
            via-purple-800/20 
            to-blue-700/20 
            rounded-full blur-3xl 
            translate-x-1/4 -translate-y-1/2
          "
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* TEXT BLOCK */}
          <div className="space-y-5 sm:space-y-7 text-center lg:text-left">
            {/* 🔥 Font nhỏ hơn trên mobile */}
            <h2
              className="
                text-2xl 
                sm:text-4xl 
                md:text-5xl 
                lg:text-6xl 
                xl:text-7xl 
                font-roboto font-bold 
                text-ubello-purple 
                leading-tight
              ">
              Watch videos to earn rewards
            </h2>

            <p
              className="
                text-sm
                sm:text-base
                md:text-lg 
                lg:text-xl 
                text-gray-700 
                leading-relaxed 
                max-w-md mx-auto lg:mx-0
              ">
              Engage with content and receive attractive rewards for every video
              you watch.
            </p>
          </div>

          {/* IMAGE BLOCK */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/watch_video.png"
              alt="Watch videos"
              width={2000}
              height={2000}
              className="
                w-[230px] 
                sm:w-[330px] 
                md:w-[420px] 
                lg:w-[520px] 
                xl:w-[600px]
                h-auto 
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function EarnRewardsSection() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/background_earn.png')",
        backgroundSize: "cover",
      }}
      className="w-full  px-4 sm:px-6 lg:px-8  relative overflow-hidden">
      {" "}
      <div className="relative max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="">
            <Image
              src="/images/earn_rewards.png"
              alt="Earn rewards"
              width={2000}
              height={760}
              className="w-full h-[760px] object-contain"
            />
          </div>
          <div className="space-y-6 mx-auto text-center order-1 lg:order-2">
            <h2 className="text-5xl sm:text-4xl lg:text-[44px] max-w-2xl  font-roboto font-bold text-ubello-purple">
              Earn rewards through in-app activities
            </h2>
            <p className="text-4xl text-left sm:text-xl lg:text-[24px] text-gray-700 leading-relaxed max-w-2xl">
              Get incentives from various actions such as staking, earning
              programs, and self-managed transfers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
