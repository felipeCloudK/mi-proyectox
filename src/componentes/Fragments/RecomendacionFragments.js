import React,{useState, useEffect} from "react"

const RecomendacionFragments = ({titulo,contenido,tipoAlerta})=>{
    return(
        <>
        <div className="col-6">
            <div className={`alert ${tipoAlerta}`} role="alert">
                <h4 className="alert-heading">{titulo}</h4>
                <p>{contenido}</p>
            </div>
        </div>
        </>
    )
}
export default RecomendacionFragments;