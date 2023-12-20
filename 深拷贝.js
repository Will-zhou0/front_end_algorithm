function deepClone(obj, map = new WeakMap()) {
  // 解决循环引用的问题
  if (map.has(obj)) return map.get(obj); // 解决循环引用问题
  const result = Array.isArray(obj) ? [] : {};
  map.set(obj, result);
  for (var key in obj) {
    // 首先判断key是不是obj的自有属性 避免对原型链上的属性进行遍历复制
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        result[key] = deepClone(obj[key], map); //递归复制
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}
const obj = {
  name: "pink",
  age: 18,
  hobby: ["乒乓球", "足球"],
  family: {
    baby: "小pink",
  },
};
obj.obj = obj; // 循环引用
const newObj = deepClone(obj);
newObj.family.son = '123';
newObj.hobby[1] = 'football';

console.log(obj, newObj);
