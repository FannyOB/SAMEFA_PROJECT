import React from 'react';
import { useState, useEffect } from 'react';
import './Categories.scss';

const Categories = ({Categories}) => {
    //visibilité de ma bdd
   // console.log(supabase)
    const [categories, setCategories] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState('');
    const [query,setQuery]= useState("");
    //console.log(query)

    useEffect(() => {
     getCategories();  
    }, []);

    async function getCategories(){
        const { data } = await supabase.from("categories").select("*");
        setCategories(data);
    }

    const handlecategoryChange =(categoryValue) =>{
        setSelectedCategory(categoryValue);
    }
    
    //option selectionné
    console.log(selectedCategory);
    return (
        <div className='categories-wrapper'>           
            <h3>Choose your favorite category</h3>
                <div className='search-bar'> {/* ajout de la line 41 à 47*/}
                    <input 
                        type='text' 
                        placeholder='Research...'
                        className='search-input'
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div> 
                <ul className='categories-list'>
                    {categories
                    .filter(cat => cat.name_category
                        .toLowerCase()
                        .includes(query))
                    .map((categories) => (
                        <li className='list' 
                        key={categories.id}
                        value={categories.name_category}
                        onClick={() => handlecategoryChange(categories.name_category)}
                        >{categories.name_category}</li>
                    ))}
                </ul>
            <form id="">
                <h3 >Choose a Category: </h3>
                <br></br>
                <select id="categorie-select" onChange={handlecategoryChange}>
                    <option value="">--Please select a category--</option> 
                    {categories.map((categories)=>(
                        <option key={categories.id} 
                        value={categories.name_category}
                        >{categories.name_category}</option>  
                    ))}
                </select>
                <button type="submit">Validate</button>
            </form>
        </div>
    );
};
export default Categories;
