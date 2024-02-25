import { FaRegCheckCircle } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import LongCard from "../LongCard/LongCard";
import { useEffect, useState } from "react";
import SmallCard from "../SmallCard/SmallCard";
const Home = () => {
    const [longCards, setlongcards] = useState([]);
    const [smallCards, setSmallcards] = useState([]);
    useEffect(() => {
        fetch('/LongCard.json')
            .then(res => res.json())
            .then(data => {
                setlongcards(data);
            })
        fetch('/smallCard.json')
            .then(res => res.json())
            .then(data => {
                setSmallcards(data);
            })
    }, [])
    return (
        <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1">
            <h1 className="text-3xl md:text-5xl text-left mb-5 px-5">Best Website builders in the US</h1>
            <hr className="border-[1px]" />
            <div className="text-sm flex md:gap-10 md:my-3 px-5">
                <div className="flex md:float-left gap-3 justify-center items-center">
                    <FaRegCheckCircle />
                    <p>Last Updated - February 22, 2020</p>
                </div>
                <div className="flex float-left gap-3 justify-center items-center">
                    <IoInformationCircleOutline className="text-xl" />
                    <p>Advertising Disclosure</p>
                </div>
            </div>
            <hr className="border-[1px]" />
            {/* =========== buttons ============== */}
            <div className="mt-5 block">
                <ul className="flex flex-wrap md:float-left gap-5 md:gap-10 justify-center">
                    <a href=""><li>Tools</li></a>
                    <a href=""><li>AWS Builder</li></a>
                    <a href=""><li>Start Build</li></a>
                    <a href=""><li>Build Supplies</li></a>
                    <a href=""><li>Tooling</li></a>
                    <a href=""><li>BlueHosting</li></a>
                </ul>
            </div>
            {/* ====================== Breadcrumbs ====================== */}
            <div className="text-sm breadcrumbs mt-5 block px-5">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Hosting for all</a></li>
                    <li>Hosting</li>
                    <li>Hosting5</li>
                    <li>Hosting6</li>
                </ul>
            </div>
            {/* ====================== long cards ====================== */}
            <div className="grid grid-cols-1 gap-10">
                {
                    longCards.map(i => <LongCard key={i.id} card={i}></LongCard>)
                }
            </div>
            {/* ====================== Related deal section ====================== */}
            <h2 className="text-3xl font-semibold my-10 mt-10 p-5">Related deals you might like for</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    smallCards.map(i => <SmallCard key={i.id} card={i}></SmallCard>)
                }
            </div>
            {/* news later sectuon */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-44 mt-20 p-5">
                <div>
                    <h1 className="text-3xl font-semibold mb-10">Sign up and get exclusive <br /> special deals</h1>
                </div>
                <div>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                <button className="btn bg-[#1B88F4] join-item text-white">Sign up</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;