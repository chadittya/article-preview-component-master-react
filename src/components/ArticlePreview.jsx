import React, { useState } from "react";
import AvaMichele from "../assets/images/avatar-michelle.jpg";
import { RiPinterestFill, RiShareForwardFill } from "react-icons/ri";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

export default function ArticlePreview() {
  const [popOverOpen, setPopOverOpen] = useState(false);

  const handleClick = () => {
    setPopOverOpen(!popOverOpen);
  };

  return (
    <div>
      {/* container */}
      <div className="flex justify-center items-center h-screen">
        {/* card */}
        <div className="flex flex-col bg-white w-[326px] h-[512px] rounded-xl overflow-hidden relative">
          {/* image decoreative */}
          <div className="bg-[url(../assets/images/drawers.jpg)] w-full h-[200px] bg-cover bg-no-repeat"></div>
          {/* container content */}
          <div className="px-[2.72rem]">
            {/* item content  */}
            <article className="my-10">
              <div>
                <h1 className="font-cfw-700 text-xl text-c-veryDarkGrayishBlue">
                  Shift the overall look and feel by adding these wonderful
                  touches to furniture in your home
                </h1>
              </div>
              <div className="mt-5">
                <p className="text-c-desaturatedDarkBlue">
                  Ever been in a room and felt like something was missing?
                  Perhaps it felt slightly bare and uninviting. I’ve got some
                  simple tips to help you make any room feel complete.
                </p>
              </div>
            </article>
            {/* profile item content */}
            <div className="flex flex-row gap-5 justify-between items-center">
              {/* avatar */}
              <div className="rounded-full overflow-hidden w-[40px]">
                <img src={AvaMichele} alt="michelle profile" />
              </div>
              {/* name and date  */}
              <div className="flex flex-col relative -left-6">
                <div>
                  <h2 className="text-c-veryDarkGrayishBlue font-cfw-700">
                    Michelle Appleton
                  </h2>
                </div>
                <div>
                  <span className="text-c-desaturatedDarkBlue">
                    28 Jun 2020
                  </span>
                </div>
              </div>
              <div>
                <button
                  className="rounded-full bg-c-lightGrayishBlue text-c-desaturatedDarkBlue text-3xl px-2 py-2"
                  onClick={handleClick}
                >
                  <RiShareForwardFill />
                  <span className="sr-only">Share</span>
                </button>
              </div>
            </div>
          </div>
          {popOverOpen && (
            // pop over content
            <div
              className={`${
                !popOverOpen && "animate-slide-out-bottom"
              } bg-c-veryDarkGrayishBlue absolute bottom-0 w-full animate-slide-in-bottom`}
            >
              {/* pop over items */}
              <div className="flex flex-row justify-between items-center px-[2.72rem] py-8">
                <div>
                  <h2 className="tracking-[.4rem] uppercase text-c-grayishBlue">
                    Share
                  </h2>
                </div>
                <div className="flex flex-row justify-start items-center text-white text-3xl gap-2 relative -left-4">
                  <button>
                    <AiFillFacebook />
                    <span className="sr-only">Share to facebook</span>
                  </button>
                  <button>
                    <AiOutlineTwitter />
                    <span className="sr-only">Share to twitter</span>
                  </button>
                  <button>
                    <RiPinterestFill />
                    <span className="sr-only">Share to pinterest</span>
                  </button>
                </div>
                <div>
                  <button
                    className="rounded-full bg-c-desaturatedDarkBlue text-white text-3xl px-2 py-2"
                    onClick={handleClick}
                  >
                    <RiShareForwardFill />
                    <span className="sr-only">Share</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
