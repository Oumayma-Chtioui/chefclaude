import Generate from "./generate"
export default function Interactive({ingredients}){
    
    const mapped = ingredients.map((ingredient,i)=>{
        return(
            <li key={i}>{ingredient}</li>
        )
    })
    return(
        <>
            <div className="body">
                <div className="ingredients">
                    <h1> Ingredients on hand: </h1>
                    <ul>
                        {mapped}
                    </ul>
                </div>
                <Generate ingredients={ingredients}/>
                
            </div>
        </>
    )
}