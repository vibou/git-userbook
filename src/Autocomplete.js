import React from 'react';

function Autocomplete(props) {
    const {controller, placeholder, disabled} = props;
    const disabledStr = disabled ? (disabled / 1000).toFixed(0) : "";
    const onChange = (e) => controller.input = e.target.value;
    return (
        <div className="autocomplete-container">
            <input type="text" disabled={disabled} placeholder={placeholder} value={controller.input} onChange={onChange}  />
            {   disabled > 0 ? (
                    <div className="api-error">Too many request please wait {disabledStr} seconds</div>
                ):
                controller.input.length > 0 && controller.values.length === 0 ? (
                    <div className="no-result">No result found</div>
                ) : (
                    <ul className="autocomplete-list">
                    {
                        controller.values.map((v, idx) => 
                            <li className="autocomplete-list-item" key={idx}>{v}</li>)
                    }
                 </ul>
                )  
            }
        </div>
    )
}

export default Autocomplete