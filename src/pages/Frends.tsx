const FrendsPage = () => {
    return (
        <div className="h-[89.89dvh] bg-gray-900 dark:bg-gray-900 text-center justify-center ">
            <h1 className="mb-2 text-gray-200 text-lg font-semibold ">

                Reffrall Frends
            </h1>
            <div className="mx-3 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-md font-bold dark:text-white">User Level Farming</h5>
                </a>


                <table className="w-full text-sm text-left dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-2 rounded-s-lg">
                                Name
                            </th>
                            <th scope="col" className="px-3 py-2">
                                %APY
                            </th>
                            <th scope="col" className="px-3 py-2">
                                Frend
                            </th>
                            <th scope="col" className="px-3 py-2 rounded-e-lg">
                                Farm
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="dark:bg-gray-800">
                            <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Bronze
                            </th>
                            <td className="px-3 py-2">
                                1
                            </td>
                            <td className="px-3 py-2">
                                +1
                            </td>
                            <td className="px-3 py-2 text-white font-bold">
                                0.10
                            </td>
                        </tr>
                        <tr className="dark:bg-gray-800">
                            <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Silver
                            </th>
                            <td className="px-3 py-2">
                                2
                            </td>
                            <td className="px-3 py-2">
                                +20
                            </td>
                            <td className="px-3 py-2 text-white font-bold">
                                0.20
                            </td>
                        </tr>
                        <tr className="dark:bg-gray-800">
                            <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Gold
                            </th>
                            <td className="px-3 py-2">
                                3
                            </td>
                            <td className="px-3 py-2">
                                +50
                            </td>
                            <td className="px-3 py-2 text-white font-bold">
                                0.30
                            </td>
                        </tr>

                    </tbody>
                </table>



                <a href="#" className="inline-flex items-center mt-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more

                </a>
            </div>


            <div className="mx-4 mt-2 text-left">
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