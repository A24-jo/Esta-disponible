import {configureStore} from '@reduxjs/toolkit';
import proyectReducer from '../feature/proyectSlice';

export const store= configureStore({
    reducer:{
        proyect:proyectReducer,
    }
})
