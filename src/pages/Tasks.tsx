import { Link } from "react-router-dom";

const TaskPage = () => {
  return (
    <div className="h-[100vh] bg-gray-900 dark:bg-gray-900 text-center justify-center ">
      <h1 className="text-gray-200 font-bold ">Task Manger</h1>

      <div className="mx-3 text-gray-100">Coming Soon...</div>

      <div className="mx-3 mt-5">
        <a
          href="https://t.me/TonCakeSwapCommunity"
          target="_blank"
          className="inline-flex items-center justify-center p-4 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="w-full">Join To TonCakeSwap Community</span>
          <svg
            className="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
        <a
          href="https://t.me/TonCakeSwapCommunity"
          target="_blank"
          className="inline-flex items-center justify-center mt-3 p-4 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="w-full">Join To TonCakeSwap Channel</span>
          <svg
            className="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
        <Link to="/">
          <div
            target="_blank"
            className="inline-flex items-center justify-center mt-3 p-4 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="w-full">Go To Farming...</span>
            <svg
              className="w-4 h-4 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </div>
        </Link>
      </div>


      <div className="mx-4 mt-3 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex text-center justify-center my-2">

          <img src="/icon1/ton-symbol.svg" className="w-[60px]" alt="Ton Coin Logo" />
        </div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Referral Prize Pool Claim?</h5>
        </a>
        <span className="text-sky-500 font-extrabold text-lg">
          5,000 TON
        </span>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Invite your friends to <code>TonCakeSwap</code> for more chances to win prizes
        </p>
        <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
          See our guideline
          <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
          </svg>
        </a>
      </div>



    </div>
  );
};

export default TaskPage;
