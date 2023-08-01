pub fn find( _spec: String ) -> usize {
    return 3;
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = find("test".to_string());
        assert_eq!(result, 3);
    }
}
