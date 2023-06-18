
//Here if else statement was ideal as it ensures that the speed conditoins of below 70 and above 70 
//are well adhered to and when met the correct alert is sent out and showed.Math.floor
//Math.floor returns the largest integer less than or equal to the given number then rounds down the number to the nearest whole number.
function speedInput(){
    let speed =parseFloat(prompt(`enter speed in km`))
    if(speed<70){
        alert(`ok`)
    } else {
        points=Math.floor((speed-70)/5)
        if (points>12){
            alert(`license suspended`)
        }
        else{
            alert(`points:`+ points)
        }
             }
             
           
            }
speedInput()