document.querySelector('#agregar').addEventListener('click', GuardarUsuario);


function GuardarUsuario(){
    var sCilindraje = document.querySelector('#txtcilindraje').value,
    sSerial = document.querySelector('#txtserial').value,
    sChasis = document.querySelector('#txtchasis').value,
    sAceite = document.querySelector('#txtaceite').value,
    sServicio = document.querySelector('#txtservicio').value;

    addUsuarioToSystem(sCilindraje,sSerial,sChasis,sAceite,sServicio); 
}