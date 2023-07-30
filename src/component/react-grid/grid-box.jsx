/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react'
import './index.css'
const GridBox = ({number}) => {
    const gridBoxRef = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observe) => {
            entries.forEach((entry)=> {
                if(!entry.isIntersecting)  return null; 
                
                console.log(`${number} was called`)
                observe.disconnect()
            })
        })
        observer.observe(gridBoxRef.current)
        return () => {
            observer.disconnect()
        }
    }, [])
    
    return(
        <div ref={gridBoxRef} className="grid-box">
            {number}
        </div>
    )
}
export default GridBox
