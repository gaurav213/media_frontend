import React, { useState } from "react";

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  MenuIcon,
  ChatIcon,
  HomeIcon,
  BriefcaseIcon,
  XIcon,
  EmojiHappyIcon,
  PencilAltIcon,
  CogIcon,
  SupportIcon,
  LogoutIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import "./navbar.css";

import PostImgModal from "../PostImgModal";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../Actions/User";
import { useDispatch, useSelector } from "react-redux";
import User from "../Navbar/User/User";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  let [openProfile, setOpenProfile] = useState(false);
  let [openPostImg, setOpenPostImg] = useState(false);
  const [name, setName] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const { users, loading } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllUsers(name));
  };
  // console.log(openPostImg);
  // nothing special
  const [tab, setTab] = useState(window.location.pathname);

  return (
    <>
      <div className="shadow-md z-[50] w-full sticky  top-0 left-0">
       
          <form
            className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7"
            onSubmit={submitHandler}
          >
            {" "}
            <Link to="/">
              <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                <span className="flex">
                  <PlusCircleIcon className="h-8 top-6" />
                  <p className="font-mono">Dhungya</p>
                </span>
              </div>
            </Link>
            <div
              onClick={() => setOpen(!open)}
              className="absolute top-5 right-8 cursor-pointer md:hidden"
            >
              {!open ? <MenuIcon className="h-8" /> : <XIcon className="h-8" />}
            </div>
            <div className=" relative hidden mt-5 p-3 md:mt-0 md:inline   ">
              <div className="bg-yellow-300 rounded-lg flex flex-col items-center justify-center  ">
                <div className="flex items-center space-x-2 bg-white rounded-lg shadow-lg">
                  <SearchIcon className="h-5 w-5 mx-2" />
                  <input
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding    rounded transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    type="search"
                    id="search"
                  />
                </div>

                <div
                  name="users"
                  className={`${
                    searchInput ? "absolute" : "hidden"
                  }   flex flex-col items-center overflow-y-auto scroll-smooth snap-none h-[450px] p-2 bg-[#F6F1F1] w-[316px]  rounded-lg top-10 flex flex-col mt-4`}
                >
                  {users &&
                    users
                      .filter((user) => {
                        if (searchInput === "") {
                          return user;
                        } else if (
                          user.name
                            .toLocaleLowerCase()
                            .includes(searchInput.toLocaleLowerCase())
                        ) {
                          return user;
                        }
                      })
                      .map((user) => {
                        return (
                          <div
                           
                            className="shadow-md hover:shadow-xl hover:scale-105 cursor-pointer active:scale-95 hover:bg-[#FFCACA] transtion-all duration-500 ease-out p-2 rounded-lg border-gray-600 w-full  space-y-2 mb-2"
                          >
                            <User
                          key={user._id}
                          userId={user._id}
                          name={user.name}
                          email={user.email}
                          avatar={user.avatar.url}
                        />
                            
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
            <ul
              className={`${
                open ? "inline" : "hidden "
              } md:flex md:items-center md:space-x-4 space-y-4 pl-3 transition-all duration-500 ease-in`}
            >
              <li className="mt-3">
                {/* <Link to="/">
                <HomeIcon className="h-6 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
              </Link> */}
                <Link to="/" onClick={() => setTab("/")}>
                  {tab === "/" ? (
                    <HomeIcon className="h-7 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                  ) : (
                    <HomeIcon className="h-6  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                  )}
                </Link>
              </li>
              <li className="mt-3">
                {/* <Link to="/chat">
                <ChatIcon className="h-6  text-gray-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
              </Link> */}

                <Link to="/chat" onClick={() => setTab("/")}>
                  {tab === "/chat" ? (
                    <ChatIcon className="h-7 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                  ) : (
                    <ChatIcon className="h-6  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                  )}
                </Link>
              </li>
              <li className="mt-3">
                <PlusCircleIcon
                  onClick={() => setOpenPostImg(!openPostImg)}
                  className="h-6 text-gray-600 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out"
                />
                <PostImgModal
                  openPostImg={openPostImg}
                  setOpenPostImg={setOpenPostImg}
                />
              </li>
              <li className="mt-3">
                {/* <Link to="/people">
                <UserGroupIcon className="h-6 text-gray-600 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
              </Link> */}

                <Link to="/people" onClick={() => setTab("/")}>
                  {tab === "/people" ? (
                    <UserGroupIcon className="h-7 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                  ) : (
                    <UserGroupIcon className="h-6  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                  )}
                </Link>
              </li>
              <li className="mt-3">
                {/* <Link to="/jobs">
                <BriefcaseIcon className="h-6 text-gray-600 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
              </Link> */}
                <Link to="/jobs" onClick={() => setTab("/")}>
                  {tab === "/jobs" ? (
                    <BriefcaseIcon className="h-7 text-pink-600  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                  ) : (
                    <BriefcaseIcon className="h-6  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                  )}
                </Link>
              </li>
              <li
                onClick={() => setOpenProfile(!openProfile)}
                className="hidden md:inline mt-3 hover:scale-105 transtion-all duration-500 ease-out"
              >
                <img
                  src="https://imgk.timesnownews.com/media/15906943c06218cb9d67d1855bc6cc5e.jpg"
                  className="h-10 rounded-full cursor-pointer object-contain"
                  alt="profile-pic"
                />
              </li>
              {/* profile modal */}

              <div className="wrapper">
                <div
                  className={`${
                    openProfile ? "md:inline" : "md:hidden"
                  } inline  bg-pink-700 text-white rounded-lg  absolute top-[80px] right-1 p-3 flex flex-col space-y-3 transition-all duration-500 ease-out hover:scale-105 shadow-lg  `}
                >
                  <div
                    onClick={() => {
                      setOpenProfile(!openProfile);
                    }}
                    className="flex items-center align-center space-x-2 hover:text-gray-300 hover:scale-105 transition-all duration-500 ease-in-out "
                  >
                    <EmojiHappyIcon className="h-5 text-yellow-300" />
                    <Link to="user">My profile</Link>
                  </div>

                  <div className="flex items-center align-center space-x-2 hover:text-gray-300 hover:scale-105 transition-all duration-500 ease-in-out">
                    <PencilAltIcon className="h-5 text-yellow-300" />

                    <a href="">Edit profile</a>
                  </div>
                  <div className="flex items-center align-center space-x-2 hover:text-gray-300 hover:scale-105 transition-all duration-500 ease-in-out">
                    <CogIcon className="h-5 text-yellow-300" />

                    <a href="">Settings</a>
                  </div>
                  <div className="flex items-center align-center space-x-2 hover:text-gray-300 hover:scale-105 transition-all duration-500 ease-in-out">
                    <SupportIcon className="h-5 text-yellow-300" />

                    <a href="">Help</a>
                  </div>
                  <div className="flex items-center align-center space-x-2 hover:text-gray-300 hover:scale-105 transition-all duration-500 ease-in-out">
                    <LogoutIcon className="h-5 text-yellow-300" />

                    <a href="">Logout</a>
                  </div>
                  <div className="hidden md:inline-flex w-full cursor-pointer  items-center justify-center">
                    <XCircleIcon
                      onClick={() => setOpenProfile(!openProfile)}
                      className="h-6 mt-4 hover:text-gray-300 hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </ul>
          </form>
        
      </div>
    </>
  );
};

export default Navbar;
