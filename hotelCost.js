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
    var result= hotelCost(22);
    console.log (result);