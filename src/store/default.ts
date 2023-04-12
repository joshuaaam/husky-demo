import { defineStore } from 'pinia';

export const useTestStore = defineStore('test', {
    // state属性
    state: () => {
        return {
            name: 'Joshua',
            sex: '男',
        };
    },
    // getters
    getters: {
        getNameData: (state) => {
            return '获取到的名字' + state.name;
        },
    },
    // actions
    actions: {
        saveNameData(name: string) {
            this.name = name;
        },
    },
});
