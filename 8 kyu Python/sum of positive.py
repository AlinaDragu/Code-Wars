# You get an array of numbers, return the sum of all of the positives ones.

# Example
# [1, -4, 7, 12] => 
# 1+7+12=20

# Note
# If there is nothing to sum, the sum is default to 0.

def positive_sum(arr):
    sum = 0
    for num in arr:
        if num > 0:
            sum += num #count
    return sum

print(positive_sum([3,4,5,6,-23,-346]))