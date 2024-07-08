const ErrorPage = ({ ecode, emsg }) => {
  return (
    <div className="h-[100vh] bg-gray-900 dark:bg-gray-900 text-center justify-center ">
      <h1 className="text-gray-200 font-bold ">
        <code>Error Loading</code>
      </h1>

      <div className="flex text-center items-center justify-center mt-10">
        <img src="/icon1/error.png" className="w-[60px] mt-10" />
      </div>
      <h1 className="text-gray-200 font-bold mt-4 mx-3">
        {ecode}
      </h1>
      <p className="text-gray-200 mt-4 mx-3">
        {emsg}
      </p>
    </div>
  );
};

export default ErrorPage;
