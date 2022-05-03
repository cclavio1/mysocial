import { Avatar } from "@mui/material"

export default  function Comments({comments}){
        let render = comments.map(com=>{
            return(
                <div className="d-flex align-items-center">
                    <Avatar>{com.username[0]}</Avatar>
                <div className="m-2 rounded bg-warning p-2">{com.comment}</div>
                </div>
            )
        })
    return(
        <div>{render}</div>
    )
}