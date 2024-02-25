import { IoInformationCircleOutline } from "react-icons/io5";
const LongCard = () => {
    return (
        <div className="card card-side bg-base-100">
            <figure className="p-5"><img src="https://i.ibb.co/1TkqJZ3/demo.png" alt="Movie" /></figure>
            <div className="card-body grid grid-cols-3">
                <div className="col-span-2">
                    <h2 className="card-title">WixPro 72-Inch Responsive Website Builder-</h2>
                    <p className="text-justify text-sm">Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                    <h2 className="text-xl font-medium mt-3">Main highlights:</h2>
                    <p className="px-5 text-sm">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                    <span>Show more </span>
                </div>
                <div className="card-actions col-span-1 flex flex-col justify-center items-center gap-20">
                    <div className="flex flex-col justify-center items-center py-5 px-10 bg-[#F3F9FF] rounded-b-lg space-y-3 -mt-8">
                        <div className="relative">
                            <IoInformationCircleOutline className="absolute -mt-3 ml-12 text-sm" />
                            <h1 className="font-medium text-3xl">9.8</h1>
                        </div>
                        <p>Exceptional</p>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>
                    <button className="btn bg-[#1B88F4] text-white w-[200px]">View</button>
                </div>
            </div>
        </div>
    );
};

export default LongCard;