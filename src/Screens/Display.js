import React, {useState} from 'react'
import SearchInput from '../Component/SearchInput';
import Cards from '../Component/Cards';


function Display() {
    const [userSearch, setUserSearch] = useState("")
    let inputVal= (e)=>{
        // console.log(e);
        setUserSearch(e);

    }
    console.log(userSearch);
  return (
    <>
    <SearchInput inputVal={inputVal}/>
    <Cards userSearch={userSearch}/>
    </>
  )
}

export default Display;