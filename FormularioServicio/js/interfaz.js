var UsuarioList = [];



function addUsuarioToSystem(pcilindraje, pserial, pchasis, paceite, pservicio){

    var NuevoServicio = {
        cilindraje:pcilindraje,
        serial: pserial,
        chasis : pchasis,
        aceite : paceite,
        servicio : pservicio
    };
    UsuarioList.push(NuevoServicio);
    console.log(UsuarioList);
    tabla.innerHTML= " ";
    for(i=0;i<=UsuarioList.length;i++){
        tabla.innerHTML += "<tr><td>" +UsuarioList[i].cilindraje+
        "</td><td>" + UsuarioList[i].serial+
        "</td><td>" + UsuarioList[i].chasis+
        "</td><td>" + UsuarioList[i].aceite+
        "</td><td>" + UsuarioList[i].servicio+
        "</td></tr>";
    }
}