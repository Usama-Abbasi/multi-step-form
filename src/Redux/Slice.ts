import {createSlice} from '@reduxjs/toolkit';
import {RootStateOrAny} from 'react-redux';
export interface UserInterface{
    firstname:string;
    lastname:string;
    fname:string ;
    address:string; 
    email:string; 
    phoneno:string
}
const INITIAL_STATE:UserInterface={
    firstname:'',
    lastname:'',
    fname:'',
    address:'',
    email:'',
    phoneno:'',

}
const userSlice=createSlice({
    name:'user',
    initialState:INITIAL_STATE,
    reducers:{
        addFirstname:(state,action)=>{
            state.firstname=action.payload;
            // console.log(`State is ${state.firstname}`)
        },
        addLastname:(state,action)=>{
            state.lastname=action.payload;
            // console.log(`State is ${state.lastname}`)
        },
        addFathername:(state,action)=>{
            state.fname=action.payload;
            // console.log(`State is ${state.fname}`)
        },
        addAddress:(state,action)=>{
            state.address=action.payload;
            // console.log(`State is ${state.address}`)
        },
        addEmail:(state,action)=>{
            state.email=action.payload;
            // console.log(`State is ${state.email}`)
        },
        addPhoneNo:(state,action)=>{
            state.phoneno=action.payload;
            // console.log(`State is ${state.phoneno}`)
        }
    }

});
export const data=(state:RootStateOrAny)=>state;
export const {addFirstname,addLastname,addFathername,addAddress,addEmail,addPhoneNo} =userSlice.actions;
export default userSlice.reducer;