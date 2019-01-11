def bubble_sort(arr)
  #while condition, everytime you enter then sorted = false, check for conditionals, if swap is necessary then sorted = false
  #worst case time complexity is O(n2) since the array will have to be visited again if sorted is needed 

  sorted = false 
  result_arr = arr.dup
  while !sorted
    sorted = true 
    result_arr.each_with_index do |num, idx|
      if idx < result_arr.length - 1
        if num > result_arr[idx + 1]
          swap_num = num
          result_arr[idx] = result_arr[idx + 1]
          result_arr[idx + 1] = num
          sorted = false   
        end 
      end 
    end

  end 

  return result_arr

end 

p bubble_sort([8, 5, 2, 9, 5, 6, 3])