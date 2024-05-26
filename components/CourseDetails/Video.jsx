"use client";
import Image from "next/image";
import "./CourseDetails.css";
import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import thumb from "@/app/Assets/skill_courses_details/thumbel.jpg";

export const Video = ({ singleCourses }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);
  return (
    <>
      <div className="mx-auto w-[100%] flex justify-center pb-6">
        {/* Video thumbnail */}
        <button
          className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
          onClick={() => {
            setModalOpen(true);
          }}
          aria-label="Watch the video"
        >
          <Image
            className="rounded-md shadow-2xl transition-shadow duration-300 ease-in-out"
            src={singleCourses?.courseImage}
            width={500}
            height={500}
            priority
            alt={singleCourses?.CName}
          />
          {/* Play icon */}
          <svg
            className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
          >
            <circle
              className="fill-white"
              cx="36"
              cy="36"
              r="36"
              fillOpacity=".8"
            />
            <path
              className="fill-amber-600 drop-shadow-2xl"
              d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
            />
          </svg>
        </button>
        {/* End: Video thumbnail */}

        <Transition
          show={modalOpen}
          as={Fragment}
          afterEnter={() => videoRef.current?.play()}
        >
          <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
            {/* Modal backdrop */}
            <Transition.Child
              className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-out duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              aria-hidden="true"
            />
            {/* End: Modal backdrop */}

            {/* Modal dialog */}
            <Transition.Child
              className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6"
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 scale-75"
              enterTo="opacity-100 scale-100"
              leave="transition ease-out duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-75"
            >
              <div className="max-w-5xl mx-auto h-full flex items-center">
                <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                  <video
                    ref={videoRef}
                    width={1000}
                    height={1000}
                    loop
                    controls
                  >
                    <source src="/rasel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Dialog.Panel>
              </div>
            </Transition.Child>
            {/* End: Modal dialog */}
          </Dialog>
        </Transition>
      </div>
    </>
  );
};
