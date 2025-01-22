import {createSlice} from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: 'userSlice',
    initialState:[],
    reducers:{
        addFetchedUsers:(state, action) => {
            state.push(action.payload);
        },
        modifyColor:(state,action) =>{
            
        }
    }
});



export const {addFetchedUsers  } = userSlice.actions;

export default userSlice.reducer;