

const ReferralShare = ({ linkBtn, ReffLink }) => {


    return (
        <div className="mx-3 mb-2">
            <div className="mb-2 flex justify-between items-center">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Share Your Referral Link:</label>
            </div>
            <div className="flex items-center mb-3">
                <a href={linkBtn} className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-100 bg-blue-700 border border-blue-500 rounded-s-lg shadow-lg ">

                    <span>Share Your Link</span>

                </a>
                <div className="relative w-full">
                    <input id="website-url" type="text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={ReffLink} disabled />
                </div>
                <button data-tooltip-target="tooltip-website-url" data-copy-to-clipboard-target="website-url" className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700" type="button">
                    <span id="default-icon">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                        </svg>
                    </span>
                    <span id="success-icon" className="hidden inline-flex items-center">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5" />
                        </svg>
                    </span>
                </button>
                <div id="tooltip-website-url" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    <span id="default-tooltip-message">Copy link</span>
                    <span id="success-tooltip-message" className="hidden">Copied!</span>
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

            </div>


        </div>

    )
}

export default ReferralShare