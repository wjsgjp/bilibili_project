<template>
  <div class="sort-selector">
    <label>排序选项：</label>
    <div class="sort-options">
      <label v-for="(sortOption, index) in sortOptions" :key="index" class="sort-option">
        <input type="radio" v-model="selectedSort" :value="sortOption.value">
        <span>{{ sortOption.label }}</span>
      </label>
    </div>
    <p v-if="selectedSort">当前选择的排序方式是：{{ selectedSort }}</p>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'SortSelector',
  setup() {
    const state = reactive({
      selectedSort: null, // 初始选择为空
      sortOptions: [
        { label: '按粉丝数量排序', value: 'followers' },
        { label: '按点赞数量排序', value: 'likes' },
        { label: '按播放数量排序', value: 'views' }
      ]
    });

    return {
      selectedSort: state.selectedSort,
      sortOptions: state.sortOptions
    };
  }
};
</script>

<style>
.sort-selector {
  margin-top: 20px;
}

.sort-options {
  display: flex;
  gap: 10px;
  margin-top: 5px;
}

.sort-option {
  display: flex;
  align-items: center;
}

.sort-option input {
  margin-right: 5px; /* 调整输入框和标签之间的间距 */
}
</style>
