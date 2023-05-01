import React from "react"
import { useNavigate } from "react-router-dom"

const Menu = ({actions})=>{
    const navigate = useNavigate()
    const logedIn = actions.logedIn
    const handleClick = ()=>{
        navigate('/login')
    }
    const handleRegister = ()=>{
        navigate('/register')
    }
    return (
        <div className="header-buttons">
            {!logedIn?    <><button name="შესვლა" onClick={handleClick}> შესვლა</button>
            <button name="რეგისტრაცია" className="red" onClick={handleRegister}>რეგისტრაცია</button> </>:<button>პროფილი</button>
            }
        
        </div>
    )
}
export default Menu