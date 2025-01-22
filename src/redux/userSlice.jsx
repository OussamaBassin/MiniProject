import {createSlice} from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: 'userSlice',
    initialState:[],
    reducers:{
        addFetchedUsers:(state, action) => {
            state.push(action.payload);
        },
        modifyColor:(state,action) =>{
            const { id, couleur } = action.payload
            const user = state.find((el) => el.id === id);
            user.couleur = couleur;
        }
    }
});



export const {addFetchedUsers , modifyColor } = userSlice.actions;

export default userSlice.reducer;