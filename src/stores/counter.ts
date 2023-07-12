import { defineStore } from 'pinia';
import api from "../plugins/api";

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment: function () {
      this.count++;
      api.get('/todos/1').then((res: any) => {
        console.log(res)
      })

    },
  },
});
