const box = document.querySelectorAll(".box");
const char = document.querySelectorAll(".char");
const dispNo = document.querySelector(".dispNo");
const back = document.querySelector(".backBox");
const equals = document.querySelector(".equalsBox");
const on = document.querySelector(".onBox");
const backc = document.querySelector(".back");
const equalsc = document.querySelector(".equals");
const onc = document.querySelector(".on");
const status = document.querySelector(".status");
let onOff = false;
let arr = [];
on.addEventListener("click", () => {
  if (onOff == true) {
    onc.innerHTML = "ON";
    onOff = false;
    dispNo.innerHTML = "";
    status.innerHTML = "🔴";
    arr = [];
    count1 = [];
  } else {
    onc.innerHTML = "OFF";
    onOff = true;
    status.innerHTML = "🟢";
  }
});

box.forEach((e, i) => {
  box[i].addEventListener("click", () => {
    if (onOff == true) {
      dispNo.append(char[i].innerHTML);
      arr.push(char[i].innerHTML);
    }
  });
});

let count = 0,
  y;

equals.addEventListener("click", () => {
  count = 0;
  let count1 = [];
  let res = [];
  console.log(arr);
  let str = arr.join("");
  for (let x = 0; x < arr.length; x++) {
    console.log(str);
    if (
      (str.charCodeAt(x) >= 48 && str.charCodeAt(x) <= 57) ||
      str.charCodeAt(x) == 46
    ) {
      count++;
      console.log(count);
    } else {
      count1.push(x);
    }
  }

  let ini = 0;
  let g1;
  for (let g = 0; g < count1.length; g++) {
    res[g] = parseFloat(str.slice(ini, count1[g]));
    ini = count1[g] + 1;
    g1 = g;
  }
  res[g1 + 1] = parseFloat(str.slice(count1[g1] + 1, str.length));
  console.log(count1);
  console.log(res);

  if (str.charCodeAt(count1[0]) == 43) {
    result = res[0] + res[1];
    arr = [];
    arr.push(result);
    console.log(result);
  } else if (str.charCodeAt(count1[0]) == 45) {
    result = res[0] - res[1];
    arr = [];
    arr.push(result);
    console.log(result);
  } else if (str.charCodeAt(count1[0]) == 47) {
    result = res[0] / res[1];
    arr = [];
    arr.push(result);
    console.log(result);
  } else if (str.charCodeAt(count1[0]) == 42) {
    result = res[0] * res[1];
    arr = [];
    arr.push(result);
    console.log(result);
  }
  for (let q = 1; q < count1.length; q++) {
    if (str.charCodeAt(count1[q]) == 43) {
      result = result + res[q + 1];
      arr = [];
      arr.push(result);
      console.log(result);
    } else if (str.charCodeAt(count1[q]) == 45) {
      result = result - res[q + 1];
      arr = [];
      arr.push(result);
      console.log(result);
    } else if (str.charCodeAt(count1[q]) == 47) {
      result = result / res[q + 1];
      arr = [];
      arr.push(result);
      console.log(result);
    } else if (str.charCodeAt(count1[q]) == 42) {
      result = result * res[q + 1];
      arr = [];
      arr.push(result);
      console.log(result);
    }
  }

  dispNo.innerHTML = result;
  //let res1 = parseFloat(str.slice(0, count));
  //let res2 = parseFloat(str.slice(count + 1, str.length));
});

back.addEventListener("click", () => {
  dispNo.innerHTML = "";
  arr = [];
  count1 = [];
});
