import "./App.css";
import { motion } from "framer-motion";
import {
  LocalParkingRounded,
  HomeRounded,
  SettingsRemoteRounded,
  TocRounded,
  
} from "@material-ui/icons";
import DirectionsCarIconRounded from '@mui/icons-material/DirectionsCar';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Item from "./Item";
import { useState } from "react";
import {Link} from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
function SideMenu() {
  const [open, setOpen] = useState(true);

  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "16%",
      
    },
    false: {
      transition: {
        delay: 0.6,
        
      },
      width: "10%",
    },
  };

  const sidebarVariants = {
    true: {
    
    },
    false: {
      width: "100%",
      transition: {
        delay: 0.4,
      },
      
    },
  };

  const end = {
    true: {
      marginRight:0,
      transition: {
        
      },
     
    },
    false:{
      margin: "0 auto",
      transition: {
        delay: 0.4,
      },
    }
  };
  
  return (
    <>
      <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            variants={end}
            end={`${open}`}
            className="lines_icon"
          >
            <TocRounded />
          </motion.div>
         <br/>
  <br/>
            {/* group 1 */}
            
            <div className="group" >
        
             <Link to="/main" className="links"><Item icon={<HomeRounded />} name="Home"/></Link>

             
            </div>
          {/* group 2 */}
          
          <div className="group">
          <motion.h2
              animate={{ opacity: open ? 0 : 1, height: open ? "auto" : 0 }}
              
            >
             <div className="line"></div>
            </motion.h2>
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              
            >
              PERSONAL PROPERTY
            </motion.h3>
            
            <Link to="/cars" className="links">  <Item icon={<DirectionsCarIconRounded/>} name="My Vehicles" /></Link>
            <Link to="/" className="links">  <Item icon={<LocalParkingRounded />} name="Parking Places" /></Link>
            <Link to="/" className="links">  <Item icon={<ReceiptLongIcon />} name="Bills" /></Link>

           
          </div>
          
          {/* group 3 */}
          <div className="group">
          <motion.h2
              animate={{ opacity: open ? 0 : 1, height: open ? "auto" : 0 }}
              
            >
             <div className="line"></div>
            </motion.h2>
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              PROFILE
            </motion.h3>
            <Link to="/" className="links"><Item icon={<ManageAccountsRoundedIcon />} name="Edit"/></Link>
            <Link to="/" className="links"><Item icon={<LogoutIcon />} name="Log Out"/></Link>
           
          </div>
       
        </motion.div>
      </motion.div>

      <div className="body_container">
        
      </div>
      </>
  
  );
}

export default SideMenu;
