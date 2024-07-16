<template>
    <el-container class="layout-container-demo" style="height: 100%">
        <el-aside width="15%" style="position: fixed; z-index: 1000;">
            <my_aside></my_aside>
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 12px; position: fixed; width: 100%; z-index: 999;">
                <div class="toolbar">
                    <el-dropdown>
                        <el-icon style="margin-right: 8px; margin-top: 1px">
                            <setting />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>View</el-dropdown-item>
                                <el-dropdown-item>Add</el-dropdown-item>
                                <el-dropdown-item>Delete</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span>Tom</span>
                </div>
            </el-header>
            <el-main style="">

                <div style="width:930px;height:70px;background-color:rgb(240,242,245);margin:60px 25px 0px 295px"
                    class="button_container">
                    <button class="button_box" style="background-color: white;width:83px;height:40px">找视频</button>
                    <button class="button_box" style="background-color: white;width:160px;height:40px">找up主p主</button>
                    <button class="button_box" style="background-color: white;width:160px;height:40px">用作品找up主</button>
                    <button class="button_box" style="background-color: white;width:160px;height:40px">找up主必看</button>
                    <button class="button_box"
                        style="background-color: white;width:180px;height:40px">用作品找up主必看</button>
                </div>
                <div style=" width:1375px; height:1100px;background-color:rgb(255,255,255);margin:0px 25px 25px 290px">
                    <button>"good"</button>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>


<script>
import { Setting } from '@element-plus/icons';
import my_aside from '../components/my_aside.vue'
export default {
    components: {
        my_aside,
    },
    data() {
        return {
            index1_data: ['>50W', '>100W', '>150W', '>200W', '>250W', '>300W', '>350W', '>400W', '>450W', '>500W'],
            index2_data: ["粉丝量", "点赞量", "播放量"],
        }
    },
    name: "partition" // 设置当前组件的名称为 GOGO
};
</script>
<style scoped>
.button_container {

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 50px;
    /* padding: 25px 25px; */
    justify-content: center;
    align-items: center;
    place-items: center;

}

.button_box {
    background-color: #fdfeff;
    color: white;
    border-color: var(--el-color-primary-light-7);
    font-size: 18px;
    margin: 0px;
    color: black;
    border-radius: 5px;
}
.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    height: 1000px;
    color: var(--el-text-color-primary);
    background-color: var(--el-color-primary-light-8);
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>
