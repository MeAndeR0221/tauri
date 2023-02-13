#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]
// !以上代码仅有一个目的：关闭构建好的应用在 Windows 上运行时一般会出现的控制台窗口。

// ?Tauri 提供了一个简单而强大的 command 系统，用于从 web 应用程序调用 Rust 函数。
// ?命令可以接受参数并返回值，也可以返回错误并且是 async。
#[tauri::command]
fn greet(name: &str) -> String { format!("Hello, {}! You've been greeted from Rust!", name) }

// !You will have to provide a list of your commands to the builder function like so:
fn main() {
    tauri::Builder::default()
            // ?This is where you pass in your commands
            .invoke_handler(tauri::generate_handler![greet])
            .run(tauri::generate_context!())
            .expect("error while running tauri application");
}

// *Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

