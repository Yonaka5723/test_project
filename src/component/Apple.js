import React,{useState, useEffect, useReducer} from 'react';

const priceReducer = (preState, action) =>{
    switch (action.type){
        case 'ADD':
            return preState +10;
        default:
            return preState;
    }
}

// export default function Apple
function Apple(){
    // const [price, setPrice] = useState(0);
    const [price, priceDispatch] = useReducer(priceReducer, 0);
    useEffect(()=>{
        priceDispatch({type : 'ADD'});
        priceDispatch({type : 'ADD'});
        priceDispatch({type : 'ADD'});
        
    },[])

    useEffect(()=>{
        console.log(`this price is ${price}`);
    },[price]);


    const handleClick = e =>{
        priceDispatch({type : 'ADD'});
        
    }
    

    return(
        <div>
            <p>Apple is {price}</p>
            <button id="price-control" value={price} onClick={handleClick}>
                Add Apple's price
            </button>
        </div>
    );
}
export default  Apple;
