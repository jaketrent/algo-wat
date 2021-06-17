from .binary import search

def test_not_found():
    assert search([], 1) == None
    assert search([2], 1) == None
    assert search([2, 3], 1) == None
    assert search([2, 3], 4) == None

def test_found():
    assert search([1], 1) == 0
    assert search([1, 2], 1) == 0
    assert search([1, 2, 3], 2) == 1
    assert search([1, 2, 3], 3) == 2
    assert search([3, 5, 11, 47, 89, 99], 89) == 4
    assert search([3, 5, 11, 47, 89, 99], 11) == 2
