import {createSlice} from '@reduxjs/toolkit'
// Made a react slice to handle the whole state of application 
const assignmentSlice = createSlice({
    name:'assignment',
    initialState:{
        list:[],
        modal:false,
        sideBar:false,
        stats:true,
    },
    reducers:{
        openSideBar(state){
            state.sideBar = true
        },
        closeSideBar(state){
            state.sideBar = false
        },
        openModal(state){
            state.modal = true
        },
        closeModal(state){
            state.modal = false
        },
        addAssessment(state,action){
            state.list.push(action.payload)
            state.modal = false
        },
        handleStats(state){
            state.stats = !state.stats
        },
        openStats(state){
            state.stats = true
        }
    }
})

export default assignmentSlice.reducer

export const {openModal,closeModal,openSideBar,closeSideBar,addAssessment,handleStats,openStats} = assignmentSlice.actions

