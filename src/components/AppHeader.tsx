import { Link } from "react-router-dom";

const AppHeader = () => {
    return (
        <div>
            <nav className="fixed w-full z-20 top-0 dark:border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2.5">
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

        </div>
    )
}

export default AppHeader