import React from 'react';
import style from './style.css';

const invoice = () => {
  const style = {
    height: '2px'
  };

  return (
    <div id='invoice' className=" p-10 mx-10 mt-10 bg-white rounded-lg fit-content">
      <h2 className="mb-10 text-xl tracking-widest uppercase">Invoice</h2>
      <span className="ml-2 font-mono text-base text-gray-400">#312</span>
      <span className="block w-16 mt-4 bg-blue-500" style={style}></span>

      <div className="mb-6">
        Web Design Services
        <span className="float-right text-green-400">$2,149.99</span>
        <div className="mt-2 text-sm text-gray-400 uppercase">18 july 2020</div>
      </div>

      <div className="flex justify-between pt-8 text-lg border-t border-gray-200">
        <button className="px-12 tracking-widest text-white uppercase bg-blue-600 rounded hover:bg-blue-500">
          Pay now
        </button>

        <div className="text-right">
          <div className="uppercase">Total</div>
          <span className="text-green-400 ml-5">$2,149.99</span>
        </div>
      </div>
    </div>
  );
};

export default invoice;
