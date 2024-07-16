<template>
  <div class="flex flex-wrap gap-4 items-center">
    <el-select v-model="selectedOption" placeholder="Select" size="large" style="width: 100px">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item" />
    </el-select>
    <el-input v-model="input" style="width: 480px" placeholder="Please input" />
    <el-button style="height: 40px;" type="primary" plain @click="handleSearch">查找</el-button>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'SearchUtil',
  setup() {
    const selectedOption = ref({
      value: 'Option3',
      label: 'up'
    }); // 默认选择名称选项
    const input = ref('');
    const options = ref([
      {
        value: 'Option1',
        label: 'uid',
      },
      {
        value: 'Option2',
        label: '简介',
      },
      {
        value: 'Option3',
        label: 'up',
      },
    ]);

    const handleSearch = () => {
      // 构建查询参数对象
      const params = {
        name: selectedOption.value.value === 'Option1' ? input.value : undefined,
        profile: selectedOption.value.value === 'Option2' ? input.value : undefined,
        fans_limit: selectedOption.value.value === 'Option3' && input.value ? parseInt(input.value) : undefined,
        likes: selectedOption.value.value === 'Option4' && input.value === 'true',
        plays: selectedOption.value.value === 'Option5' && input.value === 'true',
        uid: selectedOption.value.value === 'Option6' ? input.value : undefined
      };

      // 发起 HTTP GET 请求
      axios.get('http://127.0.0.1:5000/up', { params })
        .then(response => {
          console.log('查询结果:', response.data);
          // 处理查询结果，根据实际需求更新视图或状态
        })
        .catch(error => {
          console.error('查询失败:', error);
          // 处理错误情况，如显示错误信息给用户
        });
    };

    return {
      selectedOption,
      input,
      options,
      handleSearch,
    };
  },
};
</script>

<style>
.flex {
  display: flex;
  margin-top: 20px;
  margin-left: 70px;
}
</style>
