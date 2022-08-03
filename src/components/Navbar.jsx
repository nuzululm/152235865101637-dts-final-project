import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../assets/logo.png";
import ProfileImage from "../assets/profile.png";
import { Link, NavLink } from "react-router-dom";
import { auth, logout } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { RiLoginBoxLine } from "react-icons/ri";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const [user] = useAuthState(auth);

  const onLogout = () => {
    logout();
    setIsUserOpen(!isUserOpen);
  };

  return (
    <>
      <nav className="bg-neutral-50 shadow-md">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex flex-shrink-0">
                <img className="h-8 w-8" src={Logo} alt="Logo" />
                <p className="text-xl text-gray-800 ml-2 font-semibold">
                  komiKuy
                </p>
              </div>
              <div className="hidden md:block">
                <div className="ml-40 flex items-baseline justify-center">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-sky-700 font-medium hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                        : "text-gray-800 hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/manga"
                    className={({ isActive }) =>
                      isActive
                        ? "text-sky-700 font-medium hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                        : "text-gray-800 hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                    }
                  >
                    Manga
                  </NavLink>

                  <NavLink
                    to="/manhua"
                    className={({ isActive }) =>
                      isActive
                        ? "text-sky-700 font-medium hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                        : "text-gray-800 hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                    }
                  >
                    Manhua
                  </NavLink>

                  <NavLink
                    to="/manhwa"
                    className={({ isActive }) =>
                      isActive
                        ? "text-sky-700 font-medium hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                        : "text-gray-800 hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                    }
                  >
                    Manhwa
                  </NavLink>

                  <NavLink
                    to="/search"
                    className={({ isActive }) =>
                      isActive
                        ? "text-sky-700 font-medium hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                        : "text-gray-800 hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                    }
                  >
                    Search
                  </NavLink>
                </div>
              </div>
            </div>
            {/* User Desktop  */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  {user ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setIsUserOpen(!isUserOpen)}
                        className="max-w-xs bg-neutral-50 rounded-lg flex items-center text-sm focus:outline-none text-gray-800 hover:text-sky-700 font-regular hover:font-medium"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open user menu</span>
                        <p className="mx-2 cursor-pointer">{user.email}</p>
                        <img
                          className="h-8 w-8 rounded-lg"
                          src={ProfileImage}
                          alt="Profile"
                        />
                      </button>
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className="max-w-xs bg-neutral-50 rounded-lg flex items-center text-sm focus:outline-none text-gray-800 hover:text-sky-700 font-regular hover:font-medium"
                    >
                      <p className="mx-2 cursor-pointer text-md">Login</p>
                      <RiLoginBoxLine className="h-5 w-5" />
                    </Link>
                  )}

                  {isUserOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-neutral-100 ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      <button
                        onClick={onLogout}
                        className="block px-4 py-2 text-sm text-slate-800 cursor-pointer"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Button Mobile  */}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-sky-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-700 focus:ring-sky-700"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <Transition
          show={isMobileOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-700 font-medium hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                    : "text-gray-800 hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/manga"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-700 font-medium hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                    : "text-gray-800 hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                }
              >
                Manga
              </NavLink>

              <NavLink
                to="/manhua"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-700 font-medium hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                    : "text-gray-800 hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                }
              >
                Manhua
              </NavLink>

              <NavLink
                to="/manhwa"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-700 font-medium hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                    : "text-gray-800 hover:text-sky-700 hover:font-medium px-3 py-2 rounded-md text-sm font-regular cursor-pointer"
                }
              >
                Manhwa
              </NavLink>
            </div>
            {/* User Mobile  */}
            <div className="pt-4 pb-3 border-t border-sky-200">
              {user ? (
                <div>
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-lg"
                        src={ProfileImage}
                        alt="Profile"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-semibold leading-none text-gray-800 ">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    <button
                      onClick={onLogout}
                      className="block px-3 py-2 rounded-md text-base font-regular text-slate-800 hover:text-sky-700 hover:bg-neutral-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mt-3 px-2 space-y-1">
                    <Link
                      to="/login"
                      className="block px-3 py-2 rounded-md text-base font-regular text-gray-800 hover:text-sky-700 hover:bg-neutral-100"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Transition>
      </nav>
    </>
  );
};

export default Navbar;
