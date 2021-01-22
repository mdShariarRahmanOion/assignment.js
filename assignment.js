// https://github.com/shariaroion/assignment.js


// 1. kilometerToMeter:
function kilometerToMeter(kilometer) 
    {
        var meter =  kilometer*1000;
        return meter;
    }

    var result = kilometerToMeter(120);
    console.log(result);


//2.  budgetCalculator:
function budgetCalculator(watch,mobile,laptop)
    {
        var watchCounnt = watch*3;
        var mobileCount = mobile*4;
        var laptopCounnt = laptop*5;

        var totalCost = watchCounnt+ mobileCount+ laptopCounnt;

        return totalCost;
    }
    var result = budgetCalculator (50,100,500);
    console.log(result);


// 3.hotelCose:
    function  hotelCost(day)
    {
       if (day<=10)
       {
           var firstTenDays = day*100;
           return firstTenDays;
       }
       else if (day<=20)
       {
           var days = day-10;
           var SecondTenDays = days*80 + 10*100;
           var dayCost = SecondTenDays;
           return dayCost;
       }
       else
       {
           var days = day - 20;
           var thirdTenAndAlDay = days*50 + 10*100+ 10*80;
           var totalCost= thirdTenAndAlDay;
           return totalCost;
       }
   }
   var result= hotelCost(35);
   console.log (result);


//    4.megaFriend:
   function megaFriend(names) 
   {
       var presentName = names[0];
       for (var i=0; i<names.length;i++)
       {
           var countName=names[i];
           if(countName.length> presentName.length)
           {
               presentName=countName;
           }
       }
       return presentName;
       
   }
   var result= megaFriend(['maksud','oion','shahariar','hossian']);
   console.log(result);