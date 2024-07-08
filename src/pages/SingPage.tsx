
import { Link } from "react-router-dom";
const SingPage = () => {
  return (
    <div className="h-[100vh] bg-gray-900 dark:bg-gray-900 text-center justify-center ">
      <h1 className="text-gray-200 font-bold ">
        <code>Welcom To TonCakeSwap Farm</code>
      </h1>

      <div className="flex text-center items-center justify-center mt-10">
        {/* <img src="/icon1/error.png" className="w-[60px] mt-10" /> */}
      </div>
      <h1 className="text-red-400 font-bold mt-4 mx-3">
        Hi! await Login te page farm
      </h1>
      <p className="text-gray-200 mt-4 mx-3">3 Referral invite to Farm</p>
      <Link to="/">
        <div
          className="inline-flex items-center mt-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login in Farm
        </div>
      </Link>

    </div>
  );
};

export default SingPage;
