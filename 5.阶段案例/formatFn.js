function formatPrice(number) {
  // number ? number : 0;
  if (typeof number != "number") {
    number = Number(number);
  }

  return "￥" + number.toFixed(2);
  // toFixed方法对象必须是数组，所以我们要判断如果传过来的不是数字而是字符串呢？
}