function age(){
    let age = 0;
    if(monthBorn === currentMonth ){
        if(dayBorn <= currentDay){
           age = currentYear - birthday.year;
        }
        else{
           age = currentYear - birthday.year - 1;
        }
   
    }
    else if(monthBorn < currentMonth){
       age = currentYear - birthday.year;
    }
    else{
       age = currentYear - birthday.year - 1;
    }
    alert("tens " + age + " anos" )
   }
   age();