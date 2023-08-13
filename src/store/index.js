import {configureStore} from '@reduxjs/toolkit'
import assignmentReducer from './slice/assignmentSlice'
export const store = configureStore({
    reducer:{
        assignment:assignmentReducer
    }
})


export * from './slice/assignmentSlice'