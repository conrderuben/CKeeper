import { React, useState, useEffect } from 'react';
import { httpClient } from '../../utils/httpClient';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './style.css';

const Login = () => {
  const [form, setForm] = useState({});
  const [msg, setMsg] = useState('');
  const location = useLocation();

  const navigate = useNavigate();
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (location.search == '?verifyMessage=true') {
      document.getElementById('verifyMailDiv').style.display = 'block';
    }
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    httpClient.post('/login', { form }).then(res => {
      if (!res.data.error) {
        navigate('/main');
      } else {
        setMsg(res.data.error);
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
              <a href="/">Return home</a>
            </div>
            <div className="contact">
              <form onSubmit={handleSubmit}>
                <h3>SIGN IN</h3>
                <input
                  name="user"
                  onChange={handleChange}
                  type="text"
                  placeholder="USERNAME OR EMAIL"
                />
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
        <div
          class="alert alert-warning alert-dismissible fade show custom-alert"
          id="verifyMailDiv"
          style={{ display: 'none' }}
          role="alert"
        >
          A Message has sent to your mail
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        {msg != '' && (
          <div class="alert alert-warning alert-dismissible fade show custom-alert" role="alert">
            {msg}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
      </section>
    </>
  );
};

export default Login;
