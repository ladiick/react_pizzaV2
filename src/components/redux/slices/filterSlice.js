import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: 'популярности',
        sortType: 'rating',
    },
}


export const filterSlice = createSlice({
    name: "filter",
    initialState,

    reducers:{
        setCategoryId(state, action){
            state.categoryId = action.payload;
        },
        setSort(state, action){
            state.sort = action.payload;
        }

    }

})

export const {setCategoryId, setSort} = filterSlice.actions
export default filterSlice.reducer