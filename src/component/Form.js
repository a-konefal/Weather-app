import React from 'react';
import Bootstrap from 'bootstrap';

const Form = props => {
    return (
        <form onSubmit={props.submit}>
            <div className="bck">
            <main>
        <div className="search-box">
        <input 
        type="text" 
        className="search-bar"
        value={props.value}
        onChange={props.change}
        placeholder="Search city"/>
        </div>
        
        
       
        
    </main>
    </div>
    
        </form>
    )
}

export default Form