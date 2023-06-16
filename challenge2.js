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