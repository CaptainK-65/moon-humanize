# moon-humanize

把机器数据变成人话：一个使用 MoonBit 编写的中英双语人性化格式化库。

`moon-humanize` 面向日志、监控、文件处理和用户界面，将毫秒、字节数和时间戳转换为易读文本。核心代码不依赖在线服务，支持 native、Wasm、Wasm GC 与 JavaScript 目标。

## 特性

- **duration**：毫秒时长转换为天、小时、分钟、秒，支持中文与英文。
- **bytes**：使用 1024 进制，将字节数格式化为 B、KB、MB、GB、TB、PB，保留 1 位小数。
- **reltime**：注入 `now_ms` 的确定性相对时间，支持中文过去/未来和英文自然表达。
- 数据驱动边界测试，覆盖零值、负值、单位进位和中英单复数。
- 原生 CLI 演示与无框架 Web Playground。

## 安装

注册 Mooncakes 后，将模块前缀替换为发布者名称，然后执行：

```bash
moon add CaptainK-65/moon-humanize
```

当前仓库模块名为 `CaptainK-65/moon-humanize`，用于黑客松验收和本地开发。

## 快速上手

```moonbit
import {
  "CaptainK-65/moon-humanize/common" @common,
  "CaptainK-65/moon-humanize/duration" @duration,
  "CaptainK-65/moon-humanize/bytes" @bytes,
  "CaptainK-65/moon-humanize/reltime" @reltime,
}

let duration = @duration.humanize_duration(3661000L, @common.Language::Zh)
// "1小时1分1秒"
let size = @bytes.humanize_bytes(1536000L)
// "1.5 MB"
let relative = @reltime.humanize_relative(1700000000000L, 1700259200000L, @common.Language::En)
// "3 days ago"
```

## API

| 包 | 签名 | 说明 |
|---|---|---|
| `duration` | `humanize_duration(ms: Int64, lang: Language) -> String` | 时长格式化；`Zh`/`En` |
| `bytes` | `humanize_bytes(bytes: Int64) -> String` | 1024 进制字节格式化 |
| `reltime` | `humanize_relative(timestamp_ms: Int64, now_ms: Int64, lang: Language) -> String` | 确定性相对时间 |

负时长和负字节按绝对值处理；相对时间根据 `timestamp_ms` 与 `now_ms` 的方向输出过去或未来。毫秒时长的小数部分直接舍弃。

## CLI 示例

```bash
moon run cmd/main
```

命令会输出三模块的中英对照示例。

## Playground

Playground 位于 `playground/web/`，包含时长、字节、相对时间三个标签页，以及中文/英文切换和实时输出。

由于当前 MoonBit 工具链的浏览器集成以构建产物为主，本项目采用 **JavaScript ES Module 降级方案**：核心导出包仍可构建 `wasm-gc`，页面使用 `--target js` 生成的 `playground.js`，避免 Wasm GC 字符串互操作影响可运行性。

重新生成页面模块：

```powershell
moon build playground --target js
Copy-Item _build/js/debug/build/playground/playground.js playground/web/playground.js -Force
```

本地打开：

```bash
python -m http.server 8000 --directory playground/web
```

然后访问 <http://localhost:8000>。不能直接用 `file://` 打开，因为浏览器会限制 ES Module 的跨文件加载。

## 测试与格式化

```bash
moon fmt
moon check --target all
moon test --target all
moon info
```

本仓库 CI 在 Ubuntu、macOS、Windows 三个平台执行检查、全目标测试、格式检查和接口信息生成。

## 来源致谢

`duration` 的单位拆分和英文表达参考 [EvanHahn/HumanizeDuration.js](https://github.com/EvanHahn/HumanizeDuration.js)，上游采用 Unlicense。中文语义层、字节模块、确定性相对时间模块和 Web Playground 为本项目原创实现。

## English summary

**moon-humanize** turns machine values into human-friendly bilingual text. It provides duration, byte-size, and deterministic relative-time formatters in MoonBit, plus a small browser playground. The core supports native, Wasm, Wasm GC, and JavaScript targets. See the API table and playground instructions above.

## 许可证

本项目采用 [MIT License](LICENSE)。
