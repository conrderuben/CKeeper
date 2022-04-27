import { Axios } from 'axios';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../../utils/httpClient';
import style from './style.css';
import fondo from '../../assets/img/fondo5.jpg';

const Login = () => {
  const [form, setForm] = useState({});

  const navigate = useNavigate();
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    httpClient.post('/login', { form }).then(res => {
      if (!res.data.error) {
        navigate('/main');
      } else {
        navigate('/login');
      }
    });
  };
  return (
    <>
      <section className="login">
        <div className="login_box">
          <div className="left">
            <div className="top_link">
              <a href="/">
                {/* <img
                  src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download"
                  alt=""
                /> */}
                Return home
              </a>
            </div>
            <div className="contact">
              <form onSubmit={handleSubmit}>
                <h3>SIGN IN</h3>
                <input name="user" onChange={handleChange} type="text" placeholder="USERNAME" />
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="PASSWORD"
                />
                <button className="submit">LET'S GO</button>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="right-text">
              <h2>Ckeeper</h2>
              <h5>AGENCY FOR BUYING AND SELLING PARKING SPACES</h5>
            </div>
            <div className="right-inductor"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
