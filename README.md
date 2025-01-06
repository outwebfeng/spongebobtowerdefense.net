# Spongebob Tower Defense

一个基于 Next.js 14 构建的多语言游戏指南网站，为 Roblox 平台上的《Spongebob Tower Defense》游戏提供全面的游戏攻略、代码兑换和游戏资讯。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **国际化**: next-intl
- **UI组件**: 
  - Radix UI
  - Lucide React Icons
  - React Icons
- **工具库**:
  - clsx/tailwind-merge (类名合并)
  - dayjs (日期处理)
  - sonner (通知提示)
- **开发工具**: 
  - ESLint
  - Prettier
  - Husky
  - TypeScript
- **包管理**: pnpm

## 主要特性

- 🌐 多语言支持 (en, fr, es, jp, ko, tw)
- 🎮 游戏代码兑换指南
- 📱 响应式设计
- 🎨 深色/浅色主题
- 🔍 SEO 优化
- 📊 Google Analytics 集成
- 💻 现代化 UI/UX 设计

## 项目结构
```
spongebobtowerdefense.net/
├── app/ # Next.js 14 应用目录
│ ├── [locale]/ # 多语言路由
│ │ ├── (with-footer) # 带页脚的布局组
│ │ └── layout.tsx # 根布局
├── components/ # React 组件
│ ├── home/ # 首页相关组件
│ ├── video/ # 视频播放组件
│ └── seo/ # SEO相关组件
├── messages/ # 多语言翻译文件
├── lib/ # 工具函数和配置
├── public/ # 静态资源
└── styles/ # 全局样式
```


## 核心功能

1. **首页功能**
   - 游戏介绍和特性展示
   - YouTube 视频教程嵌入
   - 游戏特色功能介绍
   - 玩家评价展示
   - FAQ 常见问题

2. **代码兑换系统**
   - 最新可用代码列表
   - 历史代码记录
   - 代码兑换教程
   - 奖励说明

3. **游戏攻略**
   - 新手入门指南
   - 进阶策略
   - 角色介绍
   - 地图攻略

## 开发指南

### 环境要求

- Node.js 20.x
- pnpm 7.14.0+

### 安装
```bash
克隆项目
git clone https://github.com/yourusername/spongebobtowerdefense.net.git
安装依赖
cd spongebobtowerdefense.net
pnpm install
```

### 开发命令
```bash
开发环境运行
pnpm dev
代码检查
pnpm lint
代码格式化
pnpm prettier
构建项目
pnpm build
生产环境运行
pnpm start
```

### 环境变量

创建 `.env.local` 文件并配置以下变量：

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DOMAIN_URL=spongebobtowerdefense.net
GOOGLE_TRACKING_ID=G-XXXXXXXX
GOOGLE_ADSENSE_URL=https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
GOOGLE_ADSENSE_ACCOUNT=ca-pub-XXXXXXXXXX
```


## 国际化

项目使用 next-intl 进行国际化管理，支持以下语言：

- 英语 (en)
- 法语 (fr)
- 西班牙语 (es)
- 日语 (jp)
- 韩语 (ko)
- 繁体中文 (tw)

翻译文件位于 `messages/` 目录下。

## 部署

项目可以部署到任何支持 Node.js 的平台：

- Vercel (推荐)
- Netlify
- 自托管服务器

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

[MIT License](LICENSE)

## 联系方式

- Website: [spongebobtowerdefense.net](https://spongebobtowerdefense.net)
- Email: support@spongebobtowerdefense.net