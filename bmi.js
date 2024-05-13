var ask
do{
mass=parseFloat(prompt("enter your mass in kg"))
height=parseFloat(prompt("enter your height in cm"))


bmi=mass/(height/100)**2
if(bmi<18.5){
    alert('u are under weight')
}else if(bmi<25){
    alert('u are normal bmi')
}else if (bmi<30) {
    alert('u r over weight') 
}else{
    alert("u are over obese")
}
    ask=prompt("Do you want to calculate again? (yes/no)")
}while(ask=='yes')
