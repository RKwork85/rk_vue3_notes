<template>
    <div class="core-layout">
        <div class="core">
            <div class="core-chat">
                <img src="../assets/Kimi.png" style="height: auto; width: 35%;">
                <div class="chat-container">
                                
                                <textarea type="text" v-model="textareaContent" class="chat-container__input"  placeholder="输入“/”使用 Muzi 探索版，解决复杂的搜索问题"   @keydown="handleKeyDown"></textarea>
                    <div class="chat-container__tools">
                        <div class="button-left">
                            <button style="background-color: transparent; border: none;" @click="clearHeadle" onmouseover="this.style.cursor='pointer';">
                                <div class="clear"><img src="../assets/清理.png"></div>
                            </button>
                        </div>
                        <div class="button-right">
                            <div class="addition" style="margin-right: 4px;"><img src="../assets/加号.png"></div>
                            <button
                                class="submit"
                                :style="{ cursor: grayscaleNumber === 0 ? 'pointer' : 'default' }"
                                style="background-color: transparent; border: 0px;" @click="navigateToRoute">
                                <img src="../assets/发送.png" :style="{ filter: `grayscale(${grayscaleNumber}%)` }" />
                            </button>
                        </div>                    
                    </div>
                </div>
                <div class="search-options">
                    <label>
                        <input type="checkbox" v-model="isSearchEnabled" />
                        联网搜索
                    </label>
                </div>
                <div class="features">
                    <div class="feature" v-for="feature in features" :key="feature">
                        {{ feature }}
                    </div>
                </div>
            </div>
            <div class="core-foot">
                <p>footer 占位符号</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

import { chatHistory } from '../store/chatHistory';

const History = chatHistory();



const  navigateToRoute = () => {
    if (grayscaleNumber.value === 0) {
        const randomId = generateRandomId();
        History.data.chatId = randomId
        History.data.chatTime = new Date().toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // 使用24小时制
    });
        console.log(History.data)
        router.push(`/chat/${randomId}`); // 动态路由跳转
    }
};


</script>

<style scoped>

/* .button-right img:hover{
    cursor: pointer;
} */
 .addition{
    cursor:pointer
 }
.button-left img{
    height: 32px;
    width: auto;
}
.button-right img{
    height: 32px;
    width: auto;
}
.button-left{
    display: flex;
    justify-self: flex-start;
    width: 50%;
    /* 去除外边距，内边距 */
    margin-left: 4px;
}
.button-right{
    display: flex;
    justify-content: flex-end;
    width: 50%;
    margin-right: 8px;

}
.chat-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    width: 80%;
    height: 15vh;
    background-color: #ffffff;
    border-radius: 10px;
    border: 2px solid #cfcfcf2f;
    margin: 30px;
}
.chat-container textarea {
    line-height: normal;
    text-align: start;
    cursor: text;
    overflow-wrap: break-word;
    background-color: field;
    height: 60%;
    margin: 10px;
    border: none; /* 移除边框 */
    outline: none; /* 移除聚焦边框 */
    resize: none; 
}
.chat-container__input::-webkit-scrollbar {
    width: 8px;
}
.chat-container__input::placeholder {
  color: #999; /* 设置颜色为浅灰色 */
}
.chat-container__input::-webkit-scrollbar-thumb {
    background-color: #79828146;
    border-radius: 10px;
}

.chat-container__input::-webkit-scrollbar-track {
    background-color: transparent;
}



.chat-container__input {
    font-size: 13px; /* 根据你的实际字体大小设置 */
    line-height: 1; /* 正常行高 */
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}


.chat-container__tools {
    display: flex;
    align-items: center;
    height: 30%;
    /* justify-content: center; */
}
.core-layout {
    display: flex;
    height: 100vh;
    justify-content: space-around;
}

.core {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 70vw;
    align-items: center;
}

.core-chat {
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
}

.core-foot {
    height: 10vh;
}

.search-options {
    margin-bottom: 20px;
}

.features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.feature {
    background-color: #e0e7ff;
    padding: 10px;
    border-radius: 5px;
    color: #4a5f88;
}

img {
    height: auto;
    width: 50%;
}
</style>