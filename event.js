// window.addEventListener("load",function() {
//     alert("読み込み完了");
// })

// addEventListenerは引数を2つ持つ。第一引数にイベントの種類、第二引数にイベントが発生した時に実行される関数を指定する。
// 主要なイベントに、load（読み込み完了）、scroll（スクロール時）、click（クリック）、change（値の変更）などがある。

// window.addEventListenerはページ全体に対するイベント
// document.addEventListenerはボタンや画像など個々の要素に関するイベント

document.querySelector("#button").addEventListener("click", () => {
    console.log("Clickされた！");
 });

// keydown キーボードのキーが押された時
// mouseover マウスカーソルをのせた時
// touchstart スマホでユーザーがタップした時
// touchmove スワイプした時

// const $btn = document.querySelector("#button");

// $btn.addEventListener("click", function(){
//     const $output = document.querySelector("#output");
//     $output.textContent = "ピカチュウ！";
// });

// textContentをinnerHTMLにしてもOK！innerHTMLだと文字列だけではなく、タグ名を入れても反応してくれる。


// const $btn = document.querySelector("#button");

// $btn.addEventListener("click",function(){
//     const $cnt =  Math.random();
//     if($cnt <= 0.2){
//         alert("ピカチュウをゲットした！");
//     }else {
//         alert("ざんねん！もうすこしでつかまえられたのに！");
//     }
// });

// Math.random()を変数定義しない場合

const $btn = document.querySelector("#button");

$btn.addEventListener("click",function(){
    if(Math.random() <= 0.2){
        alert("ピカチュウをゲットした！");
    }else {
        alert("ざんねん！もうすこしでつかまえられたのに！");
    }
});