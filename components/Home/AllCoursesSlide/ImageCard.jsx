import React from "react";
import "./Image.css";
import Image from "next/image";
import book1 from "@/app/Assets/new-courses/c1.jpg";
import Link from "next/link";

export const ImageCard = () => {
  return (
    <>
      <div class="card">
        <div className="insite-card border-2">
          <Image
            width={850}
            height={400}
            className="card-image absolute top-0 p-5 z-40 "
            src={book1}
            alt=""
          />

          <div class="content ">
            <h2 class="course-title SILIGURI">Web Development</h2>

            <Link href={"/"}>
              <button class="booking-btn SILIGURI">Booking Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
