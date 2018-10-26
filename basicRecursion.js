// Write a function sumTo(n) that uses recursion to calculate 
// the sum from 1 to n (inclusive of n).

  function sumTo(n) {
    if (n <= 0) return n;

    return (n + sumTo(n -1));



  }
// test cases:
// sumTo(5) => returns 15
// sumTo(1) => returns 1
// sumTo(9) => returns 45
// sumTo(-8) => returns null

console.log(sumTo(5));
console.log(sumTo(1));
console.log(sumTo(9));
console.log(sumTo(-8));

//write a function to recursively add numbers in an array
// test cases:
// add_numbers([1, 2, 3, 4]) => returns 10
// add_numbers([3]) => returns 3
// add_numbers([-80, 34, 7]) => returns - 39
// add_numbers([]) => returns null

// console.log(addNumbers([1,2,3,4]));
// console.log(addNumbers([3]));
// console.log(addNumbers([-80, 34, 7]));
// console.log(addNumbers([]));

// Let 's write a method that will solve Gamma Function recursively. 
// The Gamma Function is defined Γ(n) = (n-1)!.

// console.log(gammaFn(0));
// console.log(gammaFn(1));
// console.log(gammaFn(4));
// console.log(gammaFn(8));

// test cases:
// gamma_fnc(0)# => returns null
// gamma_fnc(1)# => returns 1
// gamma_fnc(4)# => returns 6
// gamma_fnc(8)# => returns 5040

// Write a function ice_cream_shop(flavors, favorite) that takes in 
// an array of ice cream flavors available at the ice cream shop, as 
// well as the user's favorite ice cream flavor. 

//Recursively find out whether or not the shop offers their favorite 
// flavor.

// test cases:
// ice_cream_shop(['vanilla', 'strawberry'], 'blue moon')# => returns false
// ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')# => returns true
// ice_cream_shop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')# => returns false
// ice_cream_shop(['moose tracks'], 'moose tracks')# => returns true
// ice_cream_shop([], 'honey lavender')# => returns false

// console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon'));
// console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'));
// console.log(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'));
// console.log(iceCreamShop(['moose tracks'], 'moose tracks'));
// console.log(iceCreamShop([], 'honey lavender'))



// Write a function reverse(string) that takes in a string and returns it reversed.
  // Test Cases
  // reverse("house") => "esuoh"
  // reverse("dog") => "god"
  // reverse("atom") => "mota"
  // reverse("q") => "q"
  // reverse("id") => "di"
  // reverse("") => ""

  // console.log(reverse('house'));
  // console.log(reverse('dog'));
  // console.log(reverse('atom'));
  // console.log(reverse('q'));
  // console.log(reverse('id'));
  // console.log(reverse(''));


  // Write a recursive method, range, that takes a start and an end and 
  // returns an array of all numbers in that range, exclusive. 
  // For example, range(1, 5) should return [1, 2, 3, 4]. If end < start, 
  // you can return an empty array.


  // Write recursive versions of exponent calculating


  // Write an deepDup method that will perform a "deep" duplication of the interior arrays.
  // You should be able to handle "mixed" arrays. For instance: [1, [2], [3, [4]]]

  // A shallow copy makes a copy of the reference to X into Y. Think about it as a copy of
  // X's address. So, the addresses of X and Y will be the same i.e. they will be pointing
  // to the same memory location

  // A deep copy makes a copy of all the members of X, allocates differeny memory location for Y,
  // and then assigns the copied embers to Y to achieve deep copy. In this way, if X vanishes, Y is
  // still valid in memory


  //write a flatten function



  // console.log(flatten([1,2,[3,4,[5]], [8]]));