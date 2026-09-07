///| 
fn decimal_tenth(value : Int64) -> String {
  let whole = value / 10L
  let tenth = value % 10L
  if tenth == 0L { "\{whole}" } else { "\{whole}.\{tenth}" }
}

///| 
pub fn humanize_bytes(bytes : Int64) -> String {
  let value = @common.abs_i64(bytes)
  if value < 1024L {
    "\{value} B"
  } else {
    let units = ["KB", "MB", "GB", "TB", "PB"]
    let mut index = 0
    let mut divisor = 1L
    while value >= divisor * 1024L && index < 5 {
      divisor = divisor * 1024L
      index = index + 1
    }
    let whole = value / divisor
    let remainder = value % divisor
    let mut tenth = (remainder * 10L + divisor / 2L) / divisor
    let mut rounded_whole = whole
    if tenth == 10L {
      rounded_whole = rounded_whole + 1L
      tenth = 0L
    }
    "\{decimal_tenth(rounded_whole * 10L + tenth)} \{units[index - 1]}"
  }
}
