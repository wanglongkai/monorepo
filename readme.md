# 利用pnpm 进行 monorepo
1. 根目录新建`pnpm-workspace.yaml`
   ```yaml
   packages:
      # 需要monorepo管理的目录/项目
     - 'packages/*'
     - 'apis'
     - 'utils'
      # 不需要monorepo管理的目录/项目
     - '!**/test/**'
   ```
2. 子项目注意`package.json`文件配置
   1. 关键是`name`配置项目，唯一区分的名称，在其他项目中会需要用到
3. A子项目中需要引入B子项目的内容
   1. A子项目安装B子项目`pnpm i B子项目的名称`
   2. 正常导入使用即可
   ```js
   import { resolveAB } from '@wlk/utils';
   import numIndex from '@wlk/apis';
   import {num} from '@wlk/apis/userApi/user.js'
   ```
