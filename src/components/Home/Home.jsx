import { FaRegCheckCircle } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import LongCard from "../LongCard/LongCard";
const Home = () => {
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
             <LongCard></LongCard>
        </div>
    );
};

export default Home;