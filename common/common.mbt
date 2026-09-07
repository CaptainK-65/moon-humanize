///| 
pub(all) enum Language {
  Zh
  En
}

///| 
pub fn abs_i64(value : Int64) -> Int64 {
  if value < 0L { 0L - value } else { value }
}
