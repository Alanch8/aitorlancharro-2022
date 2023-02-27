import React from "react";
import Image from "next/image";
import brand from "../../public/images/footer-brand-logo.svg";

export const FooterSection = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center align-middle footer-section pt-10"
    >
      <div className="p-5">
        <Image src={brand} width={150} alt="brand" className=""></Image>
      </div>
      <p className="text-sm text-slate-200 opacity-70 pb-1">
        Copyright © 2023 Aitor Lancharro
      </p>
      <p className="text-sm text-slate-200 opacity-70 pb-10">
        Designed and Developed with 🤍 + ☕️
      </p>
    </div>
  );
};
