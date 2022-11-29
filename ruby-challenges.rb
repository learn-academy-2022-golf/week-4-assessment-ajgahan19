# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN 
# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# A method that takes in a number
def even_or_odd num1
    # if number is even (num1 % 2 = 0), return it is even
    if num1 % 2 == 0
        "#{num1} is even"
    # if number is not even return it is odd
    else
        "#{num1} is odd"
    end
        
end
num1 = 7
p even_or_odd num1
# Expected output: '7 is odd'
# Output: "7 is odd"

num2 = 42
p even_or_odd num2
# Expected output: '42 is even'
# Output: "42 is even"

num3 = 221
p even_or_odd num3
# Expected output: '221 is odd'
# Output: "221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# A method that takes in a string
def no_vowels str1
# (Delete) the uppercase and lowercase vowels in the string
    str1.delete "aeiouAEIOU"
end

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
p no_vowels beatles_album1
# Output: "Rbbr Sl"

beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
p no_vowels beatles_album2
# Output: "Sgt Pppr"

beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
p no_vowels beatles_album3
# Outupt: "bby Rd"


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

#Create a method that takes in a string
def is_a_palindrome str1

    #Compare forward and reverse versions of downcased string
    if str1.downcase.reverse == str1.downcase

        # If the forward and reverse downcased strings are strictly equal
        "#{str1} is a palindrone"
    
    else
        # If they are not
        "#{str1} is not a palindrome"
    end
end


palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
puts is_a_palindrome palindrome_tester1
# Output: Racecar is a palindrone

palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
puts is_a_palindrome palindrome_tester2
# Output: LEARN is not a palindrome

palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
puts is_a_palindrome palindrome_tester3
# Output: Rotator is a palindrone

#Understanding and working with ruby has been like a breath of air!
#I'm still confused on how I can build a website with ruby. I haven't done any projects yet. 
#However, I will get too that once I get there. Hopefully in PD week!   
