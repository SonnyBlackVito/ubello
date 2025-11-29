import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="h-screen w-full bg-black">
      {/* <h1 className="text-white text-3xl flex justify-center items-center h-full">
        Privacy Policy Page
      </h1> */}
      <iframe src="/UbelloPrivacyPolicy.pdf" className="w-full h-full" />
    </div>
  );
};

export default PrivacyPolicyPage;
