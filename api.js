// setTimeout 引数2つ、1つ目に関数、2つ目に秒数

const timer = setTimeout(function(){
    alert("Hello!");
},5000);

// clearTimeout タイマー解除
clearTimeout(timer);