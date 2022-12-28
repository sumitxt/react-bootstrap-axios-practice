import React from 'react'
import localforage from "localforage";
import {BsFillEmojiLaughingFill, BsFillEmojiNeutralFill} from "react-icons/all";

function OurLocalForage() {   
    
    const setData=()=>{
        localforage.setItem("name","Sumit Barua",function (error){
            if(error){
                    alert(error)
            }
            else{
                alert("success")
            }
        })

    }
    
    const getData=()=>{
            localforage.getItem("name",function(error,value){
            if(error){
                alert(error)
            }
            else{
                alert(value)
            }
            })
    }

    const removeData=()=>{
        localforage.removeItem("name",function (error){
            if(error){
                alert(error)
            }
            else{
                alert("data removed successfully")
            }
        })
    }
    
    return (
        <div>
            <button onClick={setData} className='btn m-2 btn-success'><BsFillEmojiLaughingFill/>Set Data</button>
            <button onClick={getData} className='btn m-2 btn-success'><BsFillEmojiNeutralFill/>Get Data</button>
            <button onClick={removeData} className='btn m-2 btn-success'>Remove Data</button>
        </div>
    )
}

export default OurLocalForage
