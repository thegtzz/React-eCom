import axios from "axios";

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
})

export const fetchPizzas = (category, sortBy) => async (dispatch) => {
    dispatch(setLoaded(false))
    const {data} = await axios.get(`http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    dispatch(setPizzas(data))
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})
