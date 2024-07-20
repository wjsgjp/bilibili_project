<script>
import Show_bangumi from "@/components/show_bangumi.vue";
export default{
    components: {Show_bangumi},
    data(){
        return {
            selectedOption: '',
            videoOptions: [
                {label:'番剧名', value:'番剧名'},
                {label:'简介', value:'简介'},
                {label:'番剧标签', value:"番剧标签"}
            ],
            videoInput: '',
            selectedFans:50000,
            fansOptions:[
                {label:'>5W',value:50000},
                {label:'>10W',value:100000},
                {label:'>50W',value:500000},
                {label:'>100W',value:1000000},
                {label:'>300W',value:3000000},
                {label:'>500W',value:5000000},
            ],
            dateRange: [new Date(2000,0,1),new Date(2024,6,1)],
            selectedRankParam: 'score',
            rankParam: [
                {label:'评分', value:'score'},
                {label:'评分人数', value:'score_people'},
                {label:'弹幕数量', value:'danmaku'},
                {label:'播放量', value:'plays'}
            ],
            selectedScore:6,
            scoreOptions:[
                {label:'>=6',value:6},
                {label:'>=8',value:8},
                {label:'>=9',value:9},
                {label:'>=9.5',value:9.5},
                {label:'>=9.8',value:9.8}
            ],
            load:false,
            videoInfo: [
                {"cover_url":"https:\/\/i0.hdslb.com\/bfs\/bangumi\/image\/14ccd8457a9b7351e7be1d87db2719791108ddc0.png@338w_450h.webp",
                    "name":"JOJO的奇妙冒险石之海",
                    "tags":"漫画改,热血,战斗,奇幻",
                    "plays":310000000,
                    "fans":31000,
                    "danmaku":1617000,
                    "score":9.8,
                    "score_people":101326,
                    "start_time":1669852800000,
                    "profile":"简介：西历2011年，美国·佛罗里达州。在与恋人兜风途中遇到了交通事故的空条徐伦，因被陷害而获刑15年。收容设施是州立绿海豚街重警备监狱——别名「水族馆」。深陷绝望之中的徐伦，在手握父亲所托的吊坠时，她觉醒了不可思议的力量。“这个世界上存在着比死还恐怖的事情，而这一切都将在这所监狱中发生”徐伦面前出现的神秘少年所传达的信息，不断发生的不可思议的事件，前来探视的父亲·空条承太郎所说的令人恐惧的现实，以及名为DIO之人……空条徐伦究竟能否从这所「石之海」一般的监狱中重获自由？给持续百年之久的乔斯达一族与DIO之间的宿命画上..."
                },
                {"cover_url":"https:\/\/i0.hdslb.com\/bfs\/bangumi\/image\/14ccd8457a9b7351e7be1d87db2719791108ddc0.png@338w_450h.webp",
                    "name":"JOJO的奇妙冒险石之海",
                    "tags":"漫画改,热血,战斗,奇幻",
                    "plays":310000000,
                    "fans":31000,
                    "danmaku":1617000,
                    "score":9.8,
                    "score_people":101326,
                    "start_time":1669852800000,
                    "profile":"简介：西历2011年，美国·佛罗里达州。在与恋人兜风途中遇到了交通事故的空条徐伦，因被陷害而获刑15年。收容设施是州立绿海豚街重警备监狱——别名「水族馆」。深陷绝望之中的徐伦，在手握父亲所托的吊坠时，她觉醒了不可思议的力量。“这个世界上存在着比死还恐怖的事情，而这一切都将在这所监狱中发生”徐伦面前出现的神秘少年所传达的信息，不断发生的不可思议的事件，前来探视的父亲·空条承太郎所说的令人恐惧的现实，以及名为DIO之人……空条徐伦究竟能否从这所「石之海」一般的监狱中重获自由？给持续百年之久的乔斯达一族与DIO之间的宿命画上..."
                }
            ],
        }
    },
    methods: {
        handleSearch() {
            let start_year, start_month, start_day, end_year, end_month, end_day;
            this.load = true;
            const params = {};
            const {selectedOption, selectedScore, videoInput, selectedFans, dateRange,selectedRankParam} = this;
            // console.log(selectedOption, videoOptions, videoInput, duration, dateRange,selectedRankParam)
            if (selectedOption.value === '番剧名')
                params.name = videoInput;
            else if (selectedOption.value === '简介')
                params.profile = videoInput;
            else if (selectedOption.value === '番剧标签')
                params.tags = videoInput;

            start_year = dateRange[0].getFullYear().toString().padStart(4, "0")
            start_month = (dateRange[0].getMonth()+1).toString().padStart(2, "0")
            start_day = dateRange[0].getDate().toString().padStart(2, "0")
            end_year = dateRange[1].getFullYear().toString().padStart(4, "0")
            end_month = (dateRange[1].getMonth()+1).toString().padStart(2, "0")
            end_day = dateRange[1].getDate().toString().padStart(2, "0")

            params.start_time = `${start_year}-${start_month}-${start_day} 00:00:00`
            params.end_time=`${end_year}-${end_month}-${end_day} 23:59:59`

            params.fans_limit = selectedFans
            params.score_limit = selectedScore

            if (selectedRankParam === 'score')
                params.score=true
            else if (selectedRankParam === 'score_people')
                params.score_people=true
            else if (selectedRankParam === 'danmaku')
                params.danmaku=true
            else if (selectedRankParam === 'plays')
                params.plays=true

            console.log(params)
            // //发请求search
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
        <div class="check_box" style="width: 1100px">
            <span class="category-label" style="width: 80px;">追番人数</span>
            <el-radio-group v-model="selectedFans" size="large" style="width: 500px">
                <el-radio-button v-for="(item, index) in fansOptions" :key="index" label="item.value"
                                 :value="item.value">
                    {{ item.label }}
                </el-radio-button>
            </el-radio-group>
            <span class="category-label" style="width: 80px;">发布时间</span>
            <el-date-picker @change="change" style="width:300px;margin-top: 5px" v-model="dateRange" type="daterange" range-separator="to" start-placeholder="起始时间" end-placeholder="截止时间" unlink-panels>
            </el-date-picker>
        </div>
        <div class="check_box">
            <span class="category-label" style="width: 80px">评分</span>
            <el-radio-group v-model="selectedScore" size="large" style="width: 500px">
                <el-radio-button v-for="(item, index) in scoreOptions" :key="index" label="item.value"
                                 :value="item.value">
                    {{ item.label }}
                </el-radio-button>
            </el-radio-group>
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
                <show_bangumi style="border: 1px solid rgb(133,133,133);" :bangumiInfo="item"></show_bangumi>
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
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: bold;
}
</style>