module.exports = function check(str, bracketsConfig) {
  let open = [];
  let brackets = {};
  bracketsConfig.map((a) => open.push(a[0]));
  bracketsConfig.forEach((a) => (brackets[a[1]] = a[0]));
  console.log(open);
  console.log(brackets);
  let a = [];
  for (let i = 0; i < str.length; i++) {
    let cur = str[i];
    if (open.includes(cur)) {
      if (
        Object.keys(brackets).includes(cur) &&
        a[a.length - 1] === cur
      ) {
        a.pop();
      } else {
        a.push(cur);
      }
    } else {
      if (a.length === 0) {
        return false;
      }
      let item = a[a.length - 1];
      if (brackets[cur] === item) {
        a.pop();
      } else {
        return false;
      }
    }
  }
  return a.length === 0;;
};

