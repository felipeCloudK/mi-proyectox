import React, {useEffect, useState} from "react"
import Giratina from "../assest/images/487.png"
import Mewtwo from "../assest/images/150.png"
import Pikachu from "../assest/images/025.png"
import PokemonFragment from "./Fragments/PokemonFragment"


const Pokemon =() =>{
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Pokedex</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={Giratina} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Giratina</h5>
                                <p className="card-text">Vive en el Mundo Distorsión, un mundo opuesto al nuestro y cuyas leyes desafían el sentido común.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={Mewtwo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Mewtwo</h5>
                                <p className="card-text">Su ADN es casi el mismo que el de Mew. Sin embargo, su tamaño y carácter son muy diferentes.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <PokemonFragment 
                        textoDescrip="Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas."
                        imagen={Pikachu}
                        titulo="Pikachu"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Pokemon;