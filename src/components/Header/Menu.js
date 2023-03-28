import { Btn } from "../Buttons"

const Menu = ()=>{
    return (
        <div className="flex justify-between">
            <Btn name="შესვლა" />
            <Btn name="რეგისტრაცია" color='red'/>
        </div>
    )
}
export default Menu