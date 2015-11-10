var user = prompt("What is the meaning of life?", "Butts, Bitcoin, or Burgers...");

// now, do an ARGOS

user = user.toUpperCase()

switch(user)
{
    case 'BUTTS':
        console.log("Damn right son.");
    break;
    
    case 'BITCOIN':
        console.log("Gettin all dose coinz!");
    break;
    
    case 'BURGERS':
        console.log("GET ME SOME RANCH SAUCE");
    break;
    
    default:
        console.log("That's not an option pal");

}