import React from "react";

const PhotoGallary = () => {
  return (
    <>
      <div className="h-[90dvh]">
        <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-1 flex-col">
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1665689285334-b0044b6d2dc7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80"
                />
              </div>
              <div className="hidden md:flex flex-1 flex-row gap-2">
                <div className="flex flex-1 flex-col">
                  <img
                    className="object-cover h-full"
                    src="https://images.unsplash.com/photo-1666433723497-38d1d053185b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEwNDU&ixlib=rb-4.0.3&q=80"
                  />
                </div>
                <div className="hidden md:flex flex-1 flex-col">
                  <img
                    className="object-cover h-full"
                    src="https://images.unsplash.com/photo-1665048110211-91d0b74c421c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="hidden md:flex flex-1 flex-row gap-2">
                <div className="flex flex-1 flex-col">
                  <img
                    className="object-cover h-full"
                    src="https://images.unsplash.com/photo-1666297599033-09b318f2c8b5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExMjk&ixlib=rb-4.0.3&q=80"
                  />
                </div>
                <div className="hidden md:flex flex-1 flex-col">
                  <img
                    className="object-cover h-full"
                    src="https://images.unsplash.com/photo-1664713815297-9ce06950c022?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1666060519824-796d5638d809?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExOTQ&ixlib=rb-4.0.3&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PhotoGallary;
