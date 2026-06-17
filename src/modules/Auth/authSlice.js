import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: null,
    name: null,
    roleId: null,
    roleType: null,
    roleName: null,
    id:null,
    profile:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { name, token,roleId,roles,roleType,userId,profile } = action.payload
            state.name = name
            state.token = token
            state.roleId = roleId
            state.roleName = roles
            state.roleType = roleType
            state.userId = userId
            state.profile = profile
        },
        logOut: (state, action) => {
            state.name = null
            state.token = null
            state.roleId = null
            state.roleName = null
            state.roleType = null
            state.userId = null
            state.profile = null


        }
    }
})

export const { setCredentials, logOut } = authSlice.actions


export const selectCurrentUser = (state) => state.auth.name
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentUserRole = (state) => state.auth.roleType
export const selectCurrentRoleId = (state) => state.auth.roleId
export const selectCurrentRoleName = (state) => state.auth.roleName
export const selectCurrentId = (state) => state.auth.userId
export const setProfile = (state) => state.auth.profile


export default authSlice.reducer