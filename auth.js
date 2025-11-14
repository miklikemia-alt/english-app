const SUPABASE_URL = "https://ezpmmgqenszyvfljjwcr.supabase.co";
const SUPABASE_ANON_KEY = "你的 ANON KEY 放这里";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 注册
async function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let { error } = await supabase.auth.signUp({ email, password });

    if (error) alert(error.message);
    else {
        alert("注册成功！");
        window.location.href = "login.html";
    }
}

// 登录
async function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) alert(error.message);
    else window.location.href = "dashboard.html";
}

// 登出
async function logout() {
    await supabase.auth.signOut();
    window.location.href = "login.html";
}
