import React, { useState } from "react";
import AvaMichele from "../assets/images/avatar-michelle.jpg";
import { RiPinterestFill, RiShareForwardFill } from "react-icons/ri";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

export default function ArticlePreview() {
  const [buttonOpen, setButtonOpen] = useState(false);
  const [buttonClose, setButtonClose] = useState(false);

  const handleClickOpen = () => {
    setButtonOpen(!buttonOpen);
  };

  const handleClickClose = () => {
    setButtonClose(!buttonClose);
    setTimeout(() => {
      setButtonClose(false);
      setButtonOpen(!buttonOpen);
    }, 600);
  };
  return (
    <div>
      {/* container */}
      <div className="flex justify-center items-center h-screen">
        {/* card */}
        <div className="flex flex-col bg-white w-[326px] h-[512px] rounded-xl overflow-hidden mobile:relative lg:flex-row lg:w-[730px] lg:h-[280px] lg:overflow-visible">
          {/* image decoreative */}
          <div className="bg-[url(../assets/images/drawers.jpg)] w-full h-[200px] bg-cover bg-no-repeat lg:h-full lg:rounded-l-xl"></div>
          {/* container content */}
          <div className="px-[2.72rem]">
            {/* item content  */}
            <article className="my-10 lg:my-0 lg:mt-9 lg:mb-6">
              <div>
                <h1 className="font-cfw-700 text-xl text-c-veryDarkGrayishBlue lg:text-[1.70rem] lg:leading-9">
                  Shift the overall look and feel by adding these wonderful
                  touches to furniture in your home
                </h1>
              </div>
              <div className="mt-5 lg:mt-4">
                <p className="text-c-desaturatedDarkBlue lg:text-lg">
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
                  onClick={handleClickOpen}
                >
                  <RiShareForwardFill />
                  <span className="sr-only">Share</span>
                </button>
              </div>
            </div>
          </div>
          {/* // pop over content */}
          <div
            className={`bg-c-veryDarkGrayishBlue absolute bottom-0 w-full ${
              !buttonOpen ? "hidden" : "animate-slide-in-fwd-bottom"
            }
            ${!buttonClose ? "" : "animate-slide-out-fwd-bottom"}
            lg:w-[247px] lg:left-[42rem] lg:bottom-[6.6rem] lg:rounded-xl 
            `}
          >
            {/* pop over items */}
            <div className="flex flex-row justify-between items-center px-[2.72rem] py-8 lg:py-6">
              <div>
                <h2 className="tracking-[.4rem] uppercase text-c-grayishBlue">
                  Share
                </h2>
              </div>
              <div className="flex flex-row justify-start items-center text-white text-3xl gap-2 relative -left-4 lg:left-1">
                <a href="#">
                  <AiFillFacebook />
                  <span className="sr-only">Share to facebook</span>
                </a>
                <a href="#">
                  <AiOutlineTwitter />
                  <span className="sr-only">Share to twitter</span>
                </a>
                <a href="#">
                  <RiPinterestFill />
                  <span className="sr-only">Share to pinterest</span>
                </a>
              </div>

              <div>
                <button
                  className="rounded-full bg-c-desaturatedDarkBlue text-white text-3xl px-2 py-2 lg:hidden"
                  onClick={handleClickClose}
                >
                  <RiShareForwardFill />
                  <span className="sr-only">Share</span>
                </button>
              </div>
              {/* arrow  */}
              <div className="hidden lg:block lg:h-0 lg:w-0 lg:border-x-8 lg:border-x-transparent lg:border-t-8 lg:border-t-c-veryDarkGrayishBlue absolute top-[4.8rem] overflow-clip left-[9.4rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
