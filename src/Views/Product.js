import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
function Product(){
    const { id } = useParams()

    const url = `https://5f72d5156833480016a9c096.mockapi.io/api/v1/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    });

    let content = null

    useEffect(() => {
        
        setProduct({
            loading: true,
            data: null,
            error: false
        })

        axios.get(url).then(
            Response=>{ 
                setProduct({
                    loading: false,
                    data: Response.data,
                    error: false
                })
            })
            .catch(() =>{
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url]);

    if(product.loading)
    {
        content = <Loader></Loader>
    }

    if(product.data)
    {
        content = 
        <div>
            <h1 className ="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default Product