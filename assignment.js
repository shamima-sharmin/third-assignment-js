// https://shamima-sharmin.github.io/third-assignment-js/

function KilometerToMeter (kilometer){
    var meter = kilometer*1000;
return meter;
}
result = KilometerToMeter(5);
console.log(result);

function budgetCalculator(clock, phone, laptop){
    var clockCost = 50;
    var phoneCost = 100;
    var laptopCost = 500;
    var totalPrice = 0;
    if (clock>0){
        var clockPrice = clock * clockCost;
    }
    if(phone>0){
        var phonePrice = phone * phoneCost;
    }
    if (laptop>0){
        var laptopPrice = laptop * laptopCost;
    }
    return clockPrice + phonePrice + laptopPrice;
}
result = budgetCalculator(1,1,1);
console.log(result);

function hotelCost(days){
var cost = 0;
if(days <=10){
    cost = days*100; 
} esle if (days <= 20) {
  var  firstTen = 10 * 100;
  var remaining = days - 10;
  var secondTen = remaining * 80;
} else  {
    var firstTen = 10*100;
    var secondTen = 10*80;
    var remaining = days - 20;
    var lastTen = remaining*50;
    cost = (firstTen + secondTen + lastTen);
}
return cost;
}


function megaFriend(arr){
    var bigName =arr[0];
    for (var i=0; i <arr.length; i++){
        var element =arr[i];
        if (element.length > bigName.length){
            bigName = element;
        }
    }
    return bigName;
}