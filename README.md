# 一个简单的通用ng单页应用架子

## 💻 Development

```bash
# install package
$ npm install

# dev
$ npm run start


### 🏡 Structure

```tree
├── e2e                                             # 集成测试
├── src                                             # 产品目录
│   ├── app
│   │   ├── layout                                  # 通用布局
│   │   ├── ***                                     # 可以嵌入一些第三方组件，如delon
│   │   ├── routes
│   │   │   ├── **                                  # 业务目录
│   │   │   ├── home-page                           # 业务主页
│   │   │   ├── exception***                        # 相应的报错页面
│   │   │   ├── routes.module.ts                    # 业务路由模块
│   │   │   └── routes-routing.module.ts            # 业务路由注册口
│   │   ├── shared                                  # 共享模块
│   │   │   └── shared.module.ts                    # 共享模块文件（包括了组件，常量，接口，管道，指令，服务，插件等）
│   │   ├── app.component.ts                        # 根组件
│   │   └── app.module.ts                           # 根模块
│   ├── assets                                      # 本地文件
│   ├── environments                                # 环境变量
│   ├── polyfills.ts                                # 兼容配置
│   ├── styles.less                                 # 样式入口文件
├── tsconfig.json                                   # ts编译配置
├── tslint.json                                     # ts规范
```
