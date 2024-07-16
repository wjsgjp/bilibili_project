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
    name: "home" // 设置当前组件的名称为 GOGO
};
</script>
<style scoped>
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
