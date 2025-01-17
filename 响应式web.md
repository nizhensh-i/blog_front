# 侧边栏折叠

1.顶部使用按钮。切最外层<el-aside>的宽度设置为 自动

```
<style>
    :root {
      --el-aside-width: auto;
    }
    .el-aside {
      width: var(--el-aside-width);
    }
</style>
```

注意：下面表示如果存在名为`el-aside-width`的变量，就使用该变量的值，否则就使用默认值`300px`。如果没有上述的设置，那么el-aside宽度默认保持300。当你折叠后，右边主内容区域始终少了很多

```
.el-aside {
    width: var(--el-aside-width, 300px);
}

```

# 头部的搜索框和按钮 排成一列，根据屏幕尺寸按比例左右收缩

1.用<el-row>包裹这两个组件，组件外面分别用<el-col>包裹。这样他们排在来了一行上，不会因为屏幕缩小而挤成2行。

```
  <el-row :gutter="10">
    <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
      <el-input
        v-model="input3"
        size="small"
        placeholder="Please Input"
        :suffix-icon="i - ep - Search"
      />
    </el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <ButtonClick content="搜索" type="warning" size="small" @do-search="doSearch" />
    </el-col>
  </el-row>

  <el-row>分别用响应式布局，定义各组件在一行中所占的比例
```

# 表格响应式高度

```
calTableHeight() {
      const h1 = this.$refs.h1.$el.offsetHeight
      // 其中一个40是盒子的总外边距
      this.tableHeight = `calc(100vh - ${h1}px - 16px - var(--el-main-padding) * 2`)
    }

# h1为搜索框高度，16px为body元素的上下外边距8px, el-main-padding为el-main组件的上下padding




# 搜索框 输入关键字进行筛选是怎么做到的尼？
保存相应关键词，对用户输入的进行匹配，看是否对应上，再对其关键字映射字段分类，给出搜索结果
```

# 闪烁的loading...

```
 p {
        animation: blink 2s infinite;
    }

    @keyframes blink {
        0% {
            color: white;
        }

        50% {
            color: black;
        }

        100% {
            color: white;
        }
    }
```

# 卡片优雅的淡入 淡出 并且下方的表格高度随卡片消失时同步上移，不会显得很生硬

```
.el-card {
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  animation: slideIn 1.75s forwards;
}

.disappear {
  animation: fadeOut 1.5s forwards;
}
.close-card {
  font-size: 1.3rem;
  position: relative;
  top: 135px;
  left: 90%;
}
@keyframes slideIn {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 200px;
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    width: 0; /* 卡片宽度 */
    height: 0; /* 卡片高度 */
    opacity: 0;
  }
}
```

当时 from设置height: 0; 会导致取卡片的高度总是以from，也就是0。
解决：使用组件<Transtion>的回调函数： `@after-enter` 当进入过渡完成时调用
@keyframes slideIn {
from {
height: 0;
opacity: 0;
}
}

<Transition @after-enter="reCalTableHeight"></Transition>
reCalTableHeight() {
if (this.filter) {
const h2 = this.$refs.h2.$el.offsetHeight
console.log(h2)
this.calTableHeight()
}
}

```

```
