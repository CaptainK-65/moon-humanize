///|
fn main {
  let now = 2000L * 86400000L
  println("moon-humanize demo")
  println("duration / 时长:")
  println(
    "  EN: \{@duration.humanize_duration(3661000L, @common.Language::En)}",
  )
  println(
    "  中文: \{@duration.humanize_duration(3661000L, @common.Language::Zh)}",
  )
  println("bytes / 字节:")
  println("  \{@bytes.humanize_bytes(1536000L)}")
  println("relative time / 相对时间:")
  println(
    "  EN: \{@reltime.humanize_relative(now - 3L * 86400000L, now, @common.Language::En)}",
  )
  println(
    "  中文: \{@reltime.humanize_relative(now + 2L * 3600000L, now, @common.Language::Zh)}",
  )
}
