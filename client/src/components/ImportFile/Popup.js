import React, { useState }  from "react";
import ImportFile from "./ImportFile";
import vector from "../../images/Vector.png";
import file from "../../images/file.png";
import './Pop.css'
function PopUp(){
    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }
    return(
        <div>
            <button onClick={handleClickOpen}>Import</button>
            <div>
                {
                    popup?
                    <div className="main">
                        <div id="popup">
                            <div className="popup-header">
                                <img src={file} alt="file" id="file"/>
                               <p id="import_text">Import File</p>
                            </div>
                            <div id="import">
                                <ImportFile/>
                                <p onClick={closePopup} id="close">Cancel</p>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}
export default PopUp;