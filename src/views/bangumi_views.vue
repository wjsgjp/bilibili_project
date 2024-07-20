<script>
import bangumi from "@/components/bangumi.vue";
import my_aside from "@/components/my_aside.vue";
import { Setting } from '@element-plus/icons';
import Search_video from "@/components/search_video.vue";
export default {
    name: "bangumi_views",
    components: {Search_video, my_aside, bangumi, Setting}
}
</script>

<template>
    <el-container class="layout-container-demo" style="height: 100%">
        <el-aside width="15%" style="position: fixed; z-index: 1000;">
            <my_aside></my_aside>
        </el-aside>
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
            <div style="width:930px;height:70px;background-color:rgb(240,242,245);margin:60px 25px 0 295px;text-align: left" class="button_container">
                <strong style="font-size: 40px">番剧</strong>
            </div>
            <div style=" width:1375px; height:1100px;background-color:rgb(255,255,255);margin:0 25px 25px 290px">
                <bangumi></bangumi>
<!--                <search_video></search_video>-->
            </div>
        </el-main>
    </el-container>
</template>

<style scoped>

</style>