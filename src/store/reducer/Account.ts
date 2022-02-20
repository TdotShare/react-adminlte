import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AccountType = {
    email : string,
    username : string,
    fullname : string,
    token : string
}

export interface AccountState {
    auth: boolean,
    data: AccountType
}

const initialState: AccountState = {
    auth: false,
    data : { email : "" , username : "" , fullname : "" , token : "" }
}

export const AccountSlice = createSlice({
    name: 'Account',
    initialState,
    reducers: {
        addAccount: (state, action: PayloadAction<AccountType>) => {
            state.data = action.payload
        },
        deleteAccount: (state) => {
            state.data = { email : "" , username : "" , fullname : "" , token : "" }
        },
        setLoginSuccess: (state) => {
            state.auth = true
        },
        setLoginfail: (state) => {
            state.auth = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { addAccount, deleteAccount , setLoginSuccess , setLoginfail} = AccountSlice.actions

export default AccountSlice.reducer