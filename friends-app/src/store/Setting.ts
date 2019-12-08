import { ActionContext } from 'vuex';
import { getStoreAccessors } from 'vuex-typescript';
import { State as RootState} from './state';
import { SettingState } from '@/store/SettingState';

export type SettingContext = ActionContext<SettingState, RootState>;
const { commit, read, dispatch } = getStoreAccessors<SettingState, RootState>('Setting');

export const Setting = {
    namespaced: true,

    state: {
        email: '',
        password: '',
        major: '',
        degree: '',
        interests: [],
        specifics: [],
        gender: '',
        name: '',
        username: '',
    } as SettingState,

    getters: {
        getEmail(state: SettingState) {
            return state.email;
        },
        getPassword(state: SettingState) {
            return state.password;
        },
        getMajor(state: SettingState) {
            return state.major;
        },
        getDegree(state: SettingState) {
            return state.degree;
        },
        getInterests(state: SettingState) {
            return state.interests;
        },
        getSpecifics(state: SettingState) {
            return state.specifics;
        },
        getGender(state: SettingState) {
            return state.gender;
        },
        getName(state: SettingState) {
            return state.name;
        },
        getUsername(state: SettingState) {
            return state.username;
        },
    },

    mutations: {
        onEmailChanged(state: SettingState, email: string) {
            state.email = email;
        },
        onPasswordChanged(state: SettingState, password: string) {
            state.password = password;
        },
        onMajorChanged(state: SettingState, major: string) {
            state.major = major;
        },
        onDegreeChanged(state: SettingState, degree: string) {
            state.degree = degree;
        },
        onInterestsChanged(state: SettingState, interests: string[]) {
            state.interests = interests;
        },
        onSpecificsChanged(state: SettingState, specifics: string[]) {
            state.specifics = specifics;
        },
        onGenderChanged(state: SettingState, gender: string) {
            state.gender = gender;
        },
        onNameChanged(state: SettingState, name: string) {
            state.name = name;
        },
        onUsernameChanged(state: SettingState, username: string) {
            state.username = username;
        },
    },

    actions: {
        async updateEmail(context: SettingContext, email: string): Promise<void> {
            context.commit('onEmailChanged', email);
        },
        async updatePassword(context: SettingContext, password: string): Promise<void> {
            context.commit('onPasswordChanged', password);
        },
        async updateMajor(context: SettingContext, major: string): Promise<void> {
            context.commit('onMajorChanged', major);
        },
        async updateDegree(context: SettingContext, degree: string): Promise<void> {
            context.commit('onDegreeChanged', degree);
        },
        async updateInterests(context: SettingContext, interests: string[]): Promise<void> {
            context.commit('onInterestsChanged', interests);
        },
        async updateSpecifics(context: SettingContext, specifics: string[]): Promise<void> {
            context.commit('onSpecificsChanged', specifics);
        },
        async updateGender(context: SettingContext, gender: string): Promise<void> {
            context.commit('onGenderChanged', gender);
        },
        async updateName(context: SettingContext, name: string): Promise<void> {
            context.commit('onNameChanged', name);
        },
        async updateUsername(context: SettingContext, username: string): Promise<void> {
            context.commit('onUsernameChanged', username);
        },
    },
};

export const SettingGetters = {
    getEmail: read(Setting.getters.getEmail),
    getPassword: read(Setting.getters.getPassword),
    getMajor: read(Setting.getters.getMajor),
    getDegree: read(Setting.getters.getDegree),
    getInterests: read(Setting.getters.getInterests),
    getSpecifics: read(Setting.getters.getSpecifics),
    getGender: read(Setting.getters.getGender),
    getName: read(Setting.getters.getName),
    getUsername: read(Setting.getters.getUsername),
};

export const SettingActions = {
    updateEmail: dispatch(Setting.actions.updateEmail),
    updatePassword: dispatch(Setting.actions.updatePassword),
    updateMajor: dispatch(Setting.actions.updateMajor),
    updateDegree: dispatch(Setting.actions.updateDegree),
    updateInterests: dispatch(Setting.actions.updateInterests),
    updateSpecifics: dispatch(Setting.actions.updateSpecifics),
    updateGender: dispatch(Setting.actions.updateGender),
    updateName: dispatch(Setting.actions.updateName),
    updateUsername: dispatch(Setting.actions.updateUsername),
};

export const SettingMutations = {
    mutateEmail: commit(Setting.mutations.onEmailChanged),
    mutatePassword: commit(Setting.mutations.onPasswordChanged),
    mutateMajor: commit(Setting.mutations.onMajorChanged),
    mutateDegree: commit(Setting.mutations.onDegreeChanged),
    mutateInterests: commit(Setting.mutations.onInterestsChanged),
    mutateSpecifics: commit(Setting.mutations.onSpecificsChanged),
    mutateGender: commit(Setting.mutations.onGenderChanged),
    mutateName: commit(Setting.mutations.onNameChanged),
    mutateUsername: commit(Setting.mutations.onUsernameChanged),
};