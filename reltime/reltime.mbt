///| 
pub fn humanize_relative(timestamp_ms : Int64, now_ms : Int64, lang : @common.Language) -> String {
  let delta = now_ms - timestamp_ms
  let future = delta < 0L
  let seconds = @common.abs_i64(delta) / 1000L
  let suffix_zh = if future { "后" } else { "前" }
  if seconds < 45L {
    match lang {
      @common.Language::Zh => "刚刚"
      @common.Language::En => "just now"
    }
  } else if seconds < 90L {
    match lang {
      @common.Language::Zh => "1分钟\{suffix_zh}"
      @common.Language::En => if future { "in a minute" } else { "a minute ago" }
    }
  } else if seconds < 45L * 60L {
    let value = seconds / 60L
    match lang {
      @common.Language::Zh => "\{value}分钟\{suffix_zh}"
      @common.Language::En => if future { "in \{value} minutes" } else { "\{value} minutes ago" }
    }
  } else if seconds < 90L * 60L {
    match lang {
      @common.Language::Zh => "1小时\{suffix_zh}"
      @common.Language::En => if future { "in an hour" } else { "an hour ago" }
    }
  } else if seconds < 22L * 3600L {
    let value = seconds / 3600L
    match lang {
      @common.Language::Zh => "\{value}小时\{suffix_zh}"
      @common.Language::En => if future { "in \{value} hours" } else { "\{value} hours ago" }
    }
  } else if seconds < 36L * 3600L {
    match lang {
      @common.Language::Zh => "1天\{suffix_zh}"
      @common.Language::En => if future { "in a day" } else { "a day ago" }
    }
  } else if seconds < 26L * 86400L {
    let value = seconds / 86400L
    match lang {
      @common.Language::Zh => "\{value}天\{suffix_zh}"
      @common.Language::En => if future { "in \{value} days" } else { "\{value} days ago" }
    }
  } else if seconds < 46L * 86400L {
    match lang {
      @common.Language::Zh => "1个月\{suffix_zh}"
      @common.Language::En => if future { "in a month" } else { "a month ago" }
    }
  } else if seconds < 320L * 86400L {
    let value = seconds / (30L * 86400L)
    match lang {
      @common.Language::Zh => "\{value}个月\{suffix_zh}"
      @common.Language::En => if future { "in \{value} months" } else { "\{value} months ago" }
    }
  } else if seconds < 548L * 86400L {
    match lang {
      @common.Language::Zh => "1年\{suffix_zh}"
      @common.Language::En => if future { "in a year" } else { "a year ago" }
    }
  } else {
    let value = seconds / 31536000L
    match lang {
      @common.Language::Zh => if future { "\{value}年后" } else { "\{value}年前" }
      @common.Language::En => if future { "in \{value} years" } else { "\{value} years ago" }
    }
  }
}
