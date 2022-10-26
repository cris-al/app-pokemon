import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer/reducer';

const store = configureStore({
    reducer: { pokemon: reducer },
});

export default store;