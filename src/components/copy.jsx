import { useState } from "react";

export const Copy = () => {
  const [text] = useState("aitor.lancharro@gmail.com");
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="relative mb-6 mt-2">
      <input
        type="text"
        id="mail"
        className="bg-gray-50 border border-gray-300 text-red text-sm rounded-lg block w-full p-2.5"
        placeholder="aitor.lancharro@gmail.com"
        disabled
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center pr-3"
        onClick={handleClick}
      >
        {isCopied ? (
          <p className="bg-gray-900 rounded p-1 mr-1 text-xs text-white animate__animated animate__fadeIn animate__slow duration-1s">
            Email Copied
          </p>
        ) : null}
        {isCopied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer opacity-60 hover:bg-gray-200 rounded p-1 animate__animated animate__fadeIn animate_fadeOut"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer opacity-60 hover:bg-gray-200 rounded p-1 animate__animated animate__fadeIn"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
            />
          </svg>
        )}
      </div>
    </div>
  );
};
