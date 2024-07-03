import packageJson from './../../package.json';


const LoadingPage = () => {
    return (
        <div className="h-[100vh] bg-gray-900 dark:bg-gray-900 text-center justify-center pt-[50%]">


            <h1 className="text-gray-200 font-bold">

                Loading ...
            </h1>

            {/* <img src="/public/icon1/coin.svg" className="w-[100px]"/> */}

            <span className="mt-[2rem] bottom-0 bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">V {packageJson.version} </span>


        </div>
    )
}

export default LoadingPage