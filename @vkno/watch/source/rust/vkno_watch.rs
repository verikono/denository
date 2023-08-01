#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

// use std::thread;
// use std::fs;
use std::fs::{File};
// use std::io::{Result, Read};
use std::io::Read;
use std::path::Path;

#[napi]
pub fn cat(path: String) -> String {
    let p = Path::new(&path);
    let f = File::open(p);
    let mut s = String::new();
    match f.expect("REASON").read_to_string(&mut s) {
        Ok(_) => s,
        Err(e) => e.to_string(),
    }
}

#[napi]
pub fn fibonacci(n: i32) -> i32 {
    match n {
        1 | 2 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

#[napi(constructor)]
struct RSWatcher {
    pub name: String,
    pub kind: u32
}

#[napi]
impl RSWatcher {

    #[napi]
    pub fn change_name(&mut self, name: String) {
        self.name = name;
    }

}
