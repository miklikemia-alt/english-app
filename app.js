// 载入 Supabase 函数
import { loadWords, loadGrammar } from "./db.js";

// 页面加载时运行
document.addEventListener("DOMContentLoaded", () => {
    init();
});

// 主初始化
async function init() {
    console.log("正在从 Supabase 加载数据...");

    // 加载单词
    const words = await loadWords();
    console.log("单词：", words);

    // 加载语法
    const grammar = await loadGrammar();
    console.log("语法：", grammar);

    // 显示到页面（如果有对应元素）
    renderWords(words);
    renderGrammar(grammar);
}

/* ---------------------
   以下是 UI 显示函数
--------------------- */

// 显示单词
function renderWords(words) {
    const wordBox = document.getElementById("word-list");

    if (!wordBox) return; // 页面没有这个元素就跳过

    wordBox.innerHTML = "";

    if (words.length === 0) {
        wordBox.innerHTML = "<p>没有单词</p>";
        return;
    }

    words.forEach(w => {
        const item = document.createElement("div");
        item.className = "word-item";
        item.innerHTML = `
            <h3>${w.word}</h3>
            <p>${w.meaning}</p>
            <small>例句：${w.example || "无"}</small>
            <hr>
        `;
        wordBox.appendChild(item);
    });
}

// 显示语法
function renderGrammar(grammar) {
    const grammarBox = document.getElementById("grammar-list");

    if (!grammarBox) return;

    grammarBox.innerHTML = "";

    if (grammar.length === 0) {
        grammarBox.innerHTML = "<p>没有语法内容</p>";
        return;
    }

    grammar.forEach(g => {
        const item = document.createElement("div");
        item.className = "grammar-item";
        item.innerHTML = `
            <h3>${g.title}</h3>
            <p>${g.content}</p>
            <small>${g.example || ""}</small>
            <hr>
        `;
        grammarBox.appendChild(item);
    });
}
