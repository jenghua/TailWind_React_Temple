import React from 'react'
import Logsbg from '../img/logsbg.jpg'

const backgroundImg = {backgroundImage: `url(${Logsbg})`}

function GenerateCode(){
    return(
        <div className="h-40vh flex items-center justify-center" style={backgroundImg}>
            <p>
                This is the about page contents.
            </p>
        </div>
    )
}

export default GenerateCode