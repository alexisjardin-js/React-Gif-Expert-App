import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (onNewCategory) => {

        if (categories.includes(onNewCategory)) return;

        setCategories([onNewCategory, ...categories]);

    }

    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }

        </>
    )
}
