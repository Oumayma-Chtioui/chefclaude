import { useState } from 'react';


export default function Static({ingredients, setIngredients}){
    const [ingredient, setIngredient] = useState(''); 

    function add(){
        if(ingredient===''){
            return
        }
        setIngredients([...ingredients, ingredient]);
        console.log(ingredients)
    }
    function reset(){
        setIngredients([]);
    }

    return(
        <>
        <div className="header">
            <img src="chefclaude.png" alt="logo" />
            <h1>Chef Claude</h1>
        </div>
        <div className="body">
            <div className="input">
                <input value={ingredient} // Controlled by state
                        onChange={(e) => setIngredient(e.target.value)} 
                         type="text" placeholder="e.g eggs" id="inputtext" />
                <button id="inputbutton" onClick={add}>+ Add ingredient</button>
                <button id="reset" onClick={reset}>Reset</button>

            </div>
        </div>
        </>
    )
}

