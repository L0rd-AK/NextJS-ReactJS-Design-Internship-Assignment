
const SmallCard = ({ card }) => {
    return (
        <div className="card bg-white">
            <figure><img src={card?.img} alt="best builder" /></figure>
            <div className="card-body space-y-3">
                <div className="justify-start text-left">
                    <p className="badge bg-[#F2F4F7] text-[#074786] mr-3">20% OFF</p>
                    <p className="badge bg-[#F2F4F7] text-[#074786]">Limited time </p>
                </div>
                <h2 className="card-title">{card?.title}</h2>
                <p>{card?.titleDescription}</p>
                <div className="">
                    <p className="text-xl">${card?.offerPrice} <sub className="text-sm text[#9FA9B3]">${card?.price}&nbsp;&nbsp;<span className="text-red-600">(20% off)</span></sub></p>
                    {/* <p className="text-red-600 text-sm inline"></p> */}
                </div>
                <div className="card-actions flex justify-center items-center">
                    <button className="btn bg-[#1B88F4] w-[230px] text-white">View Deal</button>
                </div>
            </div>
        </div>
    );
};

export default SmallCard;