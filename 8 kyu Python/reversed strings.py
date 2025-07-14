# Complete the solution so that it reverses the string passed into it.

# 'world'  =>  'dlrow'
# 'word'   =>  'drow'

def solution(string):
    return string[::-1]  #take the entire string but iterate from the end to the beginning

print(solution('classy'))