import React from 'react';

function Autocomplete(props) {
    const {controller} = props;
    const onChange = (e) => controller.input = e.target.value;
    return <input type="text" value={controller.input} onChange={onChange}  />
}

export default Autocomplete