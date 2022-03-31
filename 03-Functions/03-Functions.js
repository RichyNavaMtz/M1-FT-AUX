function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 


// expect(timeConversion("03:15:00PM")).toBe("15:15:00");
    
    time = time.split(':');
    // [ '03', '15', '00PM' ] 
    
    let hora = time.shift()
    let sec = time[1][0]+time[1][1]
    let tiempo = time[1][2]
    //sec = '0' + '0' = '00'
    //cuando sea tarde
    if(tiempo=='P'){
        if(hora=='12'){
            return hora+':'+time[0]+':'+sec
        }
        // time=[ '15', '00PM' ]
        hora = Number(hora)+12
        //hora= 15
        hora=String(hora)
        //hora ='15'
    return hora+':'+time[0]+':'+sec    
    }
    //cuando sea de mañana
    if(tiempo=='A'){
        if(hora == '12'){return '00'+':'+time[0]+':'+sec}
        return hora+':'+time[0]+':'+sec
    }
}

module.exports = {
    timeConversion
}