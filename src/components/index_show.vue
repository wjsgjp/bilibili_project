<template>
    <div class="tag-bar">
        <div class="category-label">{{ index1 }}</div>
        <div v-for="(tag, index) in tags" :key="index" :class="{ 'tag': true, 'selected': isSelected(tag) }"
            @click="selectTag(tag)">
            {{ tag }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        initialTags: {
            type: Array,
            default: () => ['标签1', '标签2', '标签3', '标签4']
        },
        category: {
            type: String,
            default: '默认类别'
        }
    },
    data() {
        return {
            tags: [], // 可选的标签数组
            selectedTag: null, // 当前选择的标签
            index1:null
        };
    },
    created() {
        // 初始化标签数据
        this.tags = this.initialTags;
        this.index1 = this.category;
    },
    methods: {
        selectTag(tag) {
            // 单选逻辑：选择一个标签，取消其他选中的标签
            this.selectedTag = tag;
        },
        isSelected(tag) {
            // 检查标签是否被选中
            return this.selectedTag === tag;
        }
    }
};
</script>

<style scoped>
.tag-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
    margin-left: 70px;
}

.category-label {
    margin-right: 10px;
    font-weight: bold;
}

.tag {
    padding: 8px 16px;
    background-color: #f0f0f0;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.tag:hover {
    background-color: #e0e0e0;
}

.tag.selected {
    background-color: #007bff;
    color: white;
}

.tag.selected:hover {
    background-color: #0056b3;
}
</style>
