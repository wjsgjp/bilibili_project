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
            <div style="width:930px;height:70px;background-color:rgb(240,242,245);margin:60px 25px 0px 295px"
                class="button_container">
                <button class="button_box" style="background-color: white;width:83px;height:40px">找视频</button>
                <button class="button_box" style="background-color: white;width:160px;height:40px">找up主p主</button>
                <button class="button_box" style="background-color: white;width:160px;height:40px">用作品找up主</button>
                <button class="button_box" style="background-color: white;width:160px;height:40px">找up主必看</button>
                <button class="button_box" style="background-color: white;width:180px;height:40px">用作品找up主必看</button>
            </div>
            <div style=" width:1375px; height:1100px;background-color:rgb(255,255,255);margin:0px 25px 25px 290px">
                <search_util></search_util>
            </div>
        </el-main>
    </el-container>

</template>
<script>
import { Setting } from '@element-plus/icons'; // 
import my_aside from '../components/my_aside.vue'
import search_util from '@/components/search_util.vue';
export default {
    components: {
        Setting,
        my_aside,
        search_util
    },
    data() {
        return {
            index1_data: ['>50W', '>100W', '>150W', '>200W', '>250W', '>300W', '>350W', '>400W', '>450W', '>500W'],
            index2_data: ["粉丝量", "点赞量", "播放量"],
            upinfos: [{ "name": "罗翔说刑法", "img_url": "https:\/\/i1.hdslb.com\/bfs\/face\/4e5d0a51273fe3f8fabc700b6a71bb8a38c9e21e.jpg", "profile": "工作邮箱：xfluoxiang@126.com", "fans": 31180727, "likes": 94948460, "plays": 918460518, "uid": 517327498, "videos": 384 }, { "name": "小片片说大片", "img_url": "https:\/\/i2.hdslb.com\/bfs\/face\/949fd3f0b9fe23703c970d494edc41ae52ee32de.jpg", "profile": "片片陪你看电影，给你不一样的影视推荐。VX公众号：小片片说大片。商务合作VX：skibe0320", "fans": 7048065, "likes": 91438064, "plays": 1807526029, "uid": 10119428, "videos": 1471 }, { "name": "刘老师说电影", "img_url": "https:\/\/i1.hdslb.com\/bfs\/face\/145226ff2d32d7c99b8ea3591ffec2f38fc9d3d3.jpg", "profile": "合作：liulaoshi@laoliumovie.com大号是@哎呀我去刘老师", "fans": 5075658, "likes": 41812204, "plays": 1096852159, "uid": 79061224, "videos": 910 }, { "name": "小Lin说", "img_url": "https:\/\/i1.hdslb.com\/bfs\/face\/cf895b86c955e4ce62b28b3c2bb5bbc77f9fd410.jpg", "profile": "Whaat?!人世间竟有如此有趣又有料的天仙!!北大->哥大->摩根大通->创业合作xiao_lin_shuo@163.com", "fans": 4430241, "likes": 9700264, "plays": 244524991, "uid": 520819684, "videos": 131 }, { "name": "虫哥说电影", "img_url": "https:\/\/i1.hdslb.com\/bfs\/face\/b830989d9b8af6001da511a8a95b0ea806c11b60.jpg", "profile": "【商务合作】wx：cywh378", "fans": 3148656, "likes": 36726711, "plays": 863683806, "uid": 29296192, "videos": 593 }, { "name": "罗汉解说", "img_url": "https:\/\/i0.hdslb.com\/bfs\/face\/005cd7e4abb181252aa8f1d6994c763ec2252f3c.jpg", "profile": "图一乐就好～商务合作vx：lhjsshangwu请注明来意", "fans": 2366407, "likes": 23494929, "plays": 264471015, "uid": 51896064, "videos": 181 }, { "name": "老坛胡说", "img_url": "https:\/\/i1.hdslb.com\/bfs\/face\/01b96e872a5b0df74e66b94126e13a78cb6f9b74.jpg", "profile": "@edward8n24", "fans": 2299287, "likes": 18633138, "plays": 234120309, "uid": 279583114, "videos": 140 }, { "name": "老邪说电影", "img_url": "https:\/\/i1.hdslb.com\/bfs\/face\/0fbf6aad74852d4cd68f72d50de62d9f11f7e886.jpg", "profile": "【商务合作】wx:L13311286278，【老邪个人】wx@lxsdy666，微博@老邪说电影", "fans": 2130684, "likes": 34474088, "plays": 559950871, "uid": 154021609, "videos": 599 }, { "name": "阿三解说", "img_url": "https:\/\/i0.hdslb.com\/bfs\/face\/9bb060734c9402d8cd5b2138b688354bb0f82333.jpg", "profile": "商单合作vx：w864085100围脖：阿三解说招人：1186020160@qq.com", "fans": 2054048, "likes": 20712303, "plays": 265883424, "uid": 9411426, "videos": 230 }]
        }

    },
    name: "GOGO" // 设置当前组件的名称为 GOGO
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

.layout-container-demo .el-aside .el-menu {
    background-color: var(--el-color-primary-light-8);
}

.layout-container-demo .el-aside .el-menu .el-menu-item {
    background-color: var(--el-color-primary-light-8);
}

.layout-container-demo .el-aside .el-menu .el-menu-item-group {
    background-color: var(--el-color-primary-light-8);
}

.layout-container-demo .el-aside .el-menu .el-sub-menu {
    background-color: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
    border-right: none;
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
