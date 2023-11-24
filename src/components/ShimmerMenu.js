const ShimmerMenu = () => {
    return (
        <div className="w-6/12 mx-auto my-6">

            <div className="my-5 space-y-3 py-4">
                <div className="flex justify-between">
                    <div className="animate-pulse w-4/12 h-6 m-4 rounded-lg bg-gray-300"></div>
                    <div className="animate-pulse w-1/12 h-6 m-4 rounded-lg bg-gray-300"></div>
                </div>
                <div className="animate-pulse w-2/12 h-3 m-4 rounded-lg bg-gray-300"></div>
                <div className="animate-pulse w-1/12 h-3 m-4 rounded-lg bg-gray-300"></div>

                <div className="flex space-x-3">
                    <div className="animate-pulse w-2/12 h-5 ml-4 mt-8 rounded-lg bg-gray-300"></div>
                    <div className="animate-pulse w-2/12 h-5 ml-4 mt-8 rounded-lg bg-gray-300"></div>
                </div>

                <div>
                    <div className="animate-pulse w-5/12 h-4 ml-4 mt-32 rounded-lg bg-gray-300"></div>
                    <div className="animate-pulse w-3/12 h-3 ml-4 mt-6 rounded-lg bg-gray-300"></div>
                    <div className="animate-pulse w-1/12 h-3 ml-4 mt-4 rounded-lg bg-gray-300"></div>
                    <div className="animate-pulse w-9/12 h-3 ml-4 mt-8 rounded-lg bg-gray-300"></div>
                </div>

            </div>

        </div>
    );
};

export default ShimmerMenu;