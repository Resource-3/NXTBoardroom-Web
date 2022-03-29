import React from 'react';
import { connect } from "react-redux";

const Header = ({ strings }) => {
  
  return (
    <div className="header">
       header
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);