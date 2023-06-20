import { useState } from 'react';
import { Transition } from '@headlessui/react';

function NizzleNav() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-teal-700 shadow-md text-white flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between md:justify-around w-full items-center">
        <div>
          <a href="#Home" className="font-bold text-lg">
            NIZZLE
          </a>
        </div>
        
        <div className='hidden lg:flex'>
          <a href="#Home" className="block py-2 px-4 mt-4 lg:inline-block lg:mt-0 text-white hover:bg-teal-600">
            Home
          </a>          
          <a href="#Plugins" className="block py-2 px-4 mt-4 lg:inline-block lg:mt-0 text-white hover:bg-teal-600">
            Plugins
          </a>
          <a href="#Contact" className="block py-2 px-4 mt-4 lg:inline-block lg:mt-0 text-white hover:bg-teal-600">
            Contact
          </a>
        </div>
        
      </div>
      <div className="flex items-center justify-end">
        <Transition
          show={!expanded}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={handleToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </Transition>
        <Transition
          show={expanded}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div
              ref={ref}
              className="lg:flex lg:items-center absolute top-0 right-0 bg-teal-700 h-screen w-full lg:h-auto lg:w-auto lg:relative"
            >
              <button
                className="lg:hidden text-white focus:outline-none ml-auto"
                onClick={handleToggle}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="lg:flex-grow">
                <a
                  href="#Home"
                  className="block py-2 px-4 mt-4 lg:inline-block lg:mt-0 text-white hover:bg-teal-600"
                  onClick={handleLinkClick}
                >
                  Home
                </a>
                <a
                  href="#About"
                  className="block py-2 px-4 mt-4 lg:inline-block lg:mt-0 text-white hover:bg-teal-600"
                  onClick={handleLinkClick}
                >
                  About
                </a>
                <a
                  href="#Plugins"
                  className="block py-2 px-4 mt-4 lg:inline-block lg:mt-0 text-white hover:bg-teal-600"
                  onClick={handleLinkClick}
                >
                  Plugins
                </a>
                <a
                  href="#Contact"
                  className="block py-2 px-4 mt-4 lg:inline-block lg:mt-0 text-white hover:bg-teal-600"
                  onClick={handleLinkClick}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </nav>
  );
}

export default NizzleNav;
