import React from 'react';

function Autocomplete(props) {
    const {controller, placeholder, disabled} = props;
    const disabledStr = disabled ? (disabled / 1000).toFixed(0) : "";
    const onChange = (e) => controller.input = e.target.value;
    return (
        <div className="autocomplete-container">
            <div className="input-container">
                <input type="text" disabled={disabled} placeholder={placeholder} value={controller.input} onChange={onChange}  />
                {disabled > 0 &&
                    <div className="lds-ripple"><div></div><div></div></div>
                }
            </div>
            {   disabled > 0 ? (
                    <div className="api-error">Too many requests please wait {disabledStr} seconds</div>
                ):
                !controller.select && controller.input.length > 0 && controller.values.length === 0 ? (
                    <div className="no-result">No result found</div>
                ) : (
                    <ul className="autocomplete-list">
                    {
                        controller.values.map((v, idx) => {
                            return (                        
                                <li className="autocomplete-list-item" key={idx} onClick={() => controller.select = v}>
                                    <div className="avatar">
                                        <img src={v.avatar_url} alt={v.login}/>
                                    </div>
                                    {v.login}
                                </li>
                            )
                        })
                    }
                 </ul>
                )  
            }
        </div>
    )
}

export default Autocomplete