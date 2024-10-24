import { useState } from "react";
import { AddCategory } from "./components/addCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {

     const [categories, setCategories] = useState(['Zoro', 'Luffy', 'Nami']);
    //const [categories, setCategories] = useState(['Zoro']);

    
    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return; 
        setCategories([... categories, newCategory]);
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