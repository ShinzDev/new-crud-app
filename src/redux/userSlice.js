import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./db";


const initialState = userList


const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers : {
        addUser:(state,actions) => {
         state.push(actions.payload)
        },
        updateUser:(state,actions) => {
            const {id, name, email} = actions.payload
            const updateUser = state.find(user=> user.id == id);
            if(updateUser) {
                updateUser.name = name;
                updateUser.email = email;
            }
        },
        deleteUser: (state, actions) => {
            const {id} = actions.payload
            const updateUser = state.find(user=> user.id == id);
            if (updateUser) {
                return state.filter(user => user.id !== id)
            }
        }
    }
   
})


export default userSlice.reducer;
export const {addUser, updateUser, deleteUser} = userSlice.actions;