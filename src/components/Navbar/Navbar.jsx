import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    return (
        <div className="navbar bg-[#212731] border-red-600 border-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                    <GiHamburgerMenu />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 rounded-box w-52">
                        <div className="form-control relative">
                            <IoSearch className="absolute mt-4 ml-36 text-xl"  />
                            <input type="text" placeholder="Search..." className="input cursor-pointer text-black w-44 mb-5 md:w-auto rounded-md" />
                        </div>
                        <li><a>Categories</a></li>
                        <li><a>Website Builders</a></li>
                        <li><a>Todays deals</a></li>
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex text-white border-red-600 border-2 mr-60">
                <ul className="menu menu-horizontal px-1 gap-10 justify-center items-center">
                    <div className="form-control relative mr-28">
                        <IoSearch className="absolute text-black text-2xl ml-52 mt-3 cursor-pointer" />
                        <input type="text" placeholder="Search" className="input text-black  w-24 md:w-auto rounded-full" />
                    </div>
                    <li><a>Categories</a></li>
                    <li><a>Website Builders</a></li>
                    <li><a>Todays deals</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;