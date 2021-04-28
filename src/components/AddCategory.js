import React,{useState} from 'react'
import PropTypes from 'prop-types';

function AddCategory( {setCategories} ) {
        

    const [inputValue, setinputValue] = useState('');
    const inputHandleValue = (e) => {
        setinputValue(e.target.value);
    }

     const InputSubmitValue = (e)=> {
         e.preventDefault();
         if(inputValue.trim().length > 2 ){ 
            setCategories(cats => [inputValue, ...cats]);
            setinputValue("");
         }
     }

     return (
        <>
        <form className="d-flex">
         <input className="form-control me-2" type="search" placeholder={inputValue} onChange={inputHandleValue} aria-label="Search" />
         <button className="btn btn-primary" onClick={InputSubmitValue} >Search</button>
        </form> 
        </>
    )
}

export default AddCategory

AddCategory.propsType = {
    setCategories : PropTypes.func.isRequired
}


