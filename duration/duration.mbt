///| 
pub fn humanize_duration(ms : Int64, lang : @common.Language) -> String {
  let total = @common.abs_i64(ms) / 1000L
  let days = total / 86400L
  let hours = total % 86400L / 3600L
  let minutes = total % 3600L / 60L
  let seconds = total % 60L
  match lang {
    @common.Language::Zh => {
      let result = StringBuilder()
      if days > 0L { result.write_string("\{days}天") }
      if hours > 0L { result.write_string("\{hours}小时") }
      if minutes > 0L { result.write_string("\{minutes}分") }
      if seconds > 0L || total == 0L { result.write_string("\{seconds}秒") }
      result.to_string()
    }
    @common.Language::En => {
      let result = StringBuilder()
      let mut count = 0
      if days > 0L {
        if count > 0 { result.write_string(", ") }
        result.write_string("\{days} day")
        if days != 1L { result.write_string("s") }
        count = count + 1
      }
      if hours > 0L {
        if count > 0 { result.write_string(", ") }
        result.write_string("\{hours} hour")
        if hours != 1L { result.write_string("s") }
        count = count + 1
      }
      if minutes > 0L {
        if count > 0 { result.write_string(", ") }
        result.write_string("\{minutes} minute")
        if minutes != 1L { result.write_string("s") }
        count = count + 1
      }
      if seconds > 0L || total == 0L {
        if count > 0 { result.write_string(", ") }
        result.write_string("\{seconds} second")
        if seconds != 1L { result.write_string("s") }
      }
      result.to_string()
    }
  }
}
