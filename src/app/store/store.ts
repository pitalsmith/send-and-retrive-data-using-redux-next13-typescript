import {configureStore, combineReducers} from "@reduxjs/toolkit";
import userReducer from '../slice/userSlices';
import { todoReducer } from "../reducer/todoReducer";

// const rootReducer =  combineReducers({
//     user: userReducer,
//     todos: todoReducer
// })

export function makeStore() {
    return configureStore ({
        reducer:{
            user: userReducer,
            todos: todoReducer
        }
    })
}

export const store = makeStore()
//export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch