
const LongCard = () => {
    return (
        <div className="card card-side bg-base-100">
            <figure className="p-5 w-full"><img src="https://i.ibb.co/1TkqJZ3/demo.png" alt="Movie" /></figure>
            <div className="card-body grid grid-cols-3">
                <div className="col-span-2">
                    <h2 className="card-title">WixPro 72-Inch Responsive Website Builder-</h2>
                    <p className="text-justify text-sm">Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                    <h2 className="text-xl font-medium mt-3">Main highlights:</h2>
                    <p className="px-5 text-sm">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                </div>
                <div className="card-actions justify-end col-span-1">
                    <button className="btn bg-[#1B88F4] text-white">View</button>
                </div>
            </div>
        </div>
    );
};

export default LongCard;