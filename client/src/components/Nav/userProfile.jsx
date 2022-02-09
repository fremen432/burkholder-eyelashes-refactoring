import { Disclosure, Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

import Auth from '../../utils/auth';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function UserProfile() {
   const loggedIn = Auth.loggedIn();

    return (
        <>
            {/* If user is logged in, show user icon and bell icon. Otherwise show nothing */}
            {loggedIn ? (
            <div className="hidden lg:ml-4 lg:flex lg:items-center">

                {/* Bell Icon Button */}
                <button
                type="button"
                className="flex-shrink-0 p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                {/* <span className="sr-only">View notifications</span>
                <BellIcon className="w-6 h-6" aria-hidden="true" /> */}
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative flex-shrink-0 ml-4">


                {/* Open profile button */}
                <div>
                    <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open user menu</span>
                    {/* User Image */}
                    <img
                        className="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
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

export default UserProfile;
