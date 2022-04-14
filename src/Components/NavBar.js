import logo from './../MySocialLogo.png'

export default function NavBar(){
    return(
        <div className='sticky-top' style={{
            background: "rgb(8,0,143)",
            background: "linear-gradient(90deg, rgba(8,0,143,1) 0%, rgba(0,153,184,1) 25%, rgba(68,68,209,0.8244485294117647) 50%)",
            color:"white"
        }}>
            <ul className='d-flex justify-content-end align-items-center'>
                <img src={logo} className="img-fluid rounded-circle" style={{ width:"75px"
            }}></img> <h1>Social</h1>
                <ol className='mx-auto'>
                    <a className='mx-5 btn btn-outline-light'>Sample Links1</a>
                    <a className='mx-5 btn btn-outline-light'>Sample Links2</a>
                </ol>
            </ul>
        </div>
    )
}
