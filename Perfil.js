import React, {useEffect, useState} from "react"
import felipe from  "../assest/images/2599564.png"
import PerfilFrament from "./Fragments/perfilFragment"


const Perfil = () => {


    return (
        <>
        <ul class="nav">
            <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
        </li>
        </ul>
        <br/>
        <div className="container">
        <div className="row">
            <div className="col-6">
            <div className="card" style={{width: "18rem"}}>
                            <img src={felipe} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Question!!</h5>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="f" />
                                    <label class="form-check-label" for="flexCheckIndeterminateDisabled">
                                        ¿Te gusta el Helado?
                                    </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="f" />
                                    <label className="form-check-label" for="lexCheckIndeterminateDisabled">
                                        ¿TE Gusta Las Peliculas?
                                    </label>
                                    </div>
                                    <br/>
                                    <PerfilFrament
                                    radio="Masculino"
                                    radio2="Femenino"
                                    Eligue="Eligue algun Color"
                                    Color1="Azul"
                                    Color2="Rojo"
                                    Color3="Verde"
                                    />
                                    <br/>
                                <a href="http://localhost:3000/pokedex" className="btn btn-primary">Pokedex</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Perfil; 