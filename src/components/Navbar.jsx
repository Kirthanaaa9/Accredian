import { useState, useEffect, useRef } from "react";


const Navbar = () => {
  const [menuState, setMenuState] = useState({
    mobileMenu: false,
    coursesDropdown: false,
    profileDropdown: false
  });

  const dropdownRef = useRef(null);

  return (
    <nav className="bg-gray-800">

  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      {/* Mobile menu button */}
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
        {/* //   <!--
        //     Icon when menu is closed.

        //     Menu open: "hidden", Menu closed: "block"
        //   --> */}
          <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
           </svg>
        {/* //   <!--
        //     Icon when menu is open.

        //     Menu open: "block", Menu closed: "hidden"
        //   --> */} 
          <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
          <img className="h-8 w-auto" src="data:image/jpeg;base64,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" alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {/* // <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
    <div className="relative inline-block text-left" ref={dropdownRef}>

                
  <div>
    <button 
      type="button" 
      className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50" 
      id="menu-button" 
      aria-expanded={menuState.coursesDropdown} 
      aria-haspopup="true" 
      onClick={() => setMenuState(prev => ({...prev, coursesDropdown: !prev.coursesDropdown}))}
    >

      Courses
      <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden ${menuState.coursesDropdown ? 'block' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">

    <div className="py-1" role="none">
      {/* <!-- Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" --> */}
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0" onClick={() => setMenuState(prev => ({...prev, coursesDropdown: false}))}>Artificial Intelligence</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1" onClick={() => setMenuState(prev => ({...prev, coursesDropdown: false}))}>Web Development</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2" onClick={() => setMenuState(prev => ({...prev, coursesDropdown: false}))}>Data Science</a>

      </div>
  </div>
</div>
           
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button 
              type="button" 
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" 
              onClick={() => setMenuState(prev => ({ ...prev, mobileMenu: !prev.mobileMenu }))}
            >
              Menu
            </button>
            <div className={`sm:hidden ${menuState.mobileMenu ? 'block' : 'hidden'}`}>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white" onClick={() => setMenuState(prev => ({...prev, mobileMenu: false}))}>Refer & Earn</a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white" onClick={() => setMenuState(prev => ({...prev, mobileMenu: false}))}>About Us</a>

            </div>

           
        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button>

        {/* // <!-- Profile dropdown --> */}
        <div className="relative ml-3" ref={dropdownRef}>

  <div>
    <button 
      type="button" 
      onClick={() => setMenuState(prev => ({...prev, profileDropdown: !prev.profileDropdown}))}  

      className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
      id="user-menu-button" 
      aria-expanded={menuState.profileDropdown} 

      aria-haspopup="true"
    >
      <span className="absolute -inset-1.5"></span>
      <span className="sr-only">Open user menu</span>
      <img 
        className="size-8 rounded-full" 
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
        alt="User Profile"
      />
    </button>
  </div>



        {/* //   <!--
        //     Dropdown menu, show/hide based on menu state.

        //     Entering: "transition ease-out duration-100"
        //       From: "transform opacity-0 scale-95"
        //       To: "transform opacity-100 scale-100"
        //     Leaving: "transition ease-in duration-75"
        //       From: "transform opacity-100 scale-100"
        //       To: "transform opacity-0 scale-95"
        //   --> */}
          <div className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden ${menuState.profileDropdown ? 'block' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">

            {/* // <!-- Active: "bg-gray-100 outline-hidden", Not Active: "" --> */}
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0" onClick={() => setMenuState(prev => ({...prev, profileDropdown: false}))}>Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1" onClick={() => setMenuState(prev => ({...prev, profileDropdown: false}))}>Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2" onClick={() => setMenuState(prev => ({...prev, profileDropdown: false}))}>Sign out</a>

          </div>
        </div>
      </div>
    </div>
  </div>
{/* 
//   <!-- Mobile menu, show/hide based on menu state. --> */}
  <div className={`sm:hidden ${menuState.mobileMenu ? 'block' : 'hidden'}`} id="mobile-menu">

    <div className="space-y-1 px-2 pt-2 pb-3">
    {/* //   <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page" onClick={() => setMenuState(prev => ({...prev, mobileMenu: false}))}>Dashboard</a>

      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Refer And Earn</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Courses</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About us</a>
    </div>
  </div>
</nav>

    );
};
export default Navbar;
