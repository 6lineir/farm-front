import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <div className="dark mainCl">


                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <Link to="/">
                            <button className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="/cakeswap-logo-fix500.png" className="h-8" alt="cakeswap Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TonCakeFarm</span>
                            </button>
                        </Link>

                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            {/* <Link to="https://t.me/toncakeswap"> */}
                            <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Channel</a>
                            {/* </Link> */}
                        </div>
                    </div>
                </nav>
                {/* <nav class="bg-gray-50 dark:bg-gray-700">
                    <div class="max-w-screen-xl px-4 py-3 mx-auto">
                        <div class="flex items-center">
                            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Company</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Team</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}

                {/* <Link to="/">Home</Link> */}

                <Outlet />


                <div className="fixed z-50 w-full h-15 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
                    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                        <button className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <Link to="/">
                                <img src="/Avatar-CakeSwap.png" />
                                <span className="sr-only">Home</span>
                            </Link>
                        </button>
                        <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Tasks
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <Link to="/tasks">
                                <img src="/icon1/gift-box.svg" />
                                <span className="sr-only">Tasks</span>
                            </Link>
                        </button>
                        <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Tasks
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                                <Link to="/">
                                    <img src="/icon1/coin.svg" className="w-[30px]" />
                                    <span className="sr-only">Home</span>
                                </Link>
                            </button>
                        </div>
                        <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Home
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <Link to='/frend'>
                                <img src="/icon1/users.svg" />
                                <span className="sr-only">Frends</span>
                            </Link>
                        </button>
                        <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Frends
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <Link to="/airdrop" >
                                <img src="/icon1/airdrop.svg" />
                                {/* <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg> */}
                                <span className="sr-only">Airdrop</span>
                            </Link>
                        </button>
                        <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Airdrop
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AppLayout;