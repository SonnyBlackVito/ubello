import React from "react";

const TermsOfUsePage = () => {
  return (
    <div className="h-screen w-full bg-black">
      {/* <h1 className="text-white text-3xl flex justify-center items-center h-full">
        Terms of Use Page
      </h1> */}
      <iframe src="/UbelloTermsofUse.pdf" className="w-full h-full" />
    </div>
  );
};

export default TermsOfUsePage;
