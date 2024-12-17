import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const courseSlice = createSlice({
    name:"course",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const product = action.payload;
            const exist = state.some((item)=> item.id === product.id);
            if(!exist){
               state.push(product);
            } 
        },
        deleteItem:(state , action) =>{
            const product = action.payload;
            const exist = state.find((item)=>item.id === product.id);
            if(exist){
                state.pop();
            }
        },
        clearCart:()=>{
            return [];
        }
    },
});

export default courseSlice.reducer;
export const {addItem , deleteItem , clearCart} = 
courseSlice.actions;