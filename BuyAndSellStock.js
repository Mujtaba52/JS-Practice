const maxProfit = (prices)=>{
    let profit = 0
    let min=prices[0]
    for(let i=1 ; i<prices.length -1 ; i++ ){
       if(min>prices[i]){
        min = prices[i]
       }
       else if(prices[i]-min>profit){
        profit = prices[i]-min
       }
    }
    return profit
}





console.log(maxProfit([8,1,8,3,9,4]))