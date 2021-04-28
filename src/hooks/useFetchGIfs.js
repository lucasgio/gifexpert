import { useState, useEffect } from "react";
import {getGif} from '../helpers/getGif'

export function useFetchGIfs(category) {

    const [state, setState] = useState({
    
       data:[],
       loading:true
        
    })    

    useEffect(() => {
        getGif(category)
            .then( imgs => {
                setState({
                    data:imgs,
                    loading:false
                })      
            }) 
    }, [category])

    return state;

}
