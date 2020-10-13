import React from 'react'
import { Link } from "react-router-dom"
import Logsbg from '../img/logsbg.jpg'


const backgroundImg = {backgroundImage: `url(${Logsbg})`}

function Home(){
    return(
      <div className="min-h-screen flex items-center justify-center" style={backgroundImg}>
        <div>
           <img className="mx-auto" src={ require('../img/hexagon.png')} alt = "logo" />
           <img className="m-6 mx-auto" src={ require('../img/title01.png')} alt = "title" />
           <p className="font-bold text-white text-center">
             以區塊鏈為平台，ChainCaster提供利用智能合約模組架構成的〈區塊鏈分佈式資料庫〉，
           <br/>
           讓眾多線上遊戲(或手機遊戲)獨立開發團隊，可以無須另行架設伺服器，將遊戲儲存資料上鏈，
           <br/>
           幫助小型開發團隊大幅降低成本。
           </p>
            <div className="text-center">              
                <button className="m-8 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded">                
                  <Link to="/">應用類</Link>
                </button>
                <button className="m-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
                  <Link to="/GenerateCode" >線上遊戲</Link>      
                </button> 
            </div>
        </div>            
      </div> 
    )
}
export default Home