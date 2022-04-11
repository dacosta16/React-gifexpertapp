import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //         // setCategories( [...categories, 'Ushio to Tora'] );
    //         setCategories( cats => [...cats, 'Ushio to Tora'] );
    //     }
    
    return (
    <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />

        <ol>
            {
                categories.map( category =>  (
                    <GifGrid key={category} category={ category }/>
                ))
            }
        </ol>
    </>
  )
}
