function currencyConverter(valNum){
    if(converter.UZS.value <= 0)
    window.alert("Enter Value Greaterthan 0");
    else{
    
    document.getElementById("dollar").value = (valNum/10630.75).toFixed(2);
    document.getElementById("yuan").value = (valNum/1640.09).toFixed(2);
    document.getElementById("won").value = (valNum/	9.26).toFixed(2);
    document.getElementById("rubl").value = (valNum/141.62).toFixed(2);
    document.getElementById("dinar").value = (valNum/35306.38).toFixed(2);
    }
    }