import logo from './../MySocialLogo.png'

export default function NavBar(){
    return(
        <div>
            <ul className='d-flex justify-content-end align-items-center'>
                <img src={logo} className="img-fluid rounded-circle" style={{ width:"75px"
            }}></img> <h1>Social</h1>
                <ol className='mx-auto'>
                    <a className='nav-links mx-5'>Sample Links1</a>
                    <a className='nav-links'>Sample Links2</a>
                </ol>
            </ul>
        </div>
    )
}