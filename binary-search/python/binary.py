def search(haystack, needle):
    return _search(haystack, needle, 0, len(haystack) -1)

def _search(haystack, needle, min, max):
    if max < min: return None

    midpoint = min + (max - min) // 2
    guess = haystack[midpoint]
    if guess == needle:
        return midpoint
    elif guess < needle:
        return _search(haystack, needle, midpoint + 1, max)
    elif guess > needle:
        return _search(haystack, needle, min, midpoint - 1)



