test "bytes boundary and precision cases" {
  let cases = [
    (0L, "0 B"),
    (-512L, "512 B"),
    (1023L, "1023 B"),
    (1024L, "1 KB"),
    (1536L, "1.5 KB"),
    (1024L * 1024L, "1 MB"),
    (1024L * 1024L + 512L * 1024L, "1.5 MB"),
    (1024L * 1024L * 1024L, "1 GB"),
    (1024L * 1024L * 1024L * 1024L, "1 TB"),
    (1024L * 1024L * 1024L * 1024L * 1024L, "1 PB"),
  ]
  for case in cases {
    let (value, expected) = case
    assert_eq(humanize_bytes(value), expected)
  }
}
