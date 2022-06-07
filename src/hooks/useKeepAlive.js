export const useKeepAlive = (funcArray = []) => {
  // 方法一
  // const arrArr = funcArray.map((arr, i) => [i, arr]);
  // const map = new Map(arrArr);

  const keep = (targetFunc, boolean) => {
    // 方法一
    // map.forEach((o, i) => map.get(i)(!boolean));

    // 方法二
    // funcArray.forEach((fn) => fn(!boolean));

    // 方法三
    funcArray.forEach((fn) => {
      if (fn !== targetFunc) {
        fn(!boolean);
      } else {
        targetFunc(boolean);
      }
    });
  };

  return { keep };
};
