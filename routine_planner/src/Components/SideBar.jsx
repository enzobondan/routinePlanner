import { List } from "phosphor-react"
import '../styles/global.css';
function SideBar() {

    return (
        <div>
            <div className='sidebar group '>
                <div className="sidebar-items group-hover:display-block">
                    <List color="#800000" size={32} className="phosphor-btn" />
                    <menu className="list-items">
                        <div className="mb-5">
                            <a className="item sticky" href="/">
                                Home
                            </a>
                        </div>
                        <div className="mb-5">
                            <a className="item sticky" href="/">
                                Gear Planner
                            </a>
                        </div>
                        <div className="mb-5">
                            <a className="item sticky" href="/">
                                Adventurer's Guild
                            </a>
                        </div>
                        <div className="mb-5">
                            <a className="item sticky" href="/">
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