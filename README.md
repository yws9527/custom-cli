# 自定义CLI脚手架工具

### 1. 创建bin/cli.js
```shell
  mkdir bin
  touch bin/cli.js
```

### 2. 在cli.js顶部声明node环境
```js
  #!/usr/bin/env node

  // 其他代码内容
```

### 3. 项目初始化，建议使用npm
```js
  npm init
```

### 4. 链接到全局环境变量中
```js
  npm link
```

### 4. 测试功能
```shell
  custom-cli -h
  custom-cli -t
```

### 5. TODO
  ...
  ...
