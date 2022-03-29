import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { multilanguage } from "redux-multilanguage";
import { hideToast } from '../../../redux/actions/toastAction';
import { Toast } from 'react-bootstrap';

import './ToastComponent.scss';

const ToastComponent = (props) => {

    const { toast: { type, message, show } } = props;
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        setShowToast(show)
    }, [show])

    let toastClass;
    if (type === 'success') {
        toastClass = 'success-txt';
    } else if (type === 'error') {
        toastClass = 'error-txt';
    } else if (type === 'warning') {
        toastClass = 'warning-txt';
    } else {
        toastClass = '';
    }
    return (
        message !== '' && <Toast onClose={() => props.hideToast()} className={toastClass} show={showToast} delay={3000} autohide>
            <div className="tostcenter">
                <p>{message}</p>
            </div>
        </Toast>
    )
}

const mapStateToProps = (state) => {
    return {
        toast: state.toastReducer.toast
    }
};
const mapDispatchToProps = {
    hideToast
};
export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(ToastComponent));