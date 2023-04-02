let info={
    fname:"Twanst",
    lname:"mohammed",
    age:21,
    statuss:"active",
    phone:{
        korek:'07501194258',
        Asiacel:'07701234566',
        zine:'07801234566'
    },
    address:{
        ad1:"Erbil",
        ad2:"Koysnjaq",
    },

    ISstatus:function(){
        if(info.statuss==="active"){
            return true;
        }
        else{return false
        }
    },
    ISages:function(){
    if(info.age>18){
        return "Susseccfully"
    }else{
        return "Faile"
    }
},
proccess:()=>"Done"

}

console.log( info.address.ad1 )