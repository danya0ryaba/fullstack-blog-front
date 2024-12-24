import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    posts: {
        items: unknown[],
        status: string,
    },
    tags: {
        items: unknown[],
        status: string,
    }
}

const initialState: CounterState = {
    posts: {
        items: [],
        status: 'loading',
    },
    tags: {
        items: [],
        status: 'loading',
    },
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
})


export const postsReducer = postsSlice.reducer;