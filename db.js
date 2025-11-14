const SUPABASE_URL = "https://ezpmmgqenszyvfljjwcr.supabase.co";
const SUPABASE_ANON_KEY = "你的 ANON KEY 放这里";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 添加单词
async function addWord() {
    const word = document.getElementById("word").value;

    const { data, error } = await supabase
        .from("words")
        .insert([{ text: word }]);

    if (error) alert(error.message);
    else loadWords();
}

// 获取单词
async function loadWords() {
    const { data } = await supabase.from("words").select("*");

    const list = document.getElementById("wordList");
    list.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item.text;
        list.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", loadWords);


// 保存语法
async function saveGrammar() {
    const text = document.getElementById("grammar").value;

    await supabase.from("grammar").insert([{ text }]);
    loadGrammar();
}

// 获取语法列表
async function loadGrammar() {
    const { data } = await supabase.from("grammar").select("*");
    const box = document.getElementById("list");

    box.innerHTML = "";
    data.forEach(item => {
        box.innerHTML += "<p>" + item.text + "</p>";
    });
}

document.addEventListener("DOMContentLoaded", loadGrammar);
