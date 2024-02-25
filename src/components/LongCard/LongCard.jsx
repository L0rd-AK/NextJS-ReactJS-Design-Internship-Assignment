import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const LongCard = ({card}) => {
    console.log(card);
    return (
        <div className="card card-side bg-base-100">
            <figure className="p-5"><img src="https://i.ibb.co/1TkqJZ3/demo.png" alt="Movie" /></figure>
            <div className="card-body grid grid-cols-3">
                <div className="col-span-2">
                    <h2 className="card-title">{card?.title}</h2>
                    <p className="text-justify text-sm">{card?.titleDescription}</p>
                    <h2 className="text-xl font-medium mt-3">Main highlights:</h2>
                    {
                        card?.highlightDescription ?
                        <p className="px-5 text-sm mb-4">{card?.highlightDescription}</p>:
                        <div className="bg-[#FFF4ED] p-5 rounded-lg">
                            <p className="px-5 text-sm mb-1"><span className="text-[#1B88F4] bg-white p-1 rounded-md">9.9</span> &nbsp; {card?.highlightPoints.one}</p>
                            <p className="px-5 text-sm mb-1"><span className="text-[#1B88F4] bg-white p-1 rounded-md">8.9</span> &nbsp; {card?.highlightPoints.two}</p>
                            <p className="px-5 text-sm mb-1"><span className="text-[#1B88F4] bg-white p-1 rounded-md">7.9</span> &nbsp; {card?.highlightPoints.three}</p>
                        </div>
                    }
                    {
                        card?.WhyWeLoveIt ?
                        <div className="mb-3 grid grid-cols-1 gap-2">
                            <p>Why we Love it</p>
                            <p className="text-sm"> <IoMdCheckmarkCircleOutline className="text-success inline" /> {card?.WhyWeLoveIt?.one}</p>
                            <p className="text-sm"> <IoMdCheckmarkCircleOutline className="text-success inline" /> {card?.WhyWeLoveIt.two}</p>
                            <p className="text-sm"> <IoMdCheckmarkCircleOutline className="text-success inline" /> {card?.WhyWeLoveIt.three}</p>
                        </div>:
                        <p></p>
                    }
                    <span className="text-[#1B88F4]">Show more <IoIosArrowDown className="inline" /> </span>
                </div>
                <div className="card-actions col-span-1 flex flex-col justify-center items-center gap-20">
                    <div className="flex flex-col justify-center items-center py-5 px-10 bg-[#F3F9FF] rounded-b-lg space-y-3 -mt-8">
                        <div className="relative">
                            <IoInformationCircleOutline className="absolute -mt-3 ml-12 text-sm" />
                            <h1 className="font-medium text-3xl">{card?.rating}</h1>
                        </div>
                        <p>{card?.ratingComment}</p>
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