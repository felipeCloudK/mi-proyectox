import React, {useEffect, useState} from "react"
import { Routes, Route, Link} from "react-router-dom"
import Inicio from "./componentes/Inicio"
import Perfil from "./componentes/Perfil"
import Pokemon from "./componentes/Pokemon"
import Recomendaciones from "./componentes/Recomendaciones"


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/" element ={<Pokemon/>}/>
            <Route path="/pokedex"element={<Pokemon/>}/>
            <Route path="/" element ={<Recomendaciones/>}/>
            <Route path="/Recomendaciones"element={<Recomendaciones/>}/>
        </Routes>
    )
}

export default App;
