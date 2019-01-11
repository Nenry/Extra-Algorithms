#recursion, requires base case, and something that peels the layers
# left + pivot + right 
# pivot = first 
# return left + pivot + right 

#time complexity worst case is O(n2), this is if you already have an sorted array such as [1, 2, 3, 4, 5]. You will go through each number then n deep
#best case scenario is O(nlogn) if each sub array is constantly even when splitted
#space complexity is O(logn) since the size gets smaller and smalelr each time 
def quick_sort(arr)
  
  if arr.length <= 1
    return arr
  end 

  pivot = arr[0]
  left = []
  right = []

  #seperate into left and right 
  arr[1..-1].each do |num|
    if num < pivot
      left.push(num)
    else
      right.push(num)
    end  
  end 

  result = quick_sort(left) + [pivot] + quick_sort(right)

  return result 

end 


p quick_sort([3, 2, 1])