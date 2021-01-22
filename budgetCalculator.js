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