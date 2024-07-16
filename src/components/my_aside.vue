<template>
    <router-view />
    <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <message />
                    </el-icon>UP主信息
                </template>
                <el-menu-item-group>
                    <template #title>UP</template>
                    <router-link to="/"><el-menu-item index="1-1">首页</el-menu-item></router-link>
                    <router-link to="/up_info"><el-menu-item index="1-2">UP主信息查询</el-menu-item></router-link>
                    <router-link to="/partition"><el-menu-item index="1-3">分区数据</el-menu-item></router-link>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                    <el-menu-item index="1-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title>Option4</template>
                    <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon><icon-menu /></el-icon>Navigator Two
                </template>
                <el-menu-item-group>
                    <template #title>Group 1</template>
                    <el-menu-item index="2-1">Option 1</el-menu-item>
                    <el-menu-item index="2-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                    <el-menu-item index="2-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="2-4">
                    <template #title>Option 4</template>
                    <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    <el-icon>
                        <setting />
                    </el-icon>Navigator Three
                </template>
                <el-menu-item-group>
                    <template #title>Group 1</template>
                    <el-menu-item index="3-1">Option 1</el-menu-item>
                    <el-menu-item index="3-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                    <el-menu-item index="3-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="3-4">
                    <template #title>Option 4</template>
                    <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </el-scrollbar>
</template>

<script>

import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

export default {
    name:"my_aside"
}
</script>

<style scoped>
.el-menu {
    background-color: var(--el-color-primary-light-8);
}

.el-menu .el-menu-item {
    background-color: var(--el-color-primary-light-8);
}

.el-menu .el-menu-item-group {
    background-color: var(--el-color-primary-light-8);
}

.el-menu .el-sub-menu {
    background-color: var(--el-color-primary-light-8);
}
</style>
