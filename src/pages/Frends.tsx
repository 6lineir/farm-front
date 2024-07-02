const FrendsPage = () => {
    return (
        <div className="h-[89.89dvh] bg-gray-900 dark:bg-gray-900 text-center justify-center ">
            <h1 className="mb-5 text-gray-200 text-lg font-semibold ">

                Reffrall Frends
            </h1>

            <div className="mx-3 text-left">
                <ul className="max-w-md divide-y  divide-gray-200 dark:divide-gray-700">
                    <li className="pb-3 sm:pb-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="/Face-cakeswap.png" alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Dev
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    1,000,000
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div>
                        </div>
                    </li>

                </ul>

            </div>


        </div>
    )
}

export default FrendsPage