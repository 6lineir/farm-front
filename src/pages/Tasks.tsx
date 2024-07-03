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
    </div>
  );
};

export default TaskPage;
