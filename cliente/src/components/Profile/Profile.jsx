import { axios } from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../../utils/httpClient';
import style from './profileCSS.scss';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import File from '../File';
import TextArea from '../TextArea';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
export const ProfileEdit = () => {
  const [userData, setUserData] = useState({

 

  });



  useEffect(() => {
    async function getData() {
      await httpClient
        .get(`/user`)
        .then(x => {
          setUserData(x.data);
        });



    }
        getData();

      },
  
       [])
       const handleChange = e => {
        setUserData({
          ...userData,
          [e.target.name]: e.target.value
        });

        console.log(userData)
      };

  const editInputEnter = e => {
    e.preventDefault();
   
document.getElementById("input-"+e.target.value).disabled=false;

document.getElementById("input-"+e.target.value).focus();

  };



  const editInputExit = e => {
    document.getElementById(e.target.id).disabled=true;
    


    httpClient.post(`/edit-user`, { userData })


    
      };
  return (
    <>
    <div className="main-content">
    
    <div className="header pb-8 pt-5 d-flex align-items-center" >
      <span className="mask bg-gradient-default opacity-8"></span>
      <div className="container-fluid d-flex align-items-center">
        <div className="row">
          <div className="col-lg-7 col-md-10">
            <h1 className="display-2 text-white">Hello {userData.name}</h1>
            <p className="text-white mt-0 mb-2">This is your profile page. You can manage or edit your personal information</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid mt--7">
      <div className="row">
        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
           
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <span className="heading">22</span>
                      <span className="description">Friends</span>
                    </div>
                    <div>
                      <span className="heading">10</span>
                      <span className="description">Photos</span>
                    </div>
                    <div>
                      <span className="heading">89</span>
                      <span className="description">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3>
                  Jessica Jones<span className="font-weight-light">, 27</span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i>Bucharest, Romania
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                </div>
                <div>
                  <i className="ni education_hat mr-2"></i>University of Computer Science
                </div>
                <hr className="my-4"/>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 order-xl-1">
          <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">My account</h3>
                </div>
                
              </div>
            </div>
            <div className="card-body">
              <form>
                <h6 className="heading-small text-muted mb-4">User information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-username">Username</label>
                        
                        <input name="user" onChange={handleChange} onBlur={editInputExit} type="text" id="input-username" className="form-control form-control-alternative" disabled placeholder="Username" defaultValue={userData.user}/>
                        
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" for="input-email">Email address</label>
                        <div className='d-flex'>
                        <input name="mail" onChange={handleChange} type="email" onBlur={editInputExit} id="input-email" className="form-control form-control-alternative" disabled defaultValue={userData.mail}/>
                        <button onClick={editInputEnter} value="email" className='pl-3'>
                      <FontAwesomeIcon
                        icon={faPencil}
                        style={{ fontSize: 17,color:"black"}}
                      />
                      
                    </button>
                    </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-first-name">First name</label>
                        <div className='d-flex'>
                        <input name="name" onChange={handleChange} onBlur={editInputExit} type="text" id="input-first-name" className="form-control form-control-alternative" disabled placeholder="First name" defaultValue={userData.name}/>
                        
                        <button onClick={editInputEnter} value="first-name"  className='pl-3'>
                      <FontAwesomeIcon
                        icon={faPencil}
                        style={{ fontSize: 17,color:"black"}}
                      />
                      
                    </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-last-name">Last name</label>
                        <div className='d-flex'>
                        <input name="surname" onChange={handleChange} onBlur={editInputExit} type="text" id="input-last-name" className="form-control form-control-alternative" disabled placeholder="Last name" defaultValue={userData.surname}/>
                        <button onClick={editInputEnter} value="last-name" className='pl-3'>
                      <FontAwesomeIcon
                        icon={faPencil}
                        style={{ fontSize: 17,color:"black"}}
                      />
                      
                    </button>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4"/>
                <h6 className="heading-small text-muted mb-4">Contact information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-address">Address</label>
                        <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-city">City</label>
                        <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value="New York"/>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-country">Country</label>
                        <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value="United States"/>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="form-control-label" for="input-country">Postal code</label>
                        <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code"/>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4"/>
                <h6 className="heading-small text-muted mb-4">About me</h6>
                <div className="pl-lg-4">
                  <div className="form-group focused">
                    <label>About Me</label>
                    <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};
