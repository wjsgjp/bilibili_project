<template>
  <div class="upinfo_container">
    <div style="width:160px;height:160px;padding:5px">
      <el-avatar size="large" style="width:150px; height:150px;" :src="'//images.weserv.nl/?url=' + upinfos.img_url" />
    </div>
    <div style="width: 1000px;height: 100px;">
      <el-descriptions class=" margin-top" column="2" :size="large" border>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <user />
              </el-icon>
              upname
            </div>
          </template>
          {{ upinfos.name }}
        </el-descriptions-item>
        <el-descriptions-item w>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <iphone />
              </el-icon>
              uid
            </div>
          </template>
          {{ upinfos.uid }}
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions class="margin-top" :column="1" :size="size" border>
        <el-descriptions-item :show-overflow-tooltip="true">
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <location />
              </el-icon>
              简介
            </div>
          </template>
          {{ upinfos.profile }}
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions class="margin-top" :column="3" :size="size" border direction="vertical">
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <tickets />
              </el-icon>
              点赞数
            </div>
          </template>

          <el-tag size="small">{{ upinfos.likes }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <office-building />
              </el-icon>
              播放数
            </div>
          </template>
          <el-tag size="small">{{ upinfos.plays }} </el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <office-building />
              </el-icon>
              视频数
            </div>
          </template>
          <el-tag size="small">{{upinfos.videos }}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </div>

  </div>

</template>

<script>
import { computed, ref } from 'vue'
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'

export default
  {
    props: {
      upinfos: {
        type: Object,
        required: true
      }
    },
    name:"show_up"}
</script>

<style scoped>
.upinfo_container{
  width:1150px;
  height:160px;
  display: flex;
  direction: row;
  background-color: white;
}
.el-descriptions {
  margin-top: 0px;
}
.cell-item {
  font-size: 14px;
  width:80%;
  align-items:left;
  text-align: left;
  
}
.margin-top {
  margin-top: 0px;
}
</style>
