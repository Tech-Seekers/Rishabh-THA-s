let arr=[{question:"Who is Prime Minister of India ?",option1:"Narendra Modi",option2:"Virat Kohli",option3:"Kejriwal",option4:"Rahul Gandhi",answer:"Narendra Modi"},
{question:"Who is captain of India ?",option1:"Narendra Modi",option2:"Virat Kohli",option3:"Kejriwal",option4:"Rahul Gandhi",answer:"Virat Kohli"}]
let i=0;
document.querySelector(".Question").innerHTML = arr[i]["question"];
document.querySelector(".option1").innerHTML = arr[i]["option1"];
document.querySelector(".option2").innerHTML = arr[i]["option2"];
document.querySelector(".option3").innerHTML = arr[i]["option3"];
document.querySelector(".option4").innerHTML = arr[i]["option4"];

function fnext()
{
    for(i=1;i<arr.length;i++)
    {
        document.querySelector(".Question").innerHTML = arr[i]["question"];
        document.querySelector(".option1").innerHTML = arr[i]["option1"];
        document.querySelector(".option2").innerHTML = arr[i]["option2"];
        document.querySelector(".option3").innerHTML = arr[i]["option3"];
        document.querySelector(".option4").innerHTML = arr[i]["option4"];                
    }
}
function Select1()
{   var ans = document.querySelector(".option1");
    if(arr[i]["option1"] == arr[i]["answer"])
    alert("Answer is correct");
    else
    alert("Incorrect Answer");
}

function Select2()
{   var ans = document.querySelector(".option2");
    if(arr[i]["option2"] == arr[i]["answer"])
    alert("Answer is correct");
    else
    alert("Incorrect Answer");
}

function Select3()
{   var ans = document.querySelector(".option3");
    if(arr[i]["option3"] == arr[i]["answer"])
    alert("Answer is correct");
    else
    alert("Incorrect Answer");
}

function Select4()
{   var ans = document.querySelector(".option4");
    if(arr[i]["option4"]== arr[i]["answer"])
    alert("Answer is correct");
    else
    alert("Incorrect Answer");
}
