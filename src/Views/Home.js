import React from 'react'
import Rice from '../img/logsbg.jpg'

function Home(){
    return(
        <div style={{backgroundImage: `url(${Rice})`}}>
            <h1 className="font-bold text-2x1">This is the home page</h1>
        </div>
    )
}
export default Home