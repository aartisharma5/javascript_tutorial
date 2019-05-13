let numbers = [3,5,2,6,8,3];

if(numbers[1] == numbers[5]){
    console.log('correct');
}
else if(numbers[1] == 6){
    console.log('wrong');
}
else{
    console.log('else');
}


//example

if(numbers[0] == numbers[3] || numbers[1] == 5){
    console.log('abc');
}
else{
    console.log('asdb');
}
let games = 'football';
switch(games){
    case "ac":
    console.log('accc');
    break;
    case "football":
    console.log('footballl');
    break;
    default:
    console.log("shsfdv");
    break;
}