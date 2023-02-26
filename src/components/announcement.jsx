import { useState } from "react";

export const Announcement = () => {
  const [isAnnouncementShown, setIsAnnouncementShown] = useState(false);
  return (
    <div className={isAnnouncementShown ? "hideAnnouncement" : ""}>
      <div className="fixed inset-x-0 bottom-0 p-4 z-10">
        <div className="relative flex items-center justify-between gap-4 rounded-lg bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-500 opacity-95 px-4 py-3 text-slate-700 shadow-lg">
          <p className="text-sm font-medium">
            Some functionalities are still in the development phase.{" "}
            <span className="text-sm font-bold underline">Stay tuned!</span>
          </p>
          <br></br>
          <button
            aria-label="Close"
            className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
            onClick={() => setIsAnnouncementShown((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
