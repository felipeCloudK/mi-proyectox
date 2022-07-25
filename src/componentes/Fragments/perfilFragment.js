import React,{useState,useEffect} from "react"

const PerfilFrament =({radio,radio2,Eligue,Color1,Color2,Color3})=>{
    return(
        <>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
            <label class="form-check-label" for="flexRadioDefault1">
                    {radio}
                    </label>
            </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label class="form-check-label" for="flexRadioDefault2">
                {radio2}
            </label>
        </div>
        <select class="form-select" aria-label="Default select example">
                                    <option selected>{Eligue}</option>
                                    <option value="1">{Color1}</option>
                                    <option value="2">{Color2}</option>
                                    <option value="3">{Color3}</option>
                                    </select>
        </>
    )
}



export default PerfilFrament;