import React, { useState } from 'react'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from "./NavigationMenu";
  

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    const masktransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menutransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })


    return(
        <nav>
            <span className="text-xl" onClick={()=>setShowMenu(!showMenu)}>
                123
            </span>

            {
                masktransitions.map(({ item, key, props }) =>
                item && 
                <animated.div
                    key={key}
                    style={props} 
                    className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"
                    onClick={()=>setShowMenu(false)}    
                >
                    
                </animated.div>
                )
            }

            {
                menutransitions.map(({ item, key, props }) =>
                item && 
                <animated.div
                    key={key}
                    style={props} 
                    className="fixed bg-white top-0 left-0 w-1/5 h-full z-50 shadow">
                        
                    <NavigationMenu closeMenu={()=>setShowMenu(false)} />
                </animated.div>
                )
            }
            

        </nav>
    )
}
export default Navigation