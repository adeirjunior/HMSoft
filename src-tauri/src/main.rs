// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs::File;
use std::path::Path;
use std::io::prelude::*;
use csv;

fn check_file(path: &str) -> bool {
    Path::new(path).exists()
}

fn create_file(path: &str) -> std::io::Result<()> {
    let mut file = File::create(path)?;
    file.write_all(b"Name,Age,City\nJohn,30,New York\nJane,25,San Francisco\n")?;
    Ok(())
}

#[tauri::command]
fn read_from_file(path: &str) -> Result<(), String> {
    
    if !check_file(path) {
        create_file(path).map_err(|e| e.to_string())?;
        println!("File created: {}", path);
    }

    let mut reader = csv::Reader::from_path(path).map_err(|e| e.to_string())?;

    for result in reader.records() {
        let record = result.map_err(|e| e.to_string())?;
        println!("{:?}", record);
    }
    Ok(())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![read_from_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
