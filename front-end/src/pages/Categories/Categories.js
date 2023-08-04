import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import CategoriesImg from '../../assets/img/Categories_img.png';
import ComponentBanner from '../../components/ComponentBanner/ComponentBanner';
import { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import './Categories.css';

const Categories = ({Categories}) => {
    //visibilité de ma bdd
   // console.log(supabase)
    const [categories, setCategories] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState('');

    useEffect(() => {
     getCategories();  
    }, []);

    async function getCategories(){
        const { data } = await supabase.from("categories").select("*");
        setCategories(data);
    }

    const handlecategoryChange =(e) =>{
        setSelectedCategory(e.target.value);
    }
    //option selectionné
    console.log(selectedCategory);
    return (
        <div>
            <Header/>
            <ComponentBanner 
            title = "All Categories"
            image={CategoriesImg}
            />
            <h3>Current Database Category:</h3>
            <br></br>
            <ul className='categories-list'>
                {categories.map((categories) => (
                    <li className='list' key={categories.name_category}>{categories.name_category}</li>
            ))}
            </ul>
            <hr></hr>
            <br></br>
            <form id="">
                <h3 >Choose a Category: </h3>
                <br></br>
                <select id="categorie-select" onChange={handlecategoryChange}>
                    <option value="">--Please select a category--</option> 
                    {categories.map((categories)=>(
                        <option key={categories.id} value={categories.name_category}>
                            {categories.name_category}
                        </option>  
                    ))}
                </select>
                <br></br>
                <br></br>
                <button type="submit">Validate</button>
            </form>
            <Footer/>
        </div>
    );
};
export default Categories;
