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
            <h1 className="text-5xl text-left mb-5">Best Website builders in the US</h1>
            <hr className="border-[1px]" />
            <div className="flex gap-10 my-3">
                <div className="flex float-left gap-3 justify-center items-center">
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
                <ul className="flex float-left gap-10">
                    <a href=""><li>Tools</li></a>
                    <a href=""><li>AWS Builder</li></a>
                    <a href=""><li>Start Build</li></a>
                    <a href=""><li>Build Supplies</li></a>
                    <a href=""><li>Tooling</li></a>
                    <a href=""><li>BlueHosting</li></a>
                </ul>
            </div>
            {/* ====================== Breadcrumbs ====================== */}
            <div className="text-sm breadcrumbs mt-5 block">
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
            <h2 className="text-3xl font-semibold my-10 mt-10">Related deals you might like for</h2>
                <div className="grid grid-cols-3 gap-10">
                    {
                        smallCards.map(i=> <SmallCard key={i.id} card={i}></SmallCard>)
                    }
                </div>
        </div>
    );
};

export default Home;