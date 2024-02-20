import { useState } from "react"
import SideBar from "./SideBar"
import "../logo.svg"
import { Header } from "./Header"
import { BoxWindow } from "./BoxWindow"

function Main() {
    const dog = [{itemName: 'sadks'}, {itemName: 'eitaDog'}, {itemName: 'inOnIt'}]
    return (
        <div>
            <SideBar />
            <Header />
            <div className="structure">

            </div>
            <div className="card-container pb-5">
                <div className="card">
                    <div className="inside-card">
                        Ggkagkakgfasdfasdsadfasdfasdfasdf
                    </div>
                </div>
                <div className="card">
                    <div className="circle m-4">
                    <div className="firstLine">
                    <div className="dark-card"><button>start</button></div>
                    </div>
                    <div className="midLine">
                    <div className="dark-card"><button>start</button></div>
                    <div className="dark-card"><button>start</button></div>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <div className="inside-card">
                        <div className="roulette">
                            <div className="firstLine"><div className="dark-card"><button>start</button></div></div>
                            <div className="midLine">
                                <div className="dark-card"><button>mid</button></div>
                                <div className="dark-card"><button>mid</button></div>
                            </div>
                            <div className="midLine">
                                <div className="dark-card justify-self-start"><button>mid</button></div>
                                <div className="dark-card"><button className="justify-self-end">mid</button></div>
                            </div>
                            <div className="midLine">
                                <div className="dark-card"><button>mid</button></div>
                                <button></button>
                                <button></button>
                                <div className="dark-card"><button>mid</button></div>
                            </div>
                            <div className="midLine">
                                <div className="dark-card"><button>mid</button></div>
                                <button></button>
                                <div className="dark-card"><button>mid</button></div>
                            </div>
                            <div className="midLine">
                                <div className="dark-card"><button>mid</button></div>
                                <div className="dark-card"><button>mid</button></div>
                            </div>
                            <div className="firstLine">
                                <div className="dark-card"><button>end</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bar">

            </div>
            <div>
                <BoxWindow data={dog}/>
            </div>
        </div>
    )
}

export default Main