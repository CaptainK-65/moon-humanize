test "relative time thresholds and directions" {
  let minute = 60000L
  let hour = 60L * minute
  let day = 24L * hour
  let now = 2000L * day
  let cases = [
    (now, @common.Language::Zh, "刚刚"),
    (now - 44999L, @common.Language::En, "just now"),
    (now - 45000L, @common.Language::Zh, "1分钟前"),
    (now + 45000L, @common.Language::En, "in a minute"),
    (now - 89999L, @common.Language::En, "a minute ago"),
    (now - 90000L, @common.Language::Zh, "1分钟前"),
    (now - (45L * minute - 1L), @common.Language::En, "44 minutes ago"),
    (now - 45L * minute, @common.Language::En, "an hour ago"),
    (now + 90L * minute, @common.Language::Zh, "1小时后"),
    (now - (22L * hour - 1L), @common.Language::En, "21 hours ago"),
    (now - 22L * hour, @common.Language::Zh, "1天前"),
    (now + 36L * hour, @common.Language::En, "in 1 days"),
    (now - (26L * day - 1L), @common.Language::Zh, "25天前"),
    (now - 26L * day, @common.Language::En, "a month ago"),
    (now + 46L * day, @common.Language::Zh, "1个月后"),
    (now - (320L * day - 1L), @common.Language::En, "10 months ago"),
    (now - 320L * day, @common.Language::Zh, "1年前"),
    (now + 548L * day, @common.Language::En, "in 1 years"),
    (now - 730L * day, @common.Language::Zh, "2年前"),
    (now + 730L * day, @common.Language::Zh, "2年后"),
  ]
  for case in cases {
    let (timestamp, lang, expected) = case
    assert_eq(humanize_relative(timestamp, now, lang), expected)
  }
}
