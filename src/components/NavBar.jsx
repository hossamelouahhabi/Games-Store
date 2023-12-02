
export default function Navbar({cardItems}) {


    return(
        <>
        <nav className="navbar bg-dark border-5 border-bottom border-success p-2">
            <div className="container-fluid my-1">
                <a 
                href="##"
                    style={{marginLeft: "30px"}}
                    className="navbar-brand text-white fs-4 ">Games Store</a>

                <div className="container mx-">

                    <img 
                    alt='idk'
                        style={{width: "1.5%", marginLeft: "-110px"}} 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png"/>
                    <img 
                    alt='idk'
                        style={{width: "1.4%", marginLeft: "25px"}}                 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1764px-Epic_Games_logo.svg.png"/>    
                    <img 
                    alt='idk'
                        style={{width: "1.75%", marginLeft: "25px"}}                 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1280px-Playstation_logo_colour.svg.png"/>    
                    <img 
                    alt='idk'
                        style={{width: "1.5%", marginLeft: "25px"}}                 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"/>    
                    
                </div>

                {/* <div>items</div> */}
                <button 
                    className="btn btn-outline-success me-2"
                    >{cardItems.length}</button>
            </div>
        </nav>
        </>
    )
}