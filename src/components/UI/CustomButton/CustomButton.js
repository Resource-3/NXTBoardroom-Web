import React from 'react';
import { Button } from 'react-bootstrap';
import Loader from "../../../assets/images/giphy.gif";
import './CustomButton.scss';

const CustomButton = (props) => {
    let { title, children, disabled, type, loading, className } = props

    return (
        <Button
            className={loading ? "custombtn btn-loading" : "custombtn " + className}
            type={type} onKeyDown={props.onKeyDown} disabled={disabled || loading} onClick={props.onClick} >
            {loading ? <div className="btn-loader"><img src={Loader} alt="loader" height={20} width={20} /></div > : <span>{title}</span>}
            {children}
        </Button>
    )
}

CustomButton.defaultProps = {
    className: '',
    loading: false
}

export default CustomButton;

