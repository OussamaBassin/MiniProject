import {createSlice} from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: 'userSlice',
    initialState:[],
    reducers:{
        addFetchedUsers:(state, action) =>{
            state = action.payload;
        }
    }
});



export const {addFetchedUsers} = userSlice.actions;

export default userSlice.reducer;