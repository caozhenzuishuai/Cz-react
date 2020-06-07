import { createStore } from '../lib/redux';
import reducers from './reducers';
const store = createStore(reducers);
export default store;
