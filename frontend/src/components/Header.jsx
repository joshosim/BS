import { useState } from 'react'
import { Dialog, Disclosure, Popover } from '@headlessui/react'
import {
    Bars3Icon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png";
// import Home from '../pages/Home';
export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // const [search, setSearch] = useState('');


    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 px-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to='/'>
                        <img src={Logo} alt="logo" className='w-16' />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            <Link to='/'>Books</Link>
                        </Popover.Button>
                    </Popover>
                    <Link to="/favourite" className="text-sm font-semibold leading-6 text-gray-900">
                        Favourite
                    </Link>
                    <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                        About Company
                    </Link>

                    <div className='border-2 border-blue-500 rounded-lg flex items-center justify-between p-0'>
                        <input type="text" className='outline-none px-2 rounded-lg' />
                        {/* onChange={(e) => setSearch(e.target.value)} */}
                        <div className=' bg-blue-500 hover:bg-blue-800'>
                            <svg xmlns="http://www.w3.org/2000/svg" color='white' fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 m-2 rounded-l-lg cursor-pointer ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>

                    </div>

                    <Link to='/addbook' className="cursor-pointer bg-blue-500 rounded-full p-2.5 shadow-lg border-none hover:scale-105">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to='/login' className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            {/* <Home search={search} /> */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to='/'>
                            <img src={Logo} alt="logo" className='w-16' />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 flex justify-end"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Bars3Icon className='w-6' />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                <Link to='/'> Books</Link>
                                            </Disclosure.Button>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    to="/favourite"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Favourite
                                </Link>
                                <Link
                                    to="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About Company
                                </Link>

                            </div>
                            <div className="py-6">
                                <Link

                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log out
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
