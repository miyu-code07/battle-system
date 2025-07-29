const questions = [
    "名前は？",
    "何年？",
    "どこ？"
];

// for (let index = 0; index < questions.length; index++) {
//     console.log(questions[index]);
// }

// let isLogin = false;
// if (!isLogin) {
//     alert("ログインしてください");
// }

// const userType = "owner";
// if(userType === "member") {
//     alert("アクセスできません");
// }else if (userType === "admin") {
//     alert("今から10分だけアクセスできます");
// } else {
//     console.log("アクセス成功");
// }

// const myMoney = 1000;
// let isShipping = false;
// if(myMoney >= 500){
//     isShipping = true;
// }
// console.log(isShipping);



// function 関数名 () {
//     // 処理
// }


// const 関数名 = () => {
//     // 処理
// }

// function changeDarkMode() {
//     if (new Date().getHours() > 13) {
//         document.body.style.backgroundColor = "#000";
//     }
// }
// changeDarkMode();


function getSeason() {
    const month = new Date().getMonth() + 1;
    if (month >= 3 && month <= 5) {
        return "spring";
    } else if (month >= 6 && month <= 8) {
        return "summer";
    } else if (month >= 9 && month <= 11) {
        return "autumn";
    } else {
        return "winter";
    }
}
 const season = getSeason();
 console.log(season);





const sonicBoom = () => {
    return 20;
}
console.log(sonicBoom());

// const metalBurst = (lastDamage) => {
//     return lastDamage * 1.5;
// }
// console.log(metalBurst(50));


function metalBurst (lastDamage) {
    return lastDamage * 1.5;
}
console.log(metalBurst(50));




// const hornDrill = (theirHp) => {
//     if (Math.random() <= 0.3) {
//         return theirHp;
//     } else {
//         return 0;
//     }
// }

// console.log(hornDrill(100));

const hornDrill = (theirHp) => {
    if (Math.random() <= 0.3) {
        return theirHp;
    } else {
        return 0;
    }
}

console.log(hornDrill(100));

// const オブジェクト名 = {
//     プロパティ名: 値
// };

// const snsUser = {
//     id: 1,
//     userName: "Taro",
//     gender: "male",
//     like: function() {
//         // ここに処理を書く (省略)
//     },
//     post: function() {
//         // ここに処理を書く (省略)
//     },
//     followers: ["Yamada","Suzuki","Tanaka"],
//     following:["Yamada","Suzuki"],
//     premium: true,
//     darkMode: false,
//     posts:null,
// };

// console.log(snsUser.followers[0]);
// // 参照 オブジェクト名.プロパティ名
// console.log(snsUser.id);

// const snsUser = {
//     id: 1,
//     userName: "Taro",
//     followers: ["Yamada","Suzuki","Tanaka"],
//     following:["Yamada","Suzuki"],
//     posts: null,
//     settings: {
//         premium:true,
//         darkMode: false,
//     },
//     actions: {
//         like: () => {},
//         post: () => {},
//     }
// };

// console.log(snsUser.settings.darkMode);

const snsUser = {
    id: 1,
    userName: "Taro",
    post: function(contents) {
        return contents + "を投稿しました by" + this.userName;
    } 
};

console.log(snsUser.post("プログラミングなう。"));

const pikachu = {
    name: "ピカチュウ",
    level: 18,
    types: ["でんき"],
    skills: ["10万ボルト","でんこうせっか","たいあたり"],
    levelUp: function() {
        this.level++;
        if (this.level >= 20) {
            this.skills.push("スパーク");
        };
    }
};

console.log("1st Pikachu", pikachu.level, pikachu.skills);
pikachu.levelUp();
console.log("2nd Pikachu", pikachu.level, pikachu.skills);
pikachu.levelUp();
console.log("3rd Pikachu", pikachu.level, pikachu.skills);

const myPokemons = ["サンダー","ホウオウ","スイクン","ラティアス","パルキア"];

myPokemons.push("ミュウツー");
console.log(myPokemons);

console.log(myPokemons.length);

const oldVersions = ["赤","緑","青"];
const newVersions = ["ルビー","サファイア","エメラルド"];

console.log(oldVersions.concat(newVersions));