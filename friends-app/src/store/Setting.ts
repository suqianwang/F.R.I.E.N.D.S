import { ActionContext } from 'vuex';
import { getStoreAccessors } from 'vuex-typescript';
import { State as RootState} from './state';
import { SettingState } from '@/store/SettingState';

export type SettingContext = ActionContext<SettingState, RootState>;
const { commit, read, dispatch } = getStoreAccessors<SettingState, RootState>('Setting');

export const Setting = {
    namespaced: true,

    state: {
        major: '',
        degree: '',
        interests: [],
        specifics: [],
        gender: '',
        name: '',
        username: '',
        friendsUID: [],
    } as SettingState,

    getters: {
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
        getFriendsUID(state: SettingState) {
            return state.friendsUID;
        },
    },

    mutations: {
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
        onFriendsUIDChanged(state: SettingState, friendsUID: string[]) {
            state.friendsUID = friendsUID;
        },
    },

    actions: {
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
        async updateFriendsUID(context: SettingContext, friendsUID: string[]): Promise<void> {
            context.commit('onFriendsUIDChanged', friendsUID);
        },
    },
};

export const SettingGetters = {
    getMajor: read(Setting.getters.getMajor),
    getDegree: read(Setting.getters.getDegree),
    getInterests: read(Setting.getters.getInterests),
    getSpecifics: read(Setting.getters.getSpecifics),
    getGender: read(Setting.getters.getGender),
    getName: read(Setting.getters.getName),
    getUsername: read(Setting.getters.getUsername),
    getFriendsUID: read(Setting.getters.getFriendsUID),
};

export const SettingActions = {
    updateMajor: dispatch(Setting.actions.updateMajor),
    updateDegree: dispatch(Setting.actions.updateDegree),
    updateInterests: dispatch(Setting.actions.updateInterests),
    updateSpecifics: dispatch(Setting.actions.updateSpecifics),
    updateGender: dispatch(Setting.actions.updateGender),
    updateName: dispatch(Setting.actions.updateName),
    updateUsername: dispatch(Setting.actions.updateUsername),
    updateFriendsUID: dispatch(Setting.actions.updateFriendsUID),
};

export const SettingMutations = {
    mutateMajor: commit(Setting.mutations.onMajorChanged),
    mutateDegree: commit(Setting.mutations.onDegreeChanged),
    mutateInterests: commit(Setting.mutations.onInterestsChanged),
    mutateSpecifics: commit(Setting.mutations.onSpecificsChanged),
    mutateGender: commit(Setting.mutations.onGenderChanged),
    mutateName: commit(Setting.mutations.onNameChanged),
    mutateUsername: commit(Setting.mutations.onUsernameChanged),
    mutateFriendsUID: commit(Setting.mutations.onFriendsUIDChanged),
};