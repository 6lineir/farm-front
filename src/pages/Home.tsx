/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
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
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    const ClaimHandler = () => {
        if (hours == 0 && minutes == 0 && seconds == 0) {
            console.log(minutes);
            return true

        } else return false

    }
    // ClaimHandler()


    return (
        <div className='inline-flex justify-between items-center mr-3 '>

            <span disabled hidden={ClaimHandler() === false} className="text-xs  bg-blue-500 rounded-full text-white px-4 py-1.5 me-3" onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date();
                time.setSeconds(time.getSeconds() + 480);
                restart(time)
            }}>
                Claim
            </span>
            <div className='pl-2 dark:text-blue-300 justify-center items-center align-center' style={{ textAlign: 'center' }}>
                <div >
                    <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                </div>
                {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}

            </div>
        </div>
    );
}
const HomePage = () => {
    const Ltime = localStorage.getItem('timem')
    const time = new Date();
    time.setSeconds(time.getSeconds() + 480)

    // console.log(time);

    return (
        <div className="h-[89.89dvh] bg-gradient-to-r from-sky-800 to-indigo-500 bg-cover bg-center  text-center justify-center ">

            <div className="mx-3 p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-full">
                <p className="dark:text-gray-100">Time Level: 1</p>
            </div>

            <div className="inline-flex justify-between text-gray-200 mt-4 text-lg font-bold text-center items-center justify-center">
                <p>
                    <img src="/cakeswap-logo-fix500.png" className="w-[50px] " alt="Farm TonCakeSwap Logo" /><span> 000.00</span>
                </p>
            </div>
            <div className="flex text-center items-center justify-center my-5">
                <img src="/Avatar-CakeSwap.png" className="w-[200px] " alt="Farm TonCakeSwap Logo" />
            </div>
            <div className="mt-12">
                <div href="#" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">


                    <MyTimer expiryTimestamp={time} />


                    <span className="text-sm font-medium">Farm 0.0045</span>

                </div>
            </div>
        </div>
    )
}
export default HomePage