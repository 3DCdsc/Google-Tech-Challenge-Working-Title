import { createStore } from 'redux';

import { rootReducer } from './reducers';


const mainstore = createStore(
    rootReducer,
);
export default mainstore;


