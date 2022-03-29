import React from "react";
import './Label.scss';

const Label = (props) => {
    let { title } = props;
    return (
        <p className={'labelTitle ' + props.className}>{title}</p>
    )
}

Label.defaultProps = {
    className: '',
}
export default Label;