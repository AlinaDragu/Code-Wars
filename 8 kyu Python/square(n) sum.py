# Complete the square sum function so that it squares each number passed into it 
# and then sums the results together.
# For example, for [1, 2, 2] it should return 9 because 1**2 + 2**2 + 2**2 = 9


def square_sum(numbers):
    #your code here
    total = 0
    for n in numbers :
        num = n ** 2
        total += num
    return total

print(square_sum([2,3,4,5]))