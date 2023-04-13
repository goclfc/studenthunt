import React from "react"
import { Btn } from "../Buttons"
import Login from "../Login"
import { useNavigate } from "react-router-dom"

const Menu = ({actions})=>{
    const navigate = useNavigate()
    const logedIn = actions.logedIn
    console.log(actions)
    const handleClick = ()=>{
        navigate('/login')
    }
    const handleRegister = ()=>{
        console.log('clicked register ')
        navigate('/register')
    }
    return (
        <div className="flex justify-between">
            {!logedIn?    <><button name="შესვლა" onClick={handleClick}> შესვლა</button>
            <button name="რეგისტრაცია" color='red' onClick={handleRegister}>რეგისტრაცია</button> </>:<button>პროფილი</button>
            }
        
        </div>
    )
}
export default Menu