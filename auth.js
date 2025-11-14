import { supabase } from "./db.js";

// 注册函数
async function register() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("请输入邮箱和密码！");
        return;
    }

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        alert("注册失败：" + error.message);
        return;
    }

    alert("注册成功！请返回登录页面登录。");
    window.location.href = "login.html";
}


// 登录函数
async function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        alert("登录失败：" + error.message);
        return;
    }

    alert("登录成功！");
    window.location.href = "index.html";
}


// 如果有登录按钮，则绑定事件
const loginBtn = document.getElementById("login-btn");
if (loginBtn) loginBtn.addEventListener("click", login);

// 如果有注册按钮，则绑定事件
const registerBtn = document.getElementById("register-btn");
if (registerBtn) registerBtn.addEventListener("click", register);
