import XCTest
@testable import BinarySearch

final class BinarySearchTests: XCTestCase {
    func testNotFound() {
        XCTAssertEqual(BinarySearch().search(haystack: [], needle: 3), nil)
        XCTAssertEqual(BinarySearch().search(haystack: [1], needle: 3), nil)
        XCTAssertEqual(BinarySearch().search(haystack: [1, 2], needle: 3), nil)
        XCTAssertEqual(BinarySearch().search(haystack: [1, 2, 4], needle: 3), nil)
    }

    func testFound() {
        XCTAssertEqual(BinarySearch().search(haystack: [42], needle: 42), 0)
        XCTAssertEqual(BinarySearch().search(haystack: [2, 42, 52, 72], needle: 42), 1)
        XCTAssertEqual(BinarySearch().search(haystack: [22, 41, 42, 43, 52, 72], needle: 42), 2)
        XCTAssertEqual(BinarySearch().search(haystack: [22, 41, 42, 43, 52, 72], needle: 72), 5)
    }

    static var allTests = [
        ("testNotFound", testNotFound),
        ("testFound", testFound),
    ]
}
