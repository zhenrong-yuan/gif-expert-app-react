import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

     const [categories, setCategories] = useState(['Zoro', 'Luffy', 'Nami']);
    
    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return; 
        setCategories([ newCategory, ... categories ]);
    }
    
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                //setCategories={ setCategories } 
                onNewCategory={ onAddCategory }
            />

            { categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />) ) 
            }

        </>
    )
}