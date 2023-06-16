


function getGrade(){
    let marks=parseFloat(prompt("enter marks btwn(0-100)"))
    if (marks>=79 && marks<=100){
        alert(`grade:A`);
    }
    else if(marks>=60 && marks<=79){
        alert("grade:B");
    }
    else if(marks>=49 && marks<=59){
        alert(`grade:C`);
    }
    else if(marks>=40 && marks<49){
        alert(`grade:D`);
    } else if(marks<40){
        alert(`grade:E`);
    }
        else{
            alert(`Enter valid input`)
        }
    }

    getGrade();


   





