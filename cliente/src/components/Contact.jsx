import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 0;
  width: 100vw;
  height: 100vh;
  @media only screen and (min-width: 851px) {
    #formContainer {
      padding-top: 25vh !important;
      padding-right: 10vw !important;
    }
    #send {
      padding-left: 5vw !important;
      padding-right: 5vw !important;
      color: white !important;
      text-decoration: none;
    }
  }
  @media only screen and (max-width: 850px) {
    #iframe {
      display: none;
    }
    #formContainer {
      padding: 0 !important;
      padding-top: 12vh !important;
    }
    #form {
      width: 100vw !important;
      height: 60vh;
    }
    #send {
      color: white !important;
      text-decoration: none;
    }
  }
`;

const Contacto = () => {
  return (
    <Container>
      <div className="absolute inset-0 bg-blue-300" id="iframeContainer">
        <iframe
          id="iframe"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19616.795515248163!2d-3.5194618144854872!3d40.42655732538545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1654157929322!5m2!1ses!2ses"
          width="80%"
          height="80%"
          style={{ border: 0, marginTop: 100, marginLeft: 160, borderRadius: 10 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container px-5 py-24 " id="formContainer">
        <div
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
          id="form"
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Contact us to solve your problems</p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            <a
              href="mailto:email1@email.com?body=Este%20es%20el%20cuerpo%20del%20mensaje"
              id="send"
            >
              Send{' '}
            </a>
          </button>
          <p className="text-xs text-gray-500 mt-3">We will help you as soon as possible</p>
        </div>
      </div>
    </Container>
  );
};

export default Contacto;
