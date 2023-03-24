import { configureStore } from '@reduxjs/toolkit';
import { reducer as questionReducer } from './features/questionSlice';

/**
 * The configured Redux store containing the application state.
 * @type {import('@reduxjs/toolkit').store}
 */
const store = configureStore({
    reducer: {
        questions: questionReducer,
    },
});

export default store;