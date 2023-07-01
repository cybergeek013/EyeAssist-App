import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Logo from "../../../assets/Logo.png";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Gnavbar() {
  return (
    <Disclosure as="nav" className="bg-[--dark_green]">
      {({ open }) => (
        <>
          <div className="flex items-start justify-between mx-6 py-2">
            <div className="flex">
              <div>
                <img
                  className="block h-8 w-auto"
                  src={Logo}
                  alt="Your Company"
                />
              </div>
              <div className="italic text-[--light_green] text-xl font-bold">
                Eye<span className="text-[--orange_color]">Assist</span>
              </div>
            </div>
            <div className="flex">
              <div className="text-[--white_color] bg-[--light_green] rounded px-2 py-1.5 mx-2">
                <a href="/guardian">Dashboard</a>
              </div>
              <div>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-[--white_color] text-sm focus:outline-none focus:ring-2 focus:ring-[--orange_color] focus:ring-offset-2 focus:ring-offset-[--medium_green]">
                      <span className="sr-only">Open user menu</span>
                      <UserCircleIcon
                        className="h-8 w-8 rounded-full"
                        src={UserCircleIcon}
                        alt="Photo"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/geditprofile"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/login"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
