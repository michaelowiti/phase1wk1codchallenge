
//here if else is a good option for a condition as it
//enables the function check through the marks and if they meet
// set conditions, it prints out the correspondent grade.It also doesn't
//accept invalid input and gives a range for the marks
//parseFloat is used to parse a string argument and convert it to a floating-point number. It tries to extract a numeric value from the given string.

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
