const NotDekstop = () => {
    return (
        <div className="h-[100vh] bg-gray-900 dark:bg-gray-900 text-center justify-center ">
            <h1 className="text-gray-200 font-bold ">
                <code>Error Loading</code>

            </h1>

            <h1 className="text-gray-200 font-bold mt-10 mx-3">

                this MiniApp not Run in Desktop device. Scan QR by Mobile
            </h1>


            <div className="flex text-center items-center justify-center mt-4">
                <img src="/public/qr-bot.png" className="w-[150px] shadow" />
            </div>
        </div>
    )
}

export default NotDekstop