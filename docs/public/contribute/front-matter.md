---
title: 文章头部
hide_title: true
sidebar_position: 3
description: sgagsg      
---

## 文章头部

---

文章头部（front matter）是每个文件顶部用三点划线包裹的 YAML 代码，它为我们的内容提供了重要的管理选项。例如：文章头部允许我们确保现有链接对于已经完全移动或删除的页面继续有效。

下面是一个文章头部的示例，其中所有必填字段都由占位符填充：

```yaml
---
title: <title>
sidebar_position: <number>
description:  <description>
keywords: [<keywords1>,<keywords2>,...]
---
```

您可以复制上面的示例，并在您的页面中使用相应值替换所有占位符。


### 必填字段

下表列举了所有的 必填 字段及其说明：


| 字段        | 说明                           |
| ----------- | ------------------------------ |
| title       | 该页面的标题。                 |
| sidebar_position | 文章顺序 |
| description | 对其该页面内容的一个简单描述。 |
| keywords    | 页面上的关键字。               |
