import Vuex from 'vuex';
import { State } from './state';
import { Setting } from '@/store/Setting';

export const createStore = () => new Vuex.Store<State>({
    modules: {
        Setting,
    },
});