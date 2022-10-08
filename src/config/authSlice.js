import { createSlice } from '@reduxjs/toolkit'

export const scoreSlice = createSlice({
    name : 'user',
    initialState: {
        name:"",
        email:"",
        photo:""  
    },
    reducers: {
        setUserDetails:(state,action)=>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setSignOutState:(state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }

    }
})

export const { setSignOutState, setUserDetails } = scoreSlice.actions

export const selectUserName = (state)=> state.user.name;
export const selectUserEmail = (state)=> state.user.email;
export const selectUserPhoto = (state)=> state.user.photo;

export default scoreSlice.reducer