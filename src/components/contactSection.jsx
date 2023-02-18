import React from "react";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <div
      id="contact"
      className="flex justify-around items-center contact-section"
    >
      <div>
        <h2 className="text-lime-400">Contact</h2>
        <h1 className="text-2xl font-semibold text-black opacity-75">
          I would be honored to collaborate with you on your upcoming project
        </h1>
        <p className="text-base opacity-50 mt-4">
          I am eager to learn about new and exciting opportunities, engage in
          thought-provoking discussions, and establish valuable connections. I
          look forward to connecting with you!
        </p>
      </div>
      <div className="CARDS"></div>
    </div>
  );
};
