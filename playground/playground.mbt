///|
#export_name("duration_zh")
pub fn duration_zh(ms : Int64) -> String {
  @duration.humanize_duration(ms, @common.Language::Zh)
}

///|
#export_name("duration_en")
pub fn duration_en(ms : Int64) -> String {
  @duration.humanize_duration(ms, @common.Language::En)
}

///|
#export_name("bytes_format")
pub fn bytes_format(value : Int64) -> String {
  @bytes.humanize_bytes(value)
}

///|
#export_name("relative_zh")
pub fn relative_zh(timestamp_ms : Int64, now_ms : Int64) -> String {
  @reltime.humanize_relative(timestamp_ms, now_ms, @common.Language::Zh)
}

///|
#export_name("relative_en")
pub fn relative_en(timestamp_ms : Int64, now_ms : Int64) -> String {
  @reltime.humanize_relative(timestamp_ms, now_ms, @common.Language::En)
}
