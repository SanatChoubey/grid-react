
import { useEffect, useRef, useState } from "react";
import SelectedTag from "./tags";
import sortIcon from '../../assets/sort.png';
import './index.css';

const GridDropDown = ({data}) => {
    const [selectedValue, setSelectedValue] = useState([])
    const [filterData, setFilterData] = useState(data)
    const [dropdownState, setDropDownState] = useState(false)
    const dropdownRef  = useRef()
    useEffect(() => {
        document.addEventListener('click', (e)=> {
           if(e.target.contains(dropdownRef.current)){
                setDropDownState(false)
           }
        })
        return () => {
            document.removeEventListener('click', ()=>{})
        }
    }, [])
    return (
        <>
        <div className="grid-dropdown">
            {
                selectedValue && selectedValue.map((item) => (<SelectedTag key={item} value={item} />))
            }
            <input  
                onFocus={()=>{
                    setDropDownState(true)
                }}
                onChange={(e) => {
                    const filterDataSet = data.filter((item) => {
                        return  item.name.indexOf(e.target.value) > -1
                    }) 
                    console.log('file', filterDataSet)
                    setFilterData([...filterDataSet])
                }} 
                type="text" 
            />
            <img onClick={() => { 
                
                setFilterData(()=>[...filterData.sort((a,b) => b.name > a.name ? 1 : -1)]) 
                }} width={20} height={20} src={sortIcon} />
        </div>
            {
                filterData?.length && dropdownState &&
                <div ref={dropdownRef}className="grid-dropdown-container">
                    {filterData.map((item, i) => {
                        return  <div key={i} onClick={() => {
                            setSelectedValue((prev)=>[...prev, item.name])
                        }} >{item.name}</div>
                    })}
                </div>
            }
        </>
    )
}
export default GridDropDown;
