import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    mod:false,
    login: false,
    food: [],
    detail: {},
    profile: {
        name: 'user',
        email: '',
        password: '',
    },
    Dessert:[],
}


export const getTodos = createAsyncThunk('getTodos', async () => {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const datos = (await data.json()).meals
    const result = datos.map((e) => {
        e.isFavorite = false;
        return e
    })
    return result;
})

export const getDessert = createAsyncThunk('getDessert',async ()=>{
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const datos = await data.json();
   return datos.meals;
})


export const proyectSlice = createSlice({
    name: 'proyect',
    initialState,
    reducers: {
        addlogin: (state, action) => {
            state.login = action.payload;
        },
        addmod:(state, action) => {
            state.mod = action.payload;
        },
        addfavorite: (state, action) => {
            const nu = state.food.map((q) => {
                if (q.idMeal === action.payload) {
                    q.isFavorite = !q.isFavorite
                }
                return q;
            })
            state.food = nu;
        },
        addDetail: (state, action) => {
            state.detail = action.payload;
        },
        addProfile: (state, action) => {
            state.profile = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.fulfilled, (state, action) => {
                state.food = [...action.payload];
            })
            .addCase(getDessert.fulfilled, (state, action)=>{
               state.Dessert = [...action.payload];
            })
    }
})

export const { addlogin, addfavorite, addDetail, addProfile,addmod } = proyectSlice.actions;
export default proyectSlice.reducer;