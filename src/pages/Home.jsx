import React from "react";
import {Categories, PizzaBlock, SortPopUp} from "../components";


export const Home = ({items}) => {
    console.log(items)
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
                />
                <SortPopUp items={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map(obj => <PizzaBlock {...obj} key={obj.id}/>)
                }
            </div>
        </div>

    )
}