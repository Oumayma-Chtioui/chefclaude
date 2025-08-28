
import { use, useState } from 'react';

export default function Generate({ingredients}){

    const [isLoading, setIsLoading] = useState(false);
    const[recipes,setRecipes]=useState([])
    const[mapped,setMapped]=useState()

    async function generateRecipe() {
        const parameter= ingredients.join(",+")

        setIsLoading(true);

        const apiKey="153bc14a5aef44deb0c469dc146d925b"
        const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${parameter}&number=10&apiKey=${apiKey}`;
        try{
        const response = await fetch(url)
        const data=await response.json()
        console.log(data)
        setRecipes(data)
        
        }
        catch(error){
            console.error("Error", error)
        }
        
        finally {
            setIsLoading(false);
        }


    }

    // Usage

    return(
        <>
        <div className="generate">
            
            <div className="text">
                <h1>Ready for a recipe?</h1>
                <p>Genrerate a recipe from your list of ingredients</p>
            </div>
            {(!ingredients || ingredients.length === 0) && (
                console.log("Add some ingredients first!")
            )}
            
            <button onClick={generateRecipe} disabled={isLoading}>
                {isLoading ? "Loading..." : "Find Recipes"}
            </button>
        </div>
        <div className="result">
            <h1> Suggested recipes </h1>
            {recipes.map((recipe)=>(
                <div key={recipe.id} className="recipe">
                    <img src={recipe.image} alt="recipe" />
                    <div className="text">
                        <h3>{recipe.title}</h3>
                        <p><strong>Other ingredients: </strong></p>
                        {recipe.missedIngredients.map((ing)=>(
                            <div key={ing.id} className="usedIngredients">
                                <p>{ing.amount} {ing.unit} {ing.name}</p>
                            </div>
                        ))}
                    </div>
                    
                </div>
            ))}
         </div>
        
        </>
    )
}