/*jshint multistr:true */

var text = "One day Marta went to the shops and ate an entire chicken.\
She was so full that the chicken wings came out of her back and Marta became a hybrid chicken human. As she went rabid and started pecking people Andrew started crying and shouting 'Marta! No!'. It was all very sad because they all died."
var myName = "Marta"
var hits = []

for (var i = 0; i < text.length; i++)
{
    if (text[i] === 'M')
    {
        for (var j = i; j < i + myName.length; j++)
        {
            hits.push(text[j]);
        }
    }
}

if (hits === 0)
{
    console.log("Your name wasn't found!")
}
else
{
    console.log(hits)
}