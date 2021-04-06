$(document).ready(function () {
    console.log("ready!");

    $.validator.addMethod("customemail",
        function (value, element) {
            return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
        },
        "Ingresá una dirección de email"
    );

    $("#myform").validate({

        rules: {
            "nombre": {
                required: true
            },
            "email": {
                required: {
                    depends: function () {
                        $(this).val($.trim($(this).val()));
                        return true;
                    }
                },
                customemail: true
            },
            "genero": {
                required: true
            },
            "comentarios": {
                required: true
            }
        },
        messages: {

            "nombre": "Enter a valid name",
            "email": "Enter a valid E-Mail",
            "sexo": "Select an option",
            "comentarios": "Enter a valid text"

        },
            submitHandler: function (form){

                $.ajax({
                    url:form.action,
                    type:form.method,
                    data:$(form).serialize(),
                    beforeSend:function(){
                        $('.respuesta_form').html('Wait for it, dude!')
                    },
                    success :function (response){
                        console.log(response)
                        $('.respuesta_form').html('Gracias ' + response.nombre + ' por tu mensaje')
                    }
                })

            }


    })

    const loadLeads = () => {
        $.ajax({

            url: 'https://prog-3-leads-api-rest.vercel.app/leads',
            type: 'GET',
            success: function (response) {

                $('.listado').html('');
                response.forEach(element =>{

                    $('.listado').append('<li>' + element.nombre + ' - ' + element.sexo + ' - ' + element.comentarios + '</li>')

                });

            }

        })
    }

    loadLeads();
});
