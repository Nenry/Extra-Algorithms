def twoSum (arr, tgtSum) 
  #create a hash
  #return the two numbers in its given order
  #there is only one unique sum 
  #time complexity is O(n) since every number will be visited
  #space complexity is O(n) since we will be making a hash for almost every number
  numHash = {}

  arr.each do |num, idx| 
    diff = tgtSum - num
    if numHash[diff]
      return [diff, num]
      p 'hi'
    else 
      numHash[num] = true
    end 

  end 


end 
# twoSum([4, 6, 1], 10)

def improved_two_sum(arr, tgtSum) 
  #the plan is to sort the arr first, this will be nlogn
  #then make two pointers with left side and right side
  #conditional that will adjust the pointer according to the condition of the sum to tgt sum
  #conditional to stop if pointers are pointing at the same spot 
  # if sum < tgtSum, then we will need to increase the sum, move left towards a bigger number ++
  # if sum > tgtSum, then we need a lower number to add, move right pointer --
  # return [] if none to return
  arr = arr.sort
  left = 0
  right = arr.length - 1

  while (left < right) 
    sum = arr[left] + arr[right]
    if sum == tgtSum
      return [arr[left], arr[right]]
    elsif sum < tgtSum 
      left += 1
    elsif sum > tgtSum
      right -= 1
    end 

  end 


end 

p improved_two_sum([4, 6, 1], 10)