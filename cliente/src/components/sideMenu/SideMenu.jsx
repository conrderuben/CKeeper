import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { httpClient } from '../../utils/httpClient';
import style from './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faMagnifyingGlass,
  faCar,
  faSquareParking,
  faFileInvoice,
  faUser,
  faGear,
  faArrowRightFromBracket,
  faBars
} from '@fortawesome/free-solid-svg-icons';

function SideMenu(props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const [user, setUser] = useState();
  useEffect(() => {
    async function getData() {
      await httpClient.get('user').then(x => {
        setUser(x.data.user);
      });
    }

    getData();
  }, []);

  const handleLogOut = () => {
    httpClient.get('logout').then(res => {
      if (!res.data.error) {
      } else {
        navigate('/');
      }
    });
  };

  if (user === 'Admin123') {
    return (
      <div className="bg-gray-900" id="containerMax">
        <input type="checkbox" id="check1" />
        <label htmlFor="check1" className="checkbtn1">
          <FontAwesomeIcon icon={faBars} id="icono1" />
        </label>
        <div
          className="flex flex-col top-0 left-0 w-1/7 bg-gray-900 h-full shadow-lg"
          id="container1"
        >
          <div className="flex items-center pl-6 h-20 border-b border-gray-800" id="profile1">
            <img
              src={require('../../assets/img/avatar.png')}
              alt=""
              className="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-blue-500"
            />
            <div className="ml-1">
              <p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">
                {user}
              </p>
              <div className="badge">
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">
                  Admin
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-y-hidden overflow-x-hidden flex-grow" id="menu1">
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
                  to="/users"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                    Users
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin-search"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                    Search
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLogOut}
                  to="/"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                    Log Out
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-gray-900" id="containerMax">
        <input type="checkbox" id="check1" />
        <label htmlFor="check1" className="checkbtn1">
          <FontAwesomeIcon icon={faBars} id="icono1" />
        </label>
        <div
          className="flex flex-col top-0 left-0 w-1/7 bg-gray-900 h-full shadow-lg"
          id="container1"
        >
          <div className="flex items-center pl-6 h-20 border-b border-gray-800" id="profile1">
            <img
              src={require('../../assets/img/avatar.png')}
              alt=""
              className="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-blue-500"
            />
            <div className="ml-1">
              <p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">
                {user}
              </p>
              <div className="badge">
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">
                  user
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-y-hidden overflow-x-hidden flex-grow" id="menu1">
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
                    <FontAwesomeIcon icon={faHouse} />
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
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
                    <FontAwesomeIcon icon={faCar} />
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                    Vehicles
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/places"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faSquareParking} />
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                    Parking Places
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/bills"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faFileInvoice} />
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                    Bills
                  </span>
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
                <Link
                  to="/profile"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                    Profile
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLogOut}
                  to="/"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                    Log Out
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
