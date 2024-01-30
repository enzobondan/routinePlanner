import { List } from "phosphor-react"
import '../styles/global.css';
function SideBar() {

    return (
        <div>
            <div  className='sidebar transition ease-in-out delay-150 hover:-translate-y-1 hover:duration-300 group'>
                <div className="sidebar-items group-hover:display-block">
                    <List color="#800000" size={32} className="phosphor-btn"/>
                    <menu className="list-items">
                       <div>
                       <a className="item" href="/">
                            Home
                        </a>
                       </div>
                        <div>
                        <a className="item" href="/">
                            Gear Planner
                        </a>
                        </div>
                        <div>   
                        <a className="item" href="/">
                            Adventurer's Guild
                        </a>
                        </div>
                        <div>
                        <a className="item" href="/">
                            Character Customization
                        </a>
                        </div>
                    </menu>
                </div>
            </div>
        </div>
    )
}
export default SideBar