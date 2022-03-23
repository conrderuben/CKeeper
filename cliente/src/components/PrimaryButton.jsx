import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
const PrimaryButton = ({ children }) => {
  return (
    <button type="button" className="btn btn-primary">
      {children}
    </button>
  );
};

export default PrimaryButton;
