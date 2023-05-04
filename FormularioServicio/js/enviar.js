$(document).ready(function(){


    $('#mostrar').on('click',function(){

        let tabla=document.querySelector('#tabla')
        tabla.innerHTML= ''
        $.ajax({
            url:"http://localhost:8080/listarServicios",
            type: "GET",
            datatype:"JSON",
            success: function(respuesta){
                tabla.innerHTML= '';
                for(i=0;i<=respuesta.length;i++){
                    tabla.innerHTML += "<tr><td>" +respuesta[i].cilindraje+
                    "</td><td>" + respuesta[i].serial+
                    "</td><td>" + respuesta[i].chasis+
                    "</td><td>" + respuesta[i].aceite+
                    "</td><td>" + respuesta[i].servicio+
                    "</td></tr>";
                }
            }
            
        });

    });

    $('#agregar').on('click',function(){

        let datos= {
            cilindraje:parseInt($('#txtcilindrja').val()),
            serial:parseInt($('#txtserial').val()),
            chasis:parseInt($('#txtchasis').val()),
            aceite:$('#txtaceite').val(),
            servicio:parseInt($('#txtservicio').val())
          
        }
        let datosEnviados= JSON.stringify(datos);
        $.ajax({
            url:"http://localhost:8080/",
            type:"POST",AgregarServicio
            data: datosEnviados,
            contentType: "application/JSON",
            datatype: JSON,
            success: function(respuesta){
                console.log(respuesta);
            }
        }) 
    });

    $('#eliminar').on('click', function(){ //PRIMERO Y DESPUES EL DE 
        let datos = parseInt($('#txtserial').val())
        $.ajax({
            url: "http://localhost:8080/EliminarServicio/" + datos,
            type: "GET",            
            datatype: JSON,
            success: function (respuesta) {
                console.log(respuesta);
              }

        });

    });



    $('#buscar').on('click', function(){
        let cod = parseInt($('#txtserial').val());
        let tabla = document.querySelector('#tabla')
        $.ajax({
            url:'http://localhost:8080/buscarServicio/' + cod,
            type: 'GET',
            datatype: JSON,
            success: function(respuesta){             
                if(respuesta){

                    tabla.innerHTML = '';
                    tabla.innerHTML += '<tr><td>'+ respuesta.cilindraje +
                    '</td><td>' + respuesta.serial + 
                    '</td><td>' + respuesta.chasis + 
                    '</td><td>' + respuesta.aceite +
                    '</td><td>' + respuesta.servicio
                    '</td></tr>';

                }else{
                    alert('No se encontro el vehiculo');
                }
            }
        })
    });


});