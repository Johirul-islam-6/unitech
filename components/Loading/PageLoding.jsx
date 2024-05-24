import React from "react";

export const PageLoding = ({ Loading }) => {
  return (
    <>
      {Loading && (
        <div className="h-screen w-[100%] bg-white flex justify-center mt-40">
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        </div>
      )}
    </>
  );
};
