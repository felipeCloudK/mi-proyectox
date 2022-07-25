import React,{useState,useEffect} from "react";
import RecomendacionFragments from "./Fragments/RecomendacionFragments";
import Mascarilla from  "../assest/images/2599564.png"

const Recomendaciones =()=>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Recomendaciones</h1>
                </div>
            </div>
                <div className="row">
                    <div className="col-6">
                        <RecomendacionFragments
                        titulo="Titulo 1"
                        contenido=" Contenido 1"
                        tipoAlerta="alert-danger">
                        contenido 1
                        </RecomendacionFragments>
                </div>
                    <div className="col-6">
                        <RecomendacionFragments
                        titulo="Titulo 2"
                        tipoAlerta="alert-success">
                            contenido 2
                            <br/>
                            <img src={Mascarilla} alt="Mascarilla"/>
                        </RecomendacionFragments>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Recomendaciones;