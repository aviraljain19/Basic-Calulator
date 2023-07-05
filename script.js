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
      arr.push(char[i].innerHTML);
      if (arr[0] != "+" && arr[0] != "*" && arr[0] != "/") {
        dispNo.append(char[i].innerHTML);
      } else {
        arr = [];
      }
    }
  });
});

let count = 0,
  y;

equals.addEventListener("click", () => {
  count = 0;
  let count1 = [];
  let res = [];
  let str = arr.join("");
  for (let x = 0; x < arr.length; x++) {
    if (
      (str.charCodeAt(x) >= 48 && str.charCodeAt(x) <= 57) ||
      str.charCodeAt(x) == 46
    ) {
      count++;
    } else {
      count1.push(x);
    }
  }

  if (arr[0] == "-") {
    let ini = 1;
    let g1;
    let g2 = 0;
    for (let g = 1; g < count1.length; g++) {
      res[g2] = parseFloat(str.slice(ini, count1[g]));
      console.log(res[g2]);
      g2++;
      ini = count1[g] + 1;
      //g1 = g;
    }
    res[g2] = parseFloat(str.slice(count1[g2] + 1, str.length));
    console.log(res[0]);
    console.log(res[1]);
    console.log(res[2]);
    g2 = 0;
    if (str.charCodeAt(count1[1]) == 43) {
      result = -res[0] + res[1];
      arr = [];
      arr.push(result);
      console.log(result);
    } else if (str.charCodeAt(count1[1]) == 45) {
      result = -res[0] - res[1];
      arr = [];
      arr.push(result);
      console.log(result);
    } else if (str.charCodeAt(count1[1]) == 47) {
      result = -res[0] / res[1];
      arr = [];
      arr.push(result);
      console.log(result);
    } else if (str.charCodeAt(count1[1]) == 42) {
      result = -res[0] * res[1];
      arr = [];
      arr.push(result);
      console.log(result);
    }
    for (let q = 2; q < count1.length; q++) {
      if (str.charCodeAt(count1[q]) == 43) {
        result = result + res[q];
        arr = [];
        arr.push(result);
        console.log(result);
      } else if (str.charCodeAt(count1[q]) == 45) {
        result = result - res[q];
        arr = [];
        arr.push(result);
        console.log(result);
      } else if (str.charCodeAt(count1[q]) == 47) {
        result = result / res[q];
        arr = [];
        arr.push(result);
        console.log(result);
      } else if (str.charCodeAt(count1[q]) == 42) {
        result = result * res[q];
        arr = [];
        arr.push(result);
        console.log(result);
      }
    }
  
    dispNo.innerHTML = result;
  } else {
    let ini = 0;
    let g1;
    for (let g = 0; g < count1.length; g++) {
      res[g] = parseFloat(str.slice(ini, count1[g]));
      ini = count1[g] + 1;
      g1 = g;
    }
    res[g1 + 1] = parseFloat(str.slice(count1[g1] + 1, str.length));

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
}
});

back.addEventListener("click", () => {
  dispNo.innerHTML = "";
  arr = [];
  count1 = [];
});
