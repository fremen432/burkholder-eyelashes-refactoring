import { Disclosure, Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
// import { BellIcon, UserIcon } from '@heroicons/react/solid';
import { BellIcon, UserIcon } from '@heroicons/react/outline'

import BellIconBtn from './bellIcon';

import Auth from '../../utils/auth';

import stockUserPic from '../../assets/images/stock-user-pic.jpeg'

// import { get } from 'mongoose';

// const notificationBell = JSON.parse(bellIconBtn)

// const userImageLink = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`
const userImageLink = stockUserPic

function classNames(...classes) { return classes.filter(Boolean).join(' ') }

function getProfile() { console.log(Auth.getProfile()) }

function UserIconAndNotificationBell() {
   const loggedIn = Auth.loggedIn();

    return (
        <>
            {/* If user is logged in, show user icon and bell icon. Otherwise show nothing */}
            {loggedIn ? (
            <div className="hidden lg:block lg:flex lg:items-center">

                {/* Bell Icon Button */}
                <BellIconBtn />
                {/* Profile dropdown */}
                <Menu as="div" className="  relative flex-shrink-0 ">
                    {/* <button onClick={getProfile}>
                        getProfile
                    </button> */}
                    {/* Open profile button */}
                    <div className=" flex justify-center align-center ">
                        <Menu.Button className="px-2 rounded-full flex justify-center align-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            {/* User Image */}
                            <span className="sr-only">Open user menu</span>
                            {/* <UserIcon className="w-6 h-6" aria-hidden="true" /> */}
                            <img className=" w-8 h-8 rounded-full" src={userImageLink} alt="" />
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
                        <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                            <a
                                href="/"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                                Your Profile
                            </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <a
                                href="/"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                                Settings
                            </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <a
                                href="/"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                                Sign out
                            </a>
                            )}
                        </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>

            </div>
            ) : null}


        </>
    )
}

export default UserIconAndNotificationBell;
