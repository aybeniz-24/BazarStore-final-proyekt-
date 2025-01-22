function Loading() {
    return (
        <div className="flex flex-col m-6 rounded-lg shadow-lg w-48 animate-pulse h-64 bg-[#e3e89c]">
            {/* Header Section */}
            <div className="h-28 rounded-t-lg bg-[#c9cf75]"></div>
            
            {/* Content Section */}
            <div className="flex-1 px-4 py-6 space-y-3 bg-[#f5f7d6]">
                <div className="w-full h-5 rounded-md bg-[#d9df87]"></div>
                <div className="w-5/6 h-5 rounded-md bg-[#d9df87]"></div>
                <div className="w-2/3 h-5 rounded-md bg-[#d9df87]"></div>
            </div>
        </div>
    );
}

export default Loading;
