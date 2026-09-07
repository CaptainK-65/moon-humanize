test "duration data driven cases" {
  let cases = [
    (0L, @common.Language::Zh, "0秒"),
    (0L, @common.Language::En, "0 seconds"),
    (-3661000L, @common.Language::Zh, "1小时1分1秒"),
    (3661000L, @common.Language::En, "1 hour, 1 minute, 1 second"),
    (86400000L + 3600000L, @common.Language::En, "1 day, 1 hour"),
    (59999L, @common.Language::Zh, "59秒"),
    (60000L, @common.Language::En, "1 minute"),
    (3600000L, @common.Language::En, "1 hour"),
    (7200000L, @common.Language::En, "2 hours"),
  ]
  for case in cases {
    let (ms, lang, expected) = case
    assert_eq(humanize_duration(ms, lang), expected)
  }
}
