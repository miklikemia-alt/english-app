// ---- Supabase 配置 ----
const SUPABASE_URL = "https://ezpmmgqenszyvfljjwcr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6cG1tZ3FlbnN6eXZmbGpqd2NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxMTE0MzcsImV4cCI6MjA3ODY4NzQzN30.G9FI_IxnmsK_TBXgzNVkfMPhvE9lxtVMcKg_sswmS8k";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---- 单词：从 Supabase 读取 ----
async function loadWords() {
    let { data, error } = await supabase
        .from("words")
        .select("*")
        .order("id", { ascending: true });

    if (error) {
        console.error("加载 words 失败：", error);
        return [];
    }

    return data;
}

// ---- 语法：从 Supabase 读取 ----
async function loadGrammar() {
    let { data, error } = await supabase
        .from("grammar")
        .select("*")
        .order("id", { ascending: true });

    if (error) {
        console.error("加载 grammar 失败：", error);
        return [];
    }

    return data;
}

// 其他页面会调用
export { loadWords, loadGrammar, supabase };
