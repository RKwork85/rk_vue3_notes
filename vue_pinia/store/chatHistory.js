import { defineStore } from 'pinia'

export const chatHistory = defineStore('chatHistory', {
  state: () => ({
    data: {
      chatTime: '',             // 临时变量
      chatId: '',
      chatHistory: [],          // 将临时变量构造{}，存储位置
    },
  }),

  // actions: {
  //   generateUuid() {
  //     if (!this.uuid) {
  //       this.uuid = uuidv4()
  //     }
  //     else{
  //     this.flag = false           
  //   }
  //   }
  // },
  persist: true
})