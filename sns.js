const $post = document.createElement("article"); // createElementはタグを生成するメソッド
$post.setAttribute("class","post"); // setAttributeは要素の属性を設定するメソッドで引数を2つ持つ。第一引数にセレクター、第二引数に値を設定する
$post.innerHTML = "お腹減ったなう。";

const $timeline = document.querySelectorAll(".timeline")[0];
$timeline.appendChild($post); // appendChildは引数の中に入れた別のHTML要素を、取得した要素の子要素として追加するメソッド