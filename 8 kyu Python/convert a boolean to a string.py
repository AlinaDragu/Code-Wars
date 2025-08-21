# Implement a function which convert the given boolean value into its string representation.

# Note: Only valid inputs will be given.

def boolean_to_string(b):
    #your code here
    if b == True:
        return 'True'
    else:
        return 'False'
    
def boolean_to_string(b):
    return repr(str(b)) 
    
print(boolean_to_string(True))

