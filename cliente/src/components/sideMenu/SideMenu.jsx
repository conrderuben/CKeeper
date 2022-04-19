import './App.css';
import { motion } from 'framer-motion';
import {
  LocalParkingRounded,
  HomeRounded,
  SettingsRemoteRounded,
  TocRounded
} from '@material-ui/icons';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DirectionsCarIconRounded from '@mui/icons-material/DirectionsCar';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Item from './Item';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import Cookies from 'universal-cookie';

function SideMenu(props) {
  const [open, setOpen] = useState(true);

  const handleLogOut = () => {
    
  };

  return (
    <div className="flex flex-col top-0 left-0 w-1/7 bg-gray-900 h-full shadow-lg">
      <div className="flex items-center pl-6 h-20 border-b border-gray-800">
        <img
          src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.0-9/117334168_2606581056324669_4951020710334194218_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFo4bRKc5SfTQvzhwotnTaOfj1P6rO41HF-PU_qs7jUcU1pCerqu3HUsOB0yKyJQwnrgz8Au7GZADcpedo6WgM4&_nc_ohc=DWpkI3p4RSUAX_hKF_Y&_nc_ht=scontent.fmnl13-1.fna&oh=c13c63ee952123b14f0da72b99ccecc8&oe=6087FEC5"
          alt=""
          className="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-blue-500"
        />
        <div className="ml-1">
          <p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">
            {props.user}
          </p>
          <div className="badge">
            <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">
              Admin
            </span>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="flex flex-col py-6 space-y-1">
          <li className="px-5">
            <div className="flex flex-row items-center h-8">
              <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">
                dashboard
              </div>
            </div>
          </li>
          <li>
            <Link
              to="/main"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <HomeRounded />
              </span>
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <SearchRoundedIcon />
              </span>
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                Search
              </span>
            </Link>
          </li>
          <li className="px-5">
            <div className="flex flex-row items-center h-8">
              <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">
                personal property
              </div>
            </div>
          </li>
          <li>
            <Link
              to="/cars"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <DirectionsCarIconRounded />
              </span>
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                Vehicles
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <LocalParkingRounded />
              </span>
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                Parking Places
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <ReceiptLongIcon />
              </span>
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Bills</span>
            </Link>
          </li>
          <li className="px-5">
            <div className="flex flex-row items-center h-8">
              <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">
                Settings
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                Profile
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                Settings
              </span>
            </a>
          </li>

          <li>
            <Link
              onClick={handleLogOut}
              to="/"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <LogoutIcon />
              </span>
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                Log Out
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    //{' '}

    // <>
    //   <motion.div
    //     data-Open={open}
    //     variants={sideContainerVariants}
    //     initial={`${open}`}
    //     animate={`${open}`}
    //     className="sidebar_container"
    //   >
    //     {/* sidebar div */}
    //     <motion.div
    //       className="sidebar"
    //       initial={`${open}`}
    //       animate={`${open}`}
    //       s
    //       variants={sidebarVariants}
    //     >
    //       {/* lines_icon */}
    //       <motion.div
    //         whileHover={{
    //           scale: 1.2,
    //           rotate: 180,
    //           backgroundColor: 'rgba(255, 255, 255, 0.3)',
    //           backdropFilter: 'blur(3.5px)',
    //           WebkitBackdropFilter: 'blur(3.5px)',
    //           border: '1px solid rgba( 255, 255, 255, 0.18 )',
    //           transition: {
    //             delay: 0.2,
    //             duration: 0.4
    //           }
    //         }}
    //         onClick={handleToggle}
    //         variants={end}
    //         end={`${open}`}
    //         className="lines_icon"
    //       >
    //         <TocRounded />
    //       </motion.div>
    //       <br />
    //       <br />
    //       {/* group 1 */}

    //       <div className="group">
    //         <Link to="/main" className="links">
    //           <Item icon={<HomeRounded />} name="Home" />
    //         </Link>

    //         <Link to="" className="links">
    //           <Item icon={<SearchRoundedIcon />} name="Search" />
    //         </Link>
    //       </div>
    //       {/* group 2 */}

    //       <div className="group">
    //         <motion.h2 animate={{ opacity: open ? 0 : 1, height: open ? 'auto' : 0 }}>
    //           <div className="line"></div>
    //         </motion.h2>
    //         <motion.h3 animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}>
    //           PERSONAL PROPERTY
    //         </motion.h3>

    //         <Link to="/cars" className="links">
    //           {' '}
    //           <Item icon={<DirectionsCarIconRounded />} name="My Vehicles" />
    //         </Link>
    //         <Link to="/" className="links">
    //           {' '}
    //           <Item icon={<LocalParkingRounded />} name="Parking Places" />
    //         </Link>
    //         <Link to="/" onClick={handleLogOut} className="links">
    //           {' '}
    //           <Item icon={<ReceiptLongIcon />} name="Bills" />
    //         </Link>
    //       </div>

    //       {/* group 3 */}
    //       <div className="group">
    //         <motion.h2 animate={{ opacity: open ? 0 : 1, height: open ? 'auto' : 0 }}>
    //           <div className="line"></div>
    //         </motion.h2>
    //         <motion.h3 animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}>
    //           PROFILE
    //         </motion.h3>
    //         <Link to="/" className="links">
    //           <Item icon={<ManageAccountsRoundedIcon />} name="Edit" />
    //         </Link>
    //         <Link to="/" onClick={handleLogOut} className="links">
    //           <Item icon={<LogoutIcon />} name="Log Out" />
    //         </Link>
    //       </div>
    //     </motion.div>
    //   </motion.div>

    //   <div className="body_container"></div>
    // </>
  );
}

export default SideMenu;
