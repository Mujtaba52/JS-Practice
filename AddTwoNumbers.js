const AddTwoNumbers = (arr1,arr2)=>{

    arr1.reverse()
    arr2.reverse()
    let arr1Val = ''
    let arr2Val = ''

    const len1 =arr1.length
    const len2 =arr2.length

    for(let i = 0 ; i < len1 ; i++)arr1Val = arr1Val+ (arr1.shift()).toString()
    for(let i = 0 ; i < len2 ; i++)arr2Val = arr2Val+ (arr2.shift()).toString()
    
    let arr1IntVal = parseInt(arr1Val)
    let arr2IntVal = parseInt(arr2Val)
    let result = arr1IntVal + arr2IntVal
    result = result.toString()
    let resultArr=[]
    
    for(let i in result){
        resultArr.unshift(parseInt(result[i]))
    }

    return resultArr
}


//Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

console.log(AddTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.