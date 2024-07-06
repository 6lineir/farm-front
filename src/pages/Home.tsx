/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTimer } from "react-timer-hook";
import { useState, useEffect } from "react";

import Bdrawer from "./../components/Bdrawer";

const HomePage = () => {
  const [FarmModal, setFarmModal] = useState(false);
  const [Coin, setCoin] = useState(parseFloat(6));
  const User_Level = 1;
  const set_seconds = 20;
  const score_farm_max = parseFloat(0.1) * User_Level;
  const [FarmMax, setFarmMax] = useState(parseFloat(score_farm_max).toFixed(3));
  // const Ltime = localStorage.getItem('timem')
  // console.log(localStorage.getItem('timem'));

  const time = new Date();

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart
  } = useTimer({ time, onExpire: () => console.warn("onExpire called") });
  time.setSeconds(time.getSeconds() + set_seconds);

  const LevelName = () => {
    if (User_Level == 1) return "Bronze";
    if (User_Level == 2) return "Silver";
    if (User_Level == 3) return "Gold";
  };
  const ScoreHandler = () => {
    const newCoin = parseFloat(Coin) + score_farm_max;
    setCoin(newCoin);
    console.log(newCoin);
    // setFarmModal(false);
  };
  const LiveFarm = () => {
    if (totalSeconds != 0) {
      return parseFloat(FarmMax / totalSeconds).toFixed(4);
    } else {
      return parseFloat(0.0001);
    }
  };
  const ClaimHandler = () => {
    setFarmModal(false);
    ScoreHandler()
    const time = new Date();
    localStorage.setItem("timem", time);

    time.setSeconds(time.getSeconds() + set_seconds);
    restart(time);
    if (totalSeconds == 0) {
      console.warn("=== End Time ===");
      // setFarmModal(false);
      return true;
    } else return false;
  };

  return (
    <div className="h-screen bg-gradient-to-r from-sky-800 to-indigo-500 bg-cover bg-center  text-center justify-center ">
      <div className="x-3 p-2 bg-white border border-gray-200 rounded-xl shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-full">
        <p className="dark:text-gray-100">
          Level:
          <span className="text-gray-300 font-bold ml-1">{LevelName()}</span>
        </p>
      </div>

      <div className="inline-flex justify-between text-gray-200 mt-2 text-lg font-bold text-center items-center justify-center">
        <img
          src="/cakeswap-logo-fix500.png"
          className="w-[30px] mr-1"
          alt="Farm TonCakeSwap Logo"
        />
        <p>
          {Coin.toFixed(2)}
        </p>
      </div>
      <div className="flex text-center items-center justify-center my-2">
        <img
          src="/TONCakeSwap.png"
          className="w-[200px] mt-3"
          alt="Farm TonCakeSwap Logo"
        />
      </div>
      <div className="mt-12">
        <p className="text-gray-300 text-xs font-bold my-2">
          Max Farm:
          <span className="bg-gray-300 text-gray-800 text-xs font-medium px-2.5 ml-1 py-0.5 rounded dark:text-gray-800">
            {score_farm_max.toFixed(2)}
          </span>
        </p>
        <p className="text-gray-300 text-sm font-bold my-2">
          {totalSeconds !== 0 ? "Farming..." : "Not running"}
        </p>
        <div className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
          <div className="inline-flex justify-between items-center mr-3 ">
            <span
              hidden={totalSeconds !== 0}
              className="text-md  bg-blue-500 rounded-full text-white px-4 py-1.5 me-3"
              onClick={ClaimHandler}
            >
              Claim
            </span>
            <span
              hidden={totalSeconds == 0}
              className="text-md  bg-gray-500 rounded-full text-white px-4 py-1.5 me-3"
            >
              Claim
            </span>
            <div
              className="pl-2 text-blue-300  dark:text-blue-300 justify-center items-center align-center font-bold text-md"
              style={{ textAlign: "center" }}
            >
              <div>
                <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
              </div>
            </div>
          </div>

          <span className="text-sm font-medium">
            Farm
            <code className="mx-1">{LiveFarm()}</code>
          </span>
        </div>
      </div>
      {/* 
      <div
        id="claim-modal"
        hidden={FarmModal}
        className=" overflow-y-auto overflow-x-hidden  fixed bottom-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-15rem)] max-h-full shadow"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                ScoreHandler();
              }}
            >
              <img src="/icon1/close.svg" className="w-[30px]" />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <img
                src="/icon1/coin.svg"
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              />
              <h3 className="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                You have entered the amount of:
              </h3>
              <p className="mb-5 text-lg font-bold text-gray-300">
                +{score_farm_max.toFixed(3)}
              </p>
              <button
                onClick={() => {
                  ScoreHandler();
                }}
                type="button"
                className="text-white bg-green-400 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, Claim
              </button>
              <button
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Farm More
              </button>
            </div>
          </div>
        </div>
      </div> 
      */}
      <Bdrawer Dshow={FarmModal} setDshow={setFarmModal} count={FarmMax}/>
    </div>
  );
};
export default HomePage;
