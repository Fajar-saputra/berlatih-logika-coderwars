function geoMean(nums, arithmeticMean) {
  const n = nums.length + 1;

  const sum = nums.reduce((s, v) => s + v, 0);
  const prod = nums.reduce((p, v) => p * v, 1);

  const missing = arithmeticMean * n - sum;

  return Math.pow(prod * missing, 1 / n);
}
