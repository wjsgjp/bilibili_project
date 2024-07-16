<template>
    <div class="index_container">
        <div class="flex flex-wrap gap-4 items-center">
            <el-select v-model="selectedOption" placeholder="Select" size="large" style="width: 100px">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item" />
            </el-select>
            <el-input v-model="input" style="width: 480px" placeholder="Please input" />
            <el-button style="height: 40px;" type="primary" plain @click="handleSearch">查找</el-button>
        </div>
        <div class="check_box">
            <div class="category-label">粉丝数</div>
            <el-radio-group v-model="checkboxGroup1" size="large">
                <el-radio-button v-for="(item, index) in index1_data" :key="index" label="item.value"
                    :value="item.value">
                    {{ item.label }}
                </el-radio-button>
            </el-radio-group>
        </div>
        <div class="check_box">
            <div class="category-label">排序方式</div>
            <el-radio-group v-model="checkboxGroup2" size="large">
                <el-radio-button v-for="(item, index) in index2_data" :key="index" label="item" :value="item">
                    {{ item }}
                </el-radio-button>
            </el-radio-group>
        </div>
    </div>
    <div class="data_container" v-loading="load">
        <el-scrollbar style="width:1150px;margin-left: 70px;margin-top: 20px;">
            <div v-for="(item, index) in upinfos" :key="index" style="width:1150px">
                <show_up style="border: 1px solid rgb(133,133,133);" :upinfos="item"></show_up>
            </div>
        </el-scrollbar>
    </div>
</template>
<script>
import { ref } from 'vue';
import { Message, Setting, List } from '@element-plus/icons'; // 假设这些是 Element Plus 提供的图标组件
import show_up from './show_up.vue'
export default {
    components: {
        Setting,
        Message,
        List,
        show_up// 注册 index_show 组件
    },
    data() {
        return {
            index1_data: [
                { label: '>50W', value: 500000 },
                { label: '>100W', value: 1000000 },
                { label: '>150W', value: 1500000 },
                { label: '>200W', value: 2000000 },
                { label: '>250W', value: 2500000 },
                { label: '>300W', value: 3000000 },
                { label: '>350W', value: 3500000 },
                { label: '>400W', value: 4000000 },
                { label: '>450W', value: 4500000 },
                { label: '>500W', value: 5000000 }
            ],
            index2_data: ["粉丝量", "点赞量", "播放量"],
            upinfos: [
                { "name": "罗翔说刑法", "img_url": "https:\/\/i1.hdslb.com\/bfs\/face\/4e5d0a51273fe3f8fabc700b6a71bb8a38c9e21e.jpg", "profile": "工作邮箱：xfluoxiang@126.com", "fans": 31180727, "likes": 94948460, "plays": 918460518, "uid": 517327498, "videos": 384 },
                { "name": "小片片说大片", "img_url": "https:\/\/i2.hdslb.com\/bfs\/face\/949fd3f0b9fe23703c970d494edc41ae52ee32de.jpg", "profile": "片片陪你看电影，给你不一样的影视推荐。VX公众号：小片片说大片。商务合作VX：skibe0320", "fans": 7048065, "likes": 91438064, "plays": 1807526029, "uid": 10119428, "videos": 1471 }
            ],
            selectedOption: 'up', // 绑定选择的选项值
            input: '', // 绑定输入框的值
            options: [
                { label: 'up', value: 'up' },
                { label: '简介', value: '简介' },
                { label: 'uid', value: 'uid' }
            ],
            checkboxGroup1: { label: '>50W', value: 500000 },  // 默认选择第一个粉丝数量选项
            checkboxGroup2: '粉丝量',
            load:false
            // 默认选择第一个排序方式选项
        };
    },
    methods: {
        handleSearch() {
            this.load = true;
            const params = {};
            const { selectedOption, input, checkboxGroup2 } = this;
            console.log(selectedOption);
            console.log(input);
            console.log(checkboxGroup2);

            if (selectedOption.value === 'up') {
                params.name = input;
            } else if (selectedOption.value === '简介') {
                params.profile = input;
            } else if (selectedOption.value === 'uid') {
                params.uid = input;
            }

            if (checkboxGroup2 === '粉丝量') {
                params.fans = "True";
            } else if (checkboxGroup2 === '点赞量') {
                params.likes = "True";
            } else if (checkboxGroup2 === '播放量') {
                params.plays = "True";
            }

            params.fans_limit = this.checkboxGroup1.value;
            console.log('搜索参数:', params);

            setTimeout(() => {
                this.load = false;
            }, 2000);
        }
    },

    name: "search_util" // 设置当前组件的名称为 GOGO
};
</script>
<style scoped>
.data_container {
    position: absolute;
    margin-top: 14%;
    margin-left: 37.5px;
    margin-right: 37.5px;
    width: 1300px;
    height: 94%;
    background-color: var(--el-color-primary-light-8);
}

.margintop {

    margin-top: 20px;
}

.check_box {
    display: flex;
    direction: row;
    margin-top: 20px;
    margin-left: 70px;

}

.index_container {
    position: absolute;
    margin-top: 2%;
    margin-left: 37.5px;
    margin-right: 37.5px;
    width: 1300px;
    height: 21%;
    background-color: var(--el-color-primary-light-8);
}

.flex {
    display: flex;
    margin-top: 20px;
    margin-left: 70px;
}

.category-label {
    margin-top: 8px;
    margin-right: 10px;
    font-weight: bold;
}
</style>