<script>
export default
{
    props: {
        bangumiInfo: {
            type: Object,
            required: true
        }
    },
    data(){
        const value = this.bangumiInfo.score/2;
        return{
            value:value
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
        transform(num){
            if (num>=100000000)
                return num/100000000+'亿'
            else if (num>10000)
                return num/10000+'万'
            else return num+''
        },
        omitProfile(profile){
            let str;
            str = profile.substring(0, Math.min(profile.length, 199));
            if (profile.length>199)
                return str+'......'
            else return profile
        }
    },

    name:"show_bangumi"}
</script>

<template>
    <div style="height: 200px" class="video_info_container">
        <div style="width:8%;height:170px;padding:5px;">
            <el-image id="pic" :src="'//images.weserv.nl/?url=' + bangumiInfo.cover_url" @error="err" style="margin-top: 40px"></el-image>
        </div>
        <div style="width: 80%;height: 120px">
            <el-descriptions class=" margin-top" column="3" :size="large" border>
                <el-descriptions-item style="font-size: 12px">
                    <template #label>
                        <div class="cell-item">
                            番剧名
                        </div>
                    </template>
                    {{ bangumiInfo.name }}
                </el-descriptions-item>
                <el-descriptions-item style="font-size: 12px">
                    <template #label>
                        <div class="cell-item">
                            追番人数
                        </div>
                    </template>
                    {{transform(bangumiInfo.fans)}}
                </el-descriptions-item>
                <el-descriptions-item style="font-size: 12px">
                    <template #label>
                        <div class="cell-item">
                            播放量
                        </div>
                    </template>
                    {{transform(bangumiInfo.plays)}}
                </el-descriptions-item>
            </el-descriptions>
            <el-descriptions class="margin-top" :column="1" :size="large" border>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            简介
                        </div>
                    </template>
                    {{omitProfile(bangumiInfo.profile)}}
                </el-descriptions-item>
            </el-descriptions>
            <el-descriptions class="margin-top" :column="4" :size="large" border>
                <el-descriptions-item style="font-size: 12px">
                    <template #label>
                        <div class="cell-item">
                            标签
                        </div>
                    </template>
                    <el-tag v-for="tag in makeTag(bangumiInfo.tags)" size="small">
                        {{tag}}
                    </el-tag>
                </el-descriptions-item>
                <el-descriptions-item style="font-size: 12px">
                    <template #label>
                        <div class="cell-item">
                            开播时间
                        </div>
                    </template>
                    {{timeConvert(bangumiInfo.start_time)}}
                </el-descriptions-item>
                <el-descriptions-item style="font-size: 12px">
                    <template #label>
                        <div class="cell-item">
                            弹幕
                        </div>
                    </template>
                    {{transform(bangumiInfo.danmaku)}}
                </el-descriptions-item>
                <el-descriptions-item style="font-size: 12px">
                    <template #label>
                        <div class="cell-item">
                            评分人数
                        </div>
                    </template>
                    {{bangumiInfo.score_people}}
                </el-descriptions-item>
            </el-descriptions>
        </div>
        <div style="padding-top:70px;padding-left: 0;">
            {{bangumiInfo.score}}
            <el-rate
                v-model="value"
                disabled
                text-color="#ff9900"
            />
        </div>
    </div>
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