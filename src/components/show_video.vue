<script>
    export default
    {
        props: {
            videoInfo: {
                type: Object,
                required: true
        }
    },
        data(){
           return{
                s: ['1'],
                generated: false
            }
        },
        methods:{
            err(){
                console.log(document.getElementById('pic').getAttribute('src'))
            },
            timeConvert(timeStamp){
                let now = new Date(timeStamp),
                    y = now.getFullYear(),
                    m = now.getMonth() + 1,
                    d = now.getDate();
                return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
            },
            makeTag(tags){
                return tags.split(',')
            },
            handleChange(){
                if (!this.generated) {
                    console.log(100)
                    this.generated = true
                }
                //发请求生成词云
            }
        },

    name:"show_video"}
</script>

<template>
    <el-collapse v-model="s">
        <el-collapse-item name="1" >
            <template #title>
                {{videoInfo.title}}
            </template>
            <div style="height: 130px" class="video_info_container">
                <div style="width:15%;height:170px;padding:5px;">
                    <el-image id="pic" :src="'//images.weserv.nl/?url=' + videoInfo.pic" @error="err"></el-image>
                </div>
                <div style="width: 80%;height: 120px">
                    <el-descriptions class=" margin-top" column="4" :size="large" border>
                        <el-descriptions-item style="font-size: 12px">
                            <template #label>
                                <div class="cell-item">
                                    BV号
                                </div>
                            </template>
                            {{ videoInfo.bid }}
                        </el-descriptions-item>
                        <el-descriptions-item style="font-size: 12px">
                            <template #label>
                                <div class="cell-item">
                                    Up主
                                </div>
                            </template>
                            {{videoInfo.uname}}
                        </el-descriptions-item>
                        <el-descriptions-item style="font-size: 12px">
                            <template #label>
                                <div class="cell-item">
                                    点赞
                                </div>
                            </template>
                            {{ videoInfo.like }}
                        </el-descriptions-item>
                        <el-descriptions-item style="font-size: 12px">
                            <template #label>
                                <div class="cell-item">
                                    投币
                                </div>
                            </template>
                            {{ videoInfo.coin }}
                        </el-descriptions-item>
                    </el-descriptions>
                    <el-descriptions class="margin-top" :column="5" :size="large" border>
                        <el-descriptions-item style="font-size: 12px">
                            <template #label>
                                <div class="cell-item">
                                    视频时长
                                </div>
                            </template>
                            {{parseInt(videoInfo.duration/60)}}:{{videoInfo.duration%60}}
                        </el-descriptions-item>
                        <el-descriptions-item style="font-size: 12px">
                            <template #label>
                                <div class="cell-item">
                                    发布时间
                                </div>
                            </template>
                            {{timeConvert(videoInfo.pubdate)}}
                        </el-descriptions-item>
                        <el-descriptions-item style="font-size: 12px">
                            <template #label>
                                <div class="cell-item">
                                    播放
                                </div>
                            </template>
                            {{videoInfo.view}}
                        </el-descriptions-item>
                        <el-descriptions-item style="font-size: 12px">
                            <template #label>
                                <div class="cell-item">
                                    收藏
                                </div>
                            </template>
                            {{videoInfo.favorite}}
                        </el-descriptions-item>
                        <el-descriptions-item style="font-size: 12px">
                            <template #label>
                                <div class="cell-item">
                                    分享
                                </div>
                            </template>
                            {{videoInfo.share}}
                        </el-descriptions-item>
                    </el-descriptions>
                    <el-descriptions class="margin-top" :column="3" :size="large" border>
                        <el-descriptions-item style="font-size: 12px">
                            <template #label>
                                <div class="cell-item">
                                    标签
                                </div>
                            </template>
                            <el-tag v-for="tag in makeTag(videoInfo.tags)" size="small">
                                {{tag}}
                            </el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item style="font-size: 12px">
                            <template #label>
                                <div class="cell-item">
                                    评论
                                </div>
                            </template>
                            {{videoInfo.reply}}
                        </el-descriptions-item>
                        <el-descriptions-item style="font-size: 12px">
                            <template #label>
                                <div class="cell-item">
                                    弹幕
                                </div>
                            </template>
                            {{videoInfo.danmaku}}
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
        </el-collapse-item>
        <el-collapse-item name="2" @click="handleChange">
            <template #title>
                生成弹幕词云
            </template>
            <el-image :src="require('../assets/logo.png')" @error="err">
            </el-image>
        </el-collapse-item>
    </el-collapse>
</template>
<style scoped>
.video_info_container{
    width:1150px;
    height:160px;
    display: flex;
    background-color: white;
}
.cell-item {
    width:80%;
    text-align: left;
    font-size:12px;
}
</style>