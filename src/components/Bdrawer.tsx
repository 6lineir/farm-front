import { useState } from "react";

const Bdrawer = () => {
  const [Dshow, setDshow] = useState(false);
  const BTNDrawShowHndler = () => {
    console.log("El Hid");
    setDshow(true);
  };
  return (
    <div>
      <div
        id="drawer-bottom"
        className="bdrw fixed bottom-0 left-0 right-0 w-full rounded-t-3xl border-t-yellow-300 border-t-2 p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none"
        hidden={Dshow}
      >
        <h5
          id="drawer-bottom-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            className="w-4 h-4 me-2.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>Claimed Now Farm
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-bottom"
          aria-controls="drawer-bottom"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={BTNDrawShowHndler}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <p className="text-center mb-6 text-lg font-bold text-gray-300">
          400 Farmed
        </p>
        <a
          href="#"
          className="px-4 py-2 me-2 text-sm font-medium text-center text-gray-100 bg-yellow-400 border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          onClick={BTNDrawShowHndler}
        >
          Ok Claim
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          onClick={BTNDrawShowHndler}
        >
          More Farm{" "}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Bdrawer;
