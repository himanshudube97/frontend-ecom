import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import { getProductDetails } from '../../actions/productAction';


function ProductDetails() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {loading, error, product} = useSelector((state)=>{  // here the state is global state. 
        return state.productDetails
    }) 
  

    useEffect(()=>{
        dispatch(getProductDetails(id));
    },[dispatch])
    
    return (
       <>
        <div>
            <h1>{product.name}</h1>
            {product.category}
            {product.description}
        </div>
     
       </>
    );
}

export default ProductDetails;