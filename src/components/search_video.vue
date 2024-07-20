<script>
import show_video from "@/components/show_video.vue";
export default{
        components: {show_video},
        data(){
            return {
                selectedOption: '',
                videoOptions: [
                    {label:'BV号', value:'BV号'},
                    {label:'Up主', value:'Up主'},
                    {label:'视频标题', value:"视频标题"}
                ],
                videoInput: '',
                duration: [0,60],
                dateRange: [new Date(2024,5,1),new Date(2024,6,1)],
                selectedRankParam: 'view',
                rankParam: [
                    {label:'播放量', value:'view'},
                    {label:'点赞数', value:'like'},
                    {label:'投币量', value:'coin'},
                    {label:'分享量', value:'share'},
                    {label:'弹幕量', value:'danmaku'},
                    {label:'评论量', value:'reply'},
                    {label:'收藏量', value:'favorite'},
                    {label:'发布时间升序', value:'date_order_asc'},
                    {label:'发布时间降序', value:'date_order_desc'}
                ],
                load:false,
                videoInfo: [
                    {
                        "bid": "BV1P3411b7dY",
                        "pic": "https://i2.hdslb.com/bfs/archive/9ac78e6bc9cdc4ca036104d964d4c3ab9e6c46d7.jpg",
                        "title": "EDG-S11《ELOG》丨冠军背后",
                        "pubdate": 1638057600000,
                        "duration": 1603,
                        "view": 1493857,
                        "like": 77533,
                        "coin": 57025,
                        "share": 5777,
                        "danmaku": 24004,
                        "reply": 4206,
                        "favorite": 21399,
                        "uid": 31536760,
                        "uname": "EDG电子竞技俱乐部",
                        "tags": "LOL,英雄联盟,EDG,电子竞技,电竞,英雄联盟s11,EDG夺冠,为爱而聚，E起前进"
                    },
                    {
                        "bid": "BV1P3411b7dY",
                        "pic": "https://i2.hdslb.com/bfs/archive/9ac78e6bc9cdc4ca036104d964d4c3ab9e6c46d7.jpg",
                        "title": "EDG-S11《ELOG》丨冠军背后",
                        "pubdate": 1638057600000,
                        "duration": 1603,
                        "view": 1493857,
                        "like": 77533,
                        "coin": 57025,
                        "share": 5777,
                        "danmaku": 24004,
                        "reply": 4206,
                        "favorite": 21399,
                        "uid": 31536760,
                        "uname": "EDG电子竞技俱乐部",
                        "tags": "LOL,英雄联盟,EDG,电子竞技,电竞,英雄联盟s11,EDG夺冠,为爱而聚，E起前进"
                    }
                ],
            }
        },
        methods: {
            handleSearch() {
                let start_year, start_month, start_day, end_year, end_month, end_day;
                this.load = true;
                const params = {};
                const {selectedOption, videoOptions, videoInput, duration, dateRange,selectedRankParam} = this;
                console.log(selectedOption, videoOptions, videoInput, duration, dateRange,selectedRankParam)
                if (selectedOption.value === 'BV号')
                    params.bid = videoInput;
                else if (selectedOption.value === 'Up主')
                    params.uname = videoInput;
                else if (selectedOption.value === '视频标题')
                    params.title = videoInput;

                if (selectedRankParam === 'view')
                    params.view=true
                else if (selectedRankParam === 'like')
                    params.like=true
                else if (selectedRankParam === 'coin')
                    params.coin=true
                else if (selectedRankParam === 'share')
                    params.share=true
                else if (selectedRankParam === 'danmaku')
                    params.danmaku=true
                else if (selectedRankParam === 'reply')
                    params.reply=true
                else if (selectedRankParam === 'favorite')
                    params.favorite=true
                else if (selectedRankParam === 'date_order_asc')
                    params.date_order_asc = true
                else if (selectedRankParam === 'date_order_desc')
                    params.date_order_desc = true

                params.duration_min=duration[0]
                params.duration_max=duration[1]


                start_year = dateRange[0].getFullYear().toString().padStart(4, "0")
                start_month = (dateRange[0].getMonth()+1).toString().padStart(2, "0")
                start_day = dateRange[0].getDate().toString().padStart(2, "0")
                end_year = dateRange[1].getFullYear().toString().padStart(4, "0")
                end_month = (dateRange[1].getMonth()+1).toString().padStart(2, "0")
                end_day = dateRange[1].getDate().toString().padStart(2, "0")

                params.pubdate_start = `${start_year}-${start_month}-${start_day} 00:00:00`
                params.pubdate_end=`${end_year}-${end_month}-${end_day} 23:59:59`
                //发请求search
                setTimeout(() => {
                    this.load = false;
                }, 2000);
            },
            change(){
                console.log(this.dateRange)
            }
        }
    }
</script>

<template>
    <div class="index_container">
        <div class="flex flex-wrap gap-4 items-center">
            <el-select v-model="selectedOption" placeholder="Select" size="large" style="width: 140px;">
                <el-option v-for="item in videoOptions" :key="item.value" :label="item.label" :value="item" />
            </el-select>
            <el-input id="input" v-model="videoInput" style="width: 480px;height:40px;" placeholder="Please input"></el-input>
            <el-button style="height: 40px;" type="primary" plain @click="handleSearch">查找</el-button>
        </div>
        <div class="check_box" style="width: 900px">
            <span class="category-label" style="width: 80px;">视频时长</span>
            <el-slider v-model="duration" step="5" range show-stops :max=60 style="width: 300px"></el-slider>
            <span class="category-label" style="width: 80px;margin-left: 50px">发布时间</span>
            <el-date-picker @change="change" style="width:300px" v-model="dateRange" type="daterange" range-separator="to" start-placeholder="起始时间" end-placeholder="截止时间" unlink-panels>
            </el-date-picker>
        </div>
        <div class="check_box">
            <span class="category-label" style="width: 80px;">排序方式</span>
            <el-radio-group v-model="selectedRankParam">
                <el-radio v-for="item in rankParam" :key="item.value" :value="item.value">
                    {{ item.label }}
                </el-radio>/
            </el-radio-group>
        </div>


    </div>
    <div class="data_container" v-loading="load">
        <el-scrollbar style="width:1170px;margin-left: 70px;margin-top: 20px;">
            <div v-for="(item, index) in videoInfo" :key="index" style="width:1150px">
                <show_video style="border: 1px solid rgb(133,133,133);" :videoInfo="item"></show_video>
            </div>
        </el-scrollbar>
    </div>
</template>

<style scoped>
.data_container {
    position: absolute;
    margin-top: 14%;
    margin-left: 37.5px;
    width: 1300px;
    height: 94%;
    background-color: var(--el-color-primary-light-8);
}



.check_box {
    display: flex;
    direction: ltr;
    margin-top: 20px;
    margin-left: 70px;

}

.index_container {
    position: absolute;
    margin-top: 2%;
    margin-left: 37.5px;
    margin-right: 37.5px;
    width: 1300px;
    height: 190px;
    background-color: var(--el-color-primary-light-8);
}

.flex {
    display: flex;
    margin-top: 20px;
    margin-left: 70px;
}

.category-label {
    margin-top: 4px;
    margin-right: 5px;
    font-weight: bold;
}
</style>