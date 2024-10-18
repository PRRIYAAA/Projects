import random
import string

length=int(input("Enter the length of the password:"))
if length<1:
    print('password length should be atleast 1')
    
characters=string.ascii_letters+string.digits+string.punctuation

for i in range(length):
    password=''.join(random.choice(characters))
    print(password,end='')
    
