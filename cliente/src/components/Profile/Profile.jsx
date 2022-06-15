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
import { faPencil,faEye } from '@fortawesome/free-solid-svg-icons';
export const ProfileEdit = () => {
  const [userData, setUserData] = useState({});
  const fiveDigits = 10000 + Math.random() * 90000;
  const [random, setRandom] = useState({ random: Math.floor(fiveDigits) });
  const [numberDataAll, setNumberDataAll] = useState({});
  useEffect(() => {
    async function getData() {
      await httpClient.get(`/user`).then(x => {
        setUserData(x.data);
          httpClient.get(`/number-data/${x.data.id}`).then(x => {
          setNumberDataAll(x.data);
        });


        
      });
    }
    getData();
  }, []);
  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };
  const editInputEnter = e => {
    e.preventDefault();

    document.getElementById('input-' + e.target.value).disabled = false;
    document.getElementById('input-' + e.target.value).focus();
  };

  const editInputExit = e => {
    document.getElementById(e.target.id).disabled = true;
    httpClient.post(`/edit-user`, { userData });
  };

  useEffect(() => {
    async function getData() {
      await httpClient.get(`/number-data/${userData.id}`).then(x => {
        setNumberDataAll(x.data);
      });
    }
    getData();
  }, []);

  const editPassword = e => {
    document.getElementById('resetPasswordContainer').style.display = 'none';
    alert('YOUR PASSWORD HAS BEEN UPDATED');
    httpClient.post(`/edit-userPassword`, { userData });
  };

  var errors = 1;
  const showPasswordFields = e => {
    e.preventDefault();

    if (e.target.name == 'showPasswordFields') {
      document.getElementById('verificationDiv').style.display = 'flex';
      document.getElementById('verificationContent').innerHTML =
        'An email has sent to your mail address';
      document.getElementById('understoodButton').style.display = 'none';

      httpClient.post(`/reset-password/${random.random}`);
    }
    if (e.target.name == 'verifyPassword') {
      if (document.getElementById('confirmationCode').value == random.random) {
        alert('CORRECTO');
        document.getElementById('closeButtonModal').click();
        document.getElementById('resetPasswordContainer').style.display = 'flex';
        document.getElementById('resetPasswordButton').style.display = 'none';
      } else {
        alert('ERROR');
        errors = errors + 1;
        if (errors >= 4) {
          alert('YOU EXCEED THE NUMBER OF ERRORS, TRY AGAIN LATER');
          document.getElementById('closeButtonModal').click();
          document.getElementById('resetPasswordButton').style.display = 'none';
        }
      }
    }
  };
  const confirmPasswordFunction = e => {
    e.preventDefault();
    var password = document.getElementById('newPassword').value;

    var confirmNewPassword = document.getElementById('confirmNewPassword').value;

    if (password == confirmNewPassword && password.length>=6 ) {
      var num=0;
      for (var i=0;i<password.length;i++){
        
        if (password.charAt(i)=="1" || password.charAt(i)=="2" || password.charAt(i)=="3" || password.charAt(i)=="4"|| password.charAt(i)=="5"|| password.charAt(i)=="6"|| password.charAt(i)=="7"|| password.charAt(i)=="8"|| password.charAt(i)=="9"|| password.charAt(i)=="0"){
          num=num+1;
                  }
      }
      if (num>=1){
        document.getElementById('modifyPassword').style.display = 'block';

      }
    }
    if (password != confirmNewPassword) {
      document.getElementById('modifyPassword').style.display = 'none';
    }
  };
  var a =0;
  const seeNewPassword = e => {
    e.preventDefault()
    
    a=a+1 
    if (a%2!=0){
      document.getElementById("newPassword").type="text";
    }
    else{
      document.getElementById("newPassword").type="password";
    }

  }
  var b =0;
  const seeConfirmNewPassword = e => {
    e.preventDefault()
    b=b+1 
    if (b%2!=0){
      document.getElementById("confirmNewPassword").type="text";    }
    else{
      document.getElementById("confirmNewPassword").type="password";
    }

  }
  return (
    <>
      <div className="main-content">
        <div className="header pb-8 pt-5 d-flex align-items-center">
          <span className="mask bg-gradient-default opacity-8"></span>
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <h1 className="display-2 text-white">Hello {userData.name}</h1>
                <p className="text-white mt-0 mb-2">
                  This is your profile page. You can manage or edit your personal information
                </p>
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
                        <img
                          src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                          className="rounded-circle"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">{numberDataAll.vehicles}</span>
                          <span className="description">Vehicles</span>
                        </div>
                        <div>
                          <span className="heading">{numberDataAll.places}</span>
                          <span className="description">Places</span>
                        </div>
                        <div>
                          <span className="heading">{numberDataAll.rents}</span>
                          <span className="description">Bills</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3>
                      {userData.name} {userData.surname}
                    </h3>

                  
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
                      <div className="row mb-7">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-username">
                              Username
                            </label>

                            <input
                              name="user"
                              onChange={handleChange}
                              onBlur={editInputExit}
                              type="text"
                              id="input-username"
                              className="form-control form-control-alternative "
                              disabled
                              placeholder="Username"
                              defaultValue={userData.user}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-email">
                              Email address
                            </label>
                            <div className="d-flex">
                              <input
                                name="mail"
                                onChange={handleChange}
                                type="email"
                                onBlur={editInputExit}
                                id="input-email"
                                className="form-control form-control-alternative"
                                disabled
                                defaultValue={userData.mail}
                              />
                              <button onClick={editInputEnter} value="email" className="pl-3">
                                <FontAwesomeIcon
                                  icon={faPencil}
                                  style={{ fontSize: 17, color: 'black' }}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-10 ">
                        <span
                          id="resetPasswordButton"
                          className="changePasswordButton"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <a href="#"></a>
                        </span>

                        <div style={{ display: 'none' }} id="resetPasswordContainer">
                          <div className="row mb-7 w-100 justify-content-center">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" htmlFor="newPassword">
                                  New Password
                                </label>

                                <div className="d-flex">
                                  <input
                                    name="password"
                                    onChange={handleChange}
                                    onKeyUp={confirmPasswordFunction}
                                    type="password"
                                    id="newPassword"
                                    className="form-control form-control-alternative "
                                    placeholder="Put your new password"
                                  />
                                  <button value="newPasswordButton" onClick={seeNewPassword} className="pl-3">
                                    <FontAwesomeIcon
                                      icon={faEye}
                                      
                                      style={{ fontSize: 17, color: 'black' }}
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label" htmlFor="confirmNewPassword">
                                  Confirm New Password
                                </label>
                                <div className="d-flex">
                                  <input
                                    name="confirmNewPassword"
                                    type="password"
                                    onKeyUp={confirmPasswordFunction}
                                    id="confirmNewPassword"
                                    className="form-control form-control-alternative"
                                    placeholder="Confirm your new password"
                                  />
                                  <button value="confirmNewPasswordButton" onClick={seeConfirmNewPassword} className="pl-3">
                                    <FontAwesomeIcon
                                    
                                      icon={faEye}
                                      style={{ fontSize: 17, color: 'black' }}
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              name="changePassword"
                              id="modifyPassword"
                              onClick={editPassword}
                              style={{ display: 'none' }}
                              className="btn btn-primary w-75"
                            >
                              Change It!
                            </button>
                          </div>
                        </div>

                        {/* MODAL BOOTSTRAP */}
                        <div id="modal-container">
                          <div
                            className="modal fade"
                            id="staticBackdrop"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title" id="staticBackdropLabel">
                                    Modal title
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  <p id="verificationContent">
                                    This action will send you an authentication code to your email
                                  </p>
                                  <div
                                    id="verificationDiv"
                                    className=" mt-5 justify-content-around"
                                    style={{ alignItems: 'center', display: 'none' }}
                                  >
                                    <div className="d-flex" style={{ alignItems: 'center' }}>
                                      <b className="mr-5">Verification Code:</b>
                                      <input
                                        type="number"
                                        className="form-control form-control-alternative border border-dark"
                                        style={{ width: '30%' }}
                                        id="confirmationCode"
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      name="verifyPassword"
                                      onClick={showPasswordFields}
                                      className="btn btn-primary"
                                    >
                                      Send
                                    </button>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    id="closeButtonModal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="button"
                                    onClick={showPasswordFields}
                                    id="understoodButton"
                                    name="showPasswordFields"
                                    className="btn btn-primary"
                                  >
                                    Understood
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row" id="passwordRow" style={{ display: 'none' }}>
                        <div className="col-lg-6">
                          <div className="form-group focused ">
                            <label className="form-control-label" htmlFor="input-password">
                              New Password
                            </label>
                            <div className="d-flex">
                              <input
                                id="input-password"
                                className="form-control form-control-alternative"
                                placeholder="New Password"
                                disabled
                                type="password"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused ">
                            <label className="form-control-label" htmlFor="input-confirmPassword">
                              Confirm Password
                            </label>
                            <div className="d-flex">
                              <input
                                id="input-confirmPassword"
                                className="form-control form-control-alternative"
                                placeholder="Confirm Password"
                                type="password"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Contact information</h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-first-name">
                              First name
                            </label>
                            <div className="d-flex">
                              <input
                                name="name"
                                onChange={handleChange}
                                onBlur={editInputExit}
                                type="text"
                                id="input-first-name"
                                className="form-control form-control-alternative"
                                disabled
                                placeholder="First name"
                                defaultValue={userData.name}
                              />

                              <button onClick={editInputEnter} value="first-name" className="pl-3">
                                <FontAwesomeIcon
                                  icon={faPencil}
                                  style={{ fontSize: 17, color: 'black' }}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-last-name">
                              Last Name
                            </label>
                            <div className="d-flex">
                              <input
                                name="surname"
                                onChange={handleChange}
                                onBlur={editInputExit}
                                type="text"
                                id="input-last-name"
                                className="form-control form-control-alternative"
                                disabled
                                placeholder="Last name"
                                defaultValue={userData.surname}
                              />
                              <button onClick={editInputEnter} value="last-name" className="pl-3">
                                <FontAwesomeIcon
                                  icon={faPencil}
                                  style={{ fontSize: 17, color: 'black' }}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused ">
                            <label className="form-control-label" htmlFor="input-phone">
                              Phone Number
                            </label>
                            <div className="d-flex">
                              <input
                                id="input-phone"
                                className="form-control form-control-alternative"
                                placeholder="Phone Number"
                                defaultValue={userData.phone}
                                disabled
                                type="text"
                              />
                              <button onClick={editInputEnter} value="phone" className="pl-3">
                                <FontAwesomeIcon
                                  icon={faPencil}
                                  style={{ fontSize: 17, color: 'black' }}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
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
