import React from "react";
import './mainBodyStyle.css';

function CreateImage(props){
return(
   <div className="render-img">
         <div className="img-container">   
            {/* <p>{props.content}</p> */}
            <div className="img"><img src={props.content} height="200" width="200" /></div>
            <h4 className="img-title">{props.title}</h4>
         </div>   
    </div>
);
}

export default CreateImage;