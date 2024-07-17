<template>
        <div style="margin-top:20px;margin-left: 20px ;width:1375px; position: absolute; display: flex;">
            <el-radio-group v-model="radio1" size="large">
                <el-radio-button v-for="(item, index) in PartitionIndex" :key="index" label="item" :value="index">
                    {{ item }}
                </el-radio-button>
            </el-radio-group>
            <img_show></img_show>
        </div>
</template>

<script>
import { ref } from 'vue'
import img_show from './img_show.vue'
export default {
    name: "data_shower",
    data() {
        return {
            PartitionIndex: ["全部", "动物区", "运动", "汽车", "美食", "动画", "科技", "游戏", "生活", "鬼畜", "时尚", "音乐", "舞蹈", "影视"],
            radio1: 0
        }
    },
    components: {
        img_show
    }
}

</script>
