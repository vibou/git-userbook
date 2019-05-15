import React from 'react';

function Autocomplete(props) {
    const {controller} = props;
    const onChange = (e) => controller.input = e.target.value;
    return (
        <div className="autocomplete-container">
            <input type="text" value={controller.input} onChange={onChange}  />
            <ul className="autocomplete-list">
                {
                    controller.values.map((v, idx) => 
                        <li className="autocomplete-list-item" key={idx}>{v}</li>)
                }
            </ul>
            
        </div>
    )
}

export default Autocomplete