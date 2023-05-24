#include <iostream>
#include <vector>

// SEARCH FUNCTION
int binarySearch(const std::vector<int>& arr, int target) {
    int start = 0;
    int end = arr.size() - 1;

    while (start <= end) {
        int mid = start + (end - start) / 2;

        if (arr[mid] == target) {
            return mid;  // Found the target
        } else if (arr[mid] < target) {
            start = mid + 1;  // CHECKING THE end HALF OF THE ARRAY
        } else {
            end = mid - 1;  // CHECKING THE start HALF OF THE ARRAY
        }
    }

    return -1;  // RETURN 1 IF TARGET IS NOT AVAILABLE IN THE ARRAY}
// MAIN FUNCTION
int main() {
    std::vector<int> nums = { 5, 67, 43, 24, 12 };
    int target = 10;

    int index = binarySearch(nums, target);

    if (index != -1) {
        std::cout << "Item found at index " << index << std::endl;
    } else {
        std::cout << "Item not found in the array" << std::endl;
    }

    return 0;
}


