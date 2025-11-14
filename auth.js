import { supabase } from "./db.js";

// 登录函数
async function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        alert("登录失败：" + error.message);
        return;
    }

    alert("登录成功！");
    window.location.href = "index.html";
}

document.getElementById("login-btn").addEventListener("click", login);
