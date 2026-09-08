function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB21int64__to__string__js = (num, radix) => BigInt.asIntN(64, num).toString(radix);
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGlE(param0) {
  this.val = param0;
}
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
function _M0MPB13StringBuilder13write__objectGlE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGlE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return self >= 56320 && self <= 57343;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGlE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC15int645Int64PB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0MPC15int645Int6418to__string_2einner(self, radix) {
  return _M0FPB21int64__to__string__js(self, radix);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0IPC15int645Int64PB4Show10to__string(self) {
  return _M0MPC15int645Int6418to__string_2einner(self, 10);
}
function _M0MPC15array5Array2atGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0FP315moon_2dhumanize15moon_2dhumanize6common8abs__i64(value) {
  return BigInt.asIntN(64, value) < BigInt.asIntN(64, 0n) ? BigInt.asUintN(64, 0n - value) : value;
}
function _M0FP315moon_2dhumanize15moon_2dhumanize5bytes14decimal__tenth(value) {
  if (10n === 0n) {
    $panic();
  }
  const whole = BigInt.asUintN(64, BigInt.asIntN(64, value) / BigInt.asIntN(64, 10n));
  if (10n === 0n) {
    $panic();
  }
  const tenth = BigInt.asUintN(64, BigInt.asIntN(64, value) % BigInt.asIntN(64, 10n));
  if (BigInt.asUintN(64, tenth) === BigInt.asUintN(64, 0n)) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0MPB13StringBuilder13write__objectGlE(_string_builder, whole);
    return _M0MPB13StringBuilder10to__string(_string_builder);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
    _M0MPB13StringBuilder13write__objectGlE(_string_builder, whole);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
    _M0MPB13StringBuilder13write__objectGlE(_string_builder, tenth);
    return _M0MPB13StringBuilder10to__string(_string_builder);
  }
}
function _M0FP315moon_2dhumanize15moon_2dhumanize5bytes15humanize__bytes(bytes) {
  const value = _M0FP315moon_2dhumanize15moon_2dhumanize6common8abs__i64(bytes);
  if (BigInt.asIntN(64, value) < BigInt.asIntN(64, 1024n)) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
    _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " B");
    return _M0MPB13StringBuilder10to__string(_string_builder);
  } else {
    const units = ["KB", "MB", "GB", "TB", "PB"];
    const index = new _M0TPB8MutLocalGiE(0);
    const divisor = new _M0TPB8MutLocalGlE(1n);
    while (true) {
      if (BigInt.asIntN(64, value) >= BigInt.asIntN(64, BigInt.asUintN(64, divisor.val * 1024n)) && index.val < 5) {
        divisor.val = BigInt.asUintN(64, divisor.val * 1024n);
        index.val = index.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _tmp = divisor.val;
    if (_tmp === 0n) {
      $panic();
    }
    const whole = BigInt.asUintN(64, BigInt.asIntN(64, value) / BigInt.asIntN(64, _tmp));
    const _tmp$2 = divisor.val;
    if (_tmp$2 === 0n) {
      $panic();
    }
    const remainder = BigInt.asUintN(64, BigInt.asIntN(64, value) % BigInt.asIntN(64, _tmp$2));
    const _tmp$3 = BigInt.asUintN(64, remainder * 10n);
    if (2n === 0n) {
      $panic();
    }
    const _tmp$4 = divisor.val;
    if (_tmp$4 === 0n) {
      $panic();
    }
    const tenth = new _M0TPB8MutLocalGlE(BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, _tmp$3 + BigInt.asUintN(64, BigInt.asIntN(64, divisor.val) / BigInt.asIntN(64, 2n)))) / BigInt.asIntN(64, _tmp$4)));
    const rounded_whole = new _M0TPB8MutLocalGlE(whole);
    if (BigInt.asUintN(64, tenth.val) === BigInt.asUintN(64, 10n)) {
      rounded_whole.val = BigInt.asUintN(64, rounded_whole.val + 1n);
      tenth.val = 0n;
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP315moon_2dhumanize15moon_2dhumanize5bytes14decimal__tenth(BigInt.asUintN(64, BigInt.asUintN(64, rounded_whole.val * 10n) + tenth.val)));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MPC15array5Array2atGsE(units, index.val - 1 | 0));
    return _M0MPB13StringBuilder10to__string(_string_builder);
  }
}
function _M0FP315moon_2dhumanize15moon_2dhumanize8duration18humanize__duration(ms, lang) {
  if (1000n === 0n) {
    $panic();
  }
  const total = BigInt.asUintN(64, BigInt.asIntN(64, _M0FP315moon_2dhumanize15moon_2dhumanize6common8abs__i64(ms)) / BigInt.asIntN(64, 1000n));
  if (86400n === 0n) {
    $panic();
  }
  const days = BigInt.asUintN(64, BigInt.asIntN(64, total) / BigInt.asIntN(64, 86400n));
  if (86400n === 0n) {
    $panic();
  }
  if (3600n === 0n) {
    $panic();
  }
  const hours = BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, total) % BigInt.asIntN(64, 86400n))) / BigInt.asIntN(64, 3600n));
  if (3600n === 0n) {
    $panic();
  }
  if (60n === 0n) {
    $panic();
  }
  const minutes = BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, total) % BigInt.asIntN(64, 3600n))) / BigInt.asIntN(64, 60n));
  if (60n === 0n) {
    $panic();
  }
  const seconds = BigInt.asUintN(64, BigInt.asIntN(64, total) % BigInt.asIntN(64, 60n));
  if (lang === 0) {
    const result = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    if (BigInt.asIntN(64, days) > BigInt.asIntN(64, 0n)) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(3);
      _M0MPB13StringBuilder13write__objectGlE(_string_builder, days);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "天");
      _M0IPB13StringBuilderPB6Logger13write__string(result, _M0MPB13StringBuilder10to__string(_string_builder));
    }
    if (BigInt.asIntN(64, hours) > BigInt.asIntN(64, 0n)) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(6);
      _M0MPB13StringBuilder13write__objectGlE(_string_builder, hours);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "小时");
      _M0IPB13StringBuilderPB6Logger13write__string(result, _M0MPB13StringBuilder10to__string(_string_builder));
    }
    if (BigInt.asIntN(64, minutes) > BigInt.asIntN(64, 0n)) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(3);
      _M0MPB13StringBuilder13write__objectGlE(_string_builder, minutes);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "分");
      _M0IPB13StringBuilderPB6Logger13write__string(result, _M0MPB13StringBuilder10to__string(_string_builder));
    }
    if (BigInt.asIntN(64, seconds) > BigInt.asIntN(64, 0n) || BigInt.asUintN(64, total) === BigInt.asUintN(64, 0n)) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(3);
      _M0MPB13StringBuilder13write__objectGlE(_string_builder, seconds);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "秒");
      _M0IPB13StringBuilderPB6Logger13write__string(result, _M0MPB13StringBuilder10to__string(_string_builder));
    }
    return _M0MPB13StringBuilder10to__string(result);
  } else {
    const result = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const count = new _M0TPB8MutLocalGiE(0);
    if (BigInt.asIntN(64, days) > BigInt.asIntN(64, 0n)) {
      if (count.val > 0) {
        _M0IPB13StringBuilderPB6Logger13write__string(result, ", ");
      }
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
      _M0MPB13StringBuilder13write__objectGlE(_string_builder, days);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " day");
      _M0IPB13StringBuilderPB6Logger13write__string(result, _M0MPB13StringBuilder10to__string(_string_builder));
      if (BigInt.asUintN(64, days) !== BigInt.asUintN(64, 1n)) {
        _M0IPB13StringBuilderPB6Logger13write__string(result, "s");
      }
      count.val = count.val + 1 | 0;
    }
    if (BigInt.asIntN(64, hours) > BigInt.asIntN(64, 0n)) {
      if (count.val > 0) {
        _M0IPB13StringBuilderPB6Logger13write__string(result, ", ");
      }
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(5);
      _M0MPB13StringBuilder13write__objectGlE(_string_builder, hours);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " hour");
      _M0IPB13StringBuilderPB6Logger13write__string(result, _M0MPB13StringBuilder10to__string(_string_builder));
      if (BigInt.asUintN(64, hours) !== BigInt.asUintN(64, 1n)) {
        _M0IPB13StringBuilderPB6Logger13write__string(result, "s");
      }
      count.val = count.val + 1 | 0;
    }
    if (BigInt.asIntN(64, minutes) > BigInt.asIntN(64, 0n)) {
      if (count.val > 0) {
        _M0IPB13StringBuilderPB6Logger13write__string(result, ", ");
      }
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
      _M0MPB13StringBuilder13write__objectGlE(_string_builder, minutes);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " minute");
      _M0IPB13StringBuilderPB6Logger13write__string(result, _M0MPB13StringBuilder10to__string(_string_builder));
      if (BigInt.asUintN(64, minutes) !== BigInt.asUintN(64, 1n)) {
        _M0IPB13StringBuilderPB6Logger13write__string(result, "s");
      }
      count.val = count.val + 1 | 0;
    }
    if (BigInt.asIntN(64, seconds) > BigInt.asIntN(64, 0n) || BigInt.asUintN(64, total) === BigInt.asUintN(64, 0n)) {
      if (count.val > 0) {
        _M0IPB13StringBuilderPB6Logger13write__string(result, ", ");
      }
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
      _M0MPB13StringBuilder13write__objectGlE(_string_builder, seconds);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " second");
      _M0IPB13StringBuilderPB6Logger13write__string(result, _M0MPB13StringBuilder10to__string(_string_builder));
      if (BigInt.asUintN(64, seconds) !== BigInt.asUintN(64, 1n)) {
        _M0IPB13StringBuilderPB6Logger13write__string(result, "s");
      }
    }
    return _M0MPB13StringBuilder10to__string(result);
  }
}
function _M0FP315moon_2dhumanize15moon_2dhumanize7reltime18humanize__relative(timestamp_ms, now_ms, lang) {
  const delta = BigInt.asUintN(64, now_ms - timestamp_ms);
  const future = BigInt.asIntN(64, delta) < BigInt.asIntN(64, 0n);
  if (1000n === 0n) {
    $panic();
  }
  const seconds = BigInt.asUintN(64, BigInt.asIntN(64, _M0FP315moon_2dhumanize15moon_2dhumanize6common8abs__i64(delta)) / BigInt.asIntN(64, 1000n));
  const suffix_zh = future ? "后" : "前";
  if (BigInt.asIntN(64, seconds) < BigInt.asIntN(64, 45n)) {
    if (lang === 0) {
      return "刚刚";
    } else {
      return "just now";
    }
  } else {
    if (BigInt.asIntN(64, seconds) < BigInt.asIntN(64, 90n)) {
      if (lang === 0) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "1分钟");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, suffix_zh);
        return _M0MPB13StringBuilder10to__string(_string_builder);
      } else {
        return future ? "in a minute" : "a minute ago";
      }
    } else {
      if (BigInt.asIntN(64, seconds) < BigInt.asIntN(64, 2700n)) {
        if (60n === 0n) {
          $panic();
        }
        const value = BigInt.asUintN(64, BigInt.asIntN(64, seconds) / BigInt.asIntN(64, 60n));
        if (lang === 0) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(6);
          _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "分钟");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, suffix_zh);
          return _M0MPB13StringBuilder10to__string(_string_builder);
        } else {
          if (future) {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(11);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "in ");
            _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " minutes");
            return _M0MPB13StringBuilder10to__string(_string_builder);
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(12);
            _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " minutes ago");
            return _M0MPB13StringBuilder10to__string(_string_builder);
          }
        }
      } else {
        if (BigInt.asIntN(64, seconds) < BigInt.asIntN(64, 5400n)) {
          if (lang === 0) {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "1小时");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, suffix_zh);
            return _M0MPB13StringBuilder10to__string(_string_builder);
          } else {
            return future ? "in an hour" : "an hour ago";
          }
        } else {
          if (BigInt.asIntN(64, seconds) < BigInt.asIntN(64, 79200n)) {
            if (3600n === 0n) {
              $panic();
            }
            const value = BigInt.asUintN(64, BigInt.asIntN(64, seconds) / BigInt.asIntN(64, 3600n));
            if (lang === 0) {
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(6);
              _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "小时");
              _M0MPB13StringBuilder13write__objectGsE(_string_builder, suffix_zh);
              return _M0MPB13StringBuilder10to__string(_string_builder);
            } else {
              if (future) {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "in ");
                _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " hours");
                return _M0MPB13StringBuilder10to__string(_string_builder);
              } else {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(10);
                _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " hours ago");
                return _M0MPB13StringBuilder10to__string(_string_builder);
              }
            }
          } else {
            if (BigInt.asIntN(64, seconds) < BigInt.asIntN(64, 129600n)) {
              if (lang === 0) {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "1天");
                _M0MPB13StringBuilder13write__objectGsE(_string_builder, suffix_zh);
                return _M0MPB13StringBuilder10to__string(_string_builder);
              } else {
                return future ? "in a day" : "a day ago";
              }
            } else {
              if (BigInt.asIntN(64, seconds) < BigInt.asIntN(64, 2246400n)) {
                if (86400n === 0n) {
                  $panic();
                }
                const value = BigInt.asUintN(64, BigInt.asIntN(64, seconds) / BigInt.asIntN(64, 86400n));
                if (lang === 0) {
                  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(3);
                  _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "天");
                  _M0MPB13StringBuilder13write__objectGsE(_string_builder, suffix_zh);
                  return _M0MPB13StringBuilder10to__string(_string_builder);
                } else {
                  if (future) {
                    if (BigInt.asUintN(64, value) === BigInt.asUintN(64, 1n)) {
                      return "in 1 day";
                    } else {
                      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(8);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "in ");
                      _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " days");
                      return _M0MPB13StringBuilder10to__string(_string_builder);
                    }
                  } else {
                    if (BigInt.asUintN(64, value) === BigInt.asUintN(64, 1n)) {
                      return "1 day ago";
                    } else {
                      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
                      _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " days ago");
                      return _M0MPB13StringBuilder10to__string(_string_builder);
                    }
                  }
                }
              } else {
                if (BigInt.asIntN(64, seconds) < BigInt.asIntN(64, 3974400n)) {
                  if (lang === 0) {
                    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
                    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "1个月");
                    _M0MPB13StringBuilder13write__objectGsE(_string_builder, suffix_zh);
                    return _M0MPB13StringBuilder10to__string(_string_builder);
                  } else {
                    return future ? "in a month" : "a month ago";
                  }
                } else {
                  if (BigInt.asIntN(64, seconds) < BigInt.asIntN(64, 27648000n)) {
                    if (2592000n === 0n) {
                      $panic();
                    }
                    const value = BigInt.asUintN(64, BigInt.asIntN(64, seconds) / BigInt.asIntN(64, 2592000n));
                    if (lang === 0) {
                      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(6);
                      _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "个月");
                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, suffix_zh);
                      return _M0MPB13StringBuilder10to__string(_string_builder);
                    } else {
                      if (future) {
                        if (BigInt.asUintN(64, value) === BigInt.asUintN(64, 1n)) {
                          return "in a month";
                        } else {
                          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(10);
                          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "in ");
                          _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
                          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " months");
                          return _M0MPB13StringBuilder10to__string(_string_builder);
                        }
                      } else {
                        if (BigInt.asUintN(64, value) === BigInt.asUintN(64, 1n)) {
                          return "a month ago";
                        } else {
                          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(11);
                          _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
                          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " months ago");
                          return _M0MPB13StringBuilder10to__string(_string_builder);
                        }
                      }
                    }
                  } else {
                    if (BigInt.asIntN(64, seconds) < BigInt.asIntN(64, 47347200n)) {
                      if (lang === 0) {
                        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
                        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "1年");
                        _M0MPB13StringBuilder13write__objectGsE(_string_builder, suffix_zh);
                        return _M0MPB13StringBuilder10to__string(_string_builder);
                      } else {
                        return future ? "in a year" : "a year ago";
                      }
                    } else {
                      if (31536000n === 0n) {
                        $panic();
                      }
                      const value = BigInt.asUintN(64, BigInt.asIntN(64, seconds) / BigInt.asIntN(64, 31536000n));
                      if (lang === 0) {
                        if (future) {
                          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(6);
                          _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
                          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "年后");
                          return _M0MPB13StringBuilder10to__string(_string_builder);
                        } else {
                          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(6);
                          _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
                          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "年前");
                          return _M0MPB13StringBuilder10to__string(_string_builder);
                        }
                      } else {
                        if (future) {
                          if (BigInt.asUintN(64, value) === BigInt.asUintN(64, 1n)) {
                            return "in a year";
                          } else {
                            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
                            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "in ");
                            _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
                            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " years");
                            return _M0MPB13StringBuilder10to__string(_string_builder);
                          }
                        } else {
                          if (BigInt.asUintN(64, value) === BigInt.asUintN(64, 1n)) {
                            return "a year ago";
                          } else {
                            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(10);
                            _M0MPB13StringBuilder13write__objectGlE(_string_builder, value);
                            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " years ago");
                            return _M0MPB13StringBuilder10to__string(_string_builder);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0FP315moon_2dhumanize15moon_2dhumanize10playground12duration__zh(ms) {
  return _M0FP315moon_2dhumanize15moon_2dhumanize8duration18humanize__duration(ms, 0);
}
function _M0FP315moon_2dhumanize15moon_2dhumanize10playground12duration__en(ms) {
  return _M0FP315moon_2dhumanize15moon_2dhumanize8duration18humanize__duration(ms, 1);
}
function _M0FP315moon_2dhumanize15moon_2dhumanize10playground13bytes__format(value) {
  return _M0FP315moon_2dhumanize15moon_2dhumanize5bytes15humanize__bytes(value);
}
function _M0FP315moon_2dhumanize15moon_2dhumanize10playground12relative__zh(timestamp_ms, now_ms) {
  return _M0FP315moon_2dhumanize15moon_2dhumanize7reltime18humanize__relative(timestamp_ms, now_ms, 0);
}
function _M0FP315moon_2dhumanize15moon_2dhumanize10playground12relative__en(timestamp_ms, now_ms) {
  return _M0FP315moon_2dhumanize15moon_2dhumanize7reltime18humanize__relative(timestamp_ms, now_ms, 1);
}
export { _M0FP315moon_2dhumanize15moon_2dhumanize10playground12duration__zh as duration_zh, _M0FP315moon_2dhumanize15moon_2dhumanize10playground12duration__en as duration_en, _M0FP315moon_2dhumanize15moon_2dhumanize10playground13bytes__format as bytes_format, _M0FP315moon_2dhumanize15moon_2dhumanize10playground12relative__zh as relative_zh, _M0FP315moon_2dhumanize15moon_2dhumanize10playground12relative__en as relative_en }
//# sourceMappingURL=playground.js.map
