
"""
Write a function, max_value, that takes in list of numbers as an argument. The function should return the largest number in the list.

Solve this without using any built-in list methods.

You can assume that the list is non-empty.

test_00:

max_value([4, 7, 2, 8, 10, 9]) # -> 10
test_01:

max_value([10, 5, 40, 40.3]) # -> 40.3
test_02:

max_value([-5, -2, -1, -11]) # -> -1
test_03:

max_value([42]) # -> 42
test_04:

max_value([1000, 8]) # -> 1000
test_05:

max_value([1000, 8, 9000]) # -> 9000
test_06:

max_value([2, 5, 1, 1, 4]) # -> 5
"""
def max_value(nums):
    maximum = float('-inf')
    for num in nums:
        if num > maximum:
             maximum = num
            
    return maximum