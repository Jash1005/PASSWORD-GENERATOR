Main Logic of this password generator :
            1. To generate a password, we save all uppercase letters, lowercase letters, symbols, and numbers into four different variables as strings.
            2. We then generate a random number using Math.random() to get the index of the string and add the character at that index into our password.

We may specify the length of password and run a loop till which this length is achieved. In this case we can make a new variable = uppercase + lowercase + numbers + symbol 
and use same method of generating random index. 
