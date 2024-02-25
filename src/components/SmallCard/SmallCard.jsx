
const SmallCard = ({ card }) => {
    return (
        <div className="card w-96 bg-white">
            <figure><img src={card?.img} alt="best builder" /></figure>
            <div className="card-body">
                <div className="justify-start text-left">
                    <p className="badge bg-[#F2F4F7] text-[#074786] mr-3">20% OFF</p>
                    <p className="badge bg-[#F2F4F7] text-[#074786]">Limited time </p>
                </div>
                <h2 className="card-title">{card?.title}</h2>
                <p>{card?.titleDescription}</p>
                <div>
                    <p className="text-xl">${card?.offerPrice}</p>
                </div>
                <div className="card-actions flex justify-center items-center">
                    <button className="btn bg-[#1B88F4] w-[230px] text-white">View Deal</button>
                </div>
            </div>
        </div>
    );
};

export default SmallCard;