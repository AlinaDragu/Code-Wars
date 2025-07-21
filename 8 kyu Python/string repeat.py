# Write a function that accepts a non-negative integer n and a string s as parameters,
# and returns a string of s repeated exactly n times.

# Examples (input -> output)
# 6, "I"     -> "IIIIII"
# 5, "Hello" -> "HelloHelloHelloHelloHello"

def repeat_str(repeat, string):
    return repeat * string

print(repeat_str(45,'I'))
print(repeat_str(57,'Hello'))
