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