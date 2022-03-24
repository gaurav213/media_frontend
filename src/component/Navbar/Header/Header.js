import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import User from "../User/User";
import { getAllUsers } from "../../../Actions/User";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  MenuIcon,
  ChatIcon,
  HomeIcon,
  BriefcaseIcon,
  XIcon,
  
} from "@heroicons/react/outline";

const Header = () => {
  const [tab, setTab] = useState(window.location.pathname);
  let [open, setOpen] = useState(false);
  let [openProfile, setOpenProfile] = useState(false);
  let [openPostImg, setOpenPostImg] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const[name,setName] = useState("");
const { users, loading } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllUsers(name));
  };
 
  return (
    <div className="shadow-md z-[50] w-full sticky  top-0 left-0">
      <div>
        <form
          className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7"
          onSubmit={submitHandler}
        >
          {/* frist name  */}
          <Link to="/">
            <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
              <span className="flex">
                <PlusCircleIcon className="h-8 top-6" />
                <p className="font-mono">Dhungya</p>
              </span>
            </div>
          </Link>

          {/* mobile view icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute top-5 right-8 cursor-pointer md:hidden"
          >
            {!open ? <MenuIcon className="h-8" /> : <XIcon className="h-8" />}
          </div>

          {/* search start */}
          <div className=" relative hidden mt-5 p-3 md:mt-0 md:inline   ">
            <div className="bg-yellow-300 rounded-lg flex flex-col items-center justify-center  ">
              <div className="flex items-center space-x-2 bg-white rounded-lg shadow-lg">
                <SearchIcon
                  disabled={loading}
                  type="submit"
                  cursor={"pointer"}
                  className="h-5 w-5 mx-2"
                />
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding    rounded transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                  type="search"
                  id="search"
                />
                <div
                  name="users"
                  className={`${
                    name ? "absolute" : "hidden"
                  }   flex flex-col items-center overflow-y-auto scroll-smooth snap-none h-[450px] p-2 bg-[#F6F1F1] w-[316px]  rounded-lg top-10 flex flex-col mt-4`}
                ></div>
                <div >
                  {users &&
                    users
                      .filter((user) => {
                        if (name === "") {
                          return user;
                        } else if (
                          user.name
                            .toLocaleLowerCase()
                            .includes(name.toLocaleLowerCase())
                        ) {
                          return user;
                        }
                      })
                      .map((user) => {
                        // <User
                        //   key={user._id}
                        //   userId={user._id}
                        //   name={user.name}
                        //   email={user.email}
                        //   avatar={user.avatar.url}
                        // />
                         return (
                           <div
                             key={user._id}
                             userId={user._id}
                             className="shadow-md hover:shadow-xl hover:scale-105 cursor-pointer active:scale-95 hover:bg-[#FFCACA] transtion-all duration-500 ease-out p-2 rounded-lg border-gray-600 w-full  space-y-2 mb-2"
                           >
                             <div>{user.avatar.url}</div>
                             <div className="flex flex-col w-full mt-3 border-1 border-gray-700">
                               <h4 className=" text-lg">{user.name}</h4>
                               <p className="text-gray-500 text-sm">
                                 avatar= {user.email}
                               </p>
                             </div>
                           </div>
                         );
                })}
                      
                </div>
              </div>
            </div>
          </div>
          {/* search end */}
          <ul
            className={`${
              open ? "inline" : "hidden "
            } md:flex md:items-center md:space-x-4 space-y-4 pl-3 transition-all duration-500 ease-in`}
          >
            {/* icon links  */}
            <li className="mt-3">
              <Link to="/" onClick={() => setTab("/")}>
                {tab === "/" ? (
                  <HomeIcon className="h-7 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                ) : (
                  <HomeIcon className="h-6 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                )}
              </Link>
            </li>
            <li className="mt-3">
              <Link to="/chat" onClick={() => setTab("/chat")}>
                {tab === "/chat" ? (
                  <ChatIcon className="h-7 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                ) : (
                  <ChatIcon className="h-6 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                )}
              </Link>
            </li>
            <li className="mt-3">
              <PlusCircleIcon
                onClick={() => setOpenPostImg(!openPostImg)}
                className="h-6 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out"
              />
              {/* <PostImgModal
              openPostImg={openPostImg}
              setOpenPostImg={setOpenPostImg}
            /> */}
            </li>
            <li className="mt-3">
              <Link to="/people" onClick={() => setTab("/people")}>
                {tab === "/people" ? (
                  <UserGroupIcon className="h-7 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                ) : (
                  <UserGroupIcon className="h-6 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                )}
              </Link>
            </li>
            <li className="mt-3">
              <Link to="/jobs" onClick={() => setTab("/jobs")}>
                {tab === "/jobs" ? (
                  <BriefcaseIcon className="h-7 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                ) : (
                  <BriefcaseIcon className="h-6 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                )}
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Header;
