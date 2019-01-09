def palindrome(string)
  string == string.reverse
end 

p palindrome('hello')
p palindrome('helleh')