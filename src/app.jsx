import Static from "./static"
import Interactive from "./interactive"
import { useState } from "react"


export default function App(){

    const [ingredients, setIngredients] = useState([]);

    return(
        <div className="container">
            <Static ingredients={ingredients} setIngredients={setIngredients}/>
            <Interactive ingredients={ingredients}/>
        </div>
    )
}