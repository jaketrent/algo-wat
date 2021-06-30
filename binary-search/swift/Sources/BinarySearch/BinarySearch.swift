struct BinarySearch {

    func search(haystack: [Int], needle: Int) -> Int? {
        func _search(haystack: [Int], needle: Int, min: Int, max: Int) -> Int? {
            if min > max { return nil }
            let midpoint = min + Int((max - min) / 2)
            let guess = haystack[midpoint]
            if guess == needle { return midpoint }
            else if guess < needle { return _search(haystack: haystack, needle: needle, min: midpoint + 1, max: max) }
            else if guess > needle { return _search(haystack: haystack, needle: needle, min: min, max: midpoint - 1) }
            return nil
        }
        return _search(haystack: haystack, needle: needle, min: 0, max: haystack.count - 1)
    }
}
