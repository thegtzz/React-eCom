import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Categories, PizzaBlock, PizzaLoadingBlock, SortPopUp} from "../components";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
]

export const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)
    const cartItems = useSelector(({ cart }) => cart.items)
    const isLoading = useSelector(({ pizzas }) => pizzas.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)

    useEffect(  () => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortBy = useCallback(name => {
        dispatch(setSortBy(name))
    }, [])

    const handleAddPizzaToCart = obj => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onSelectCategory={ onSelectCategory }
                    items={categoryNames}
                    activeCategory={category}
                />
                <SortPopUp items={sortItems} activeSortType={sortBy.type} onClickSortType={onSelectSortBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { isLoading
                    ? items.map(obj => <PizzaBlock
                        onClickAddPizza={handleAddPizzaToCart}
                        cartPizzas={cartItems[obj.id] && cartItems[obj.id].items.length}
                        {...obj}
                        key={obj.id}/>)
                    : Array(10)
                        .fill(0)
                        .map((_, index) => (<PizzaLoadingBlock key={index}/>))
                }
            </div>
        </div>

    )
}