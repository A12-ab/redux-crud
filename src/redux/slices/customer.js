import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: 'customer',
    initialState: [],
    reducers: {
        createCustomer : (state, actin)=>{
            return [
                ...state,
                actin.payload
            ]
        },
        deleteCustomer: (state, action)=>{
            state.splice(action.payload, 1)
            return state
        }
    }
})

export const { createCustomer, deleteCustomer } = customerSlice.actions 
export default customerSlice.reducer