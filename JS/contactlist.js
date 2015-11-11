var friends = new Object()

var list = function (friends)
{
    for (var list in friends)
    {
        console.log(list)
    }
}    

var search = function(name)
{
    for (var search in friends)
    {
        if(friends[search].firstName === name)
        {
            console.log(friends[search])
            return(friends[search])
        }
    }
}
    
var friends = 
{
    bill: 
    {
        firstName: "Bill",
        lastName: "Gates",
        number: "123456789",
        address: ['1 Buttland', 'Land of Butts']
    },
    steve: 
    {
        firstName: "Steve",
        lastName: "Jobs",
        number: "987654321", 
        address: ['2 Buttland', 'Land of Butts']
    },
    pal:
    {
        firstName: "Pal",
        lastName: "Buddy",
        number: "123459876",
        address: ['3 Buttland', 'Land of Butts']
    },
    buddy:
    {
        firstName: "Buddy",
        lastName: "Pal",
        number: "567894321",
        address: ['4 Buttland', 'Land of Butts']
    },
};
