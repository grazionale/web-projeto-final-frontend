$(document).ready(function(){

    //Professores
    $("#cadastrarProfessor").click(function(){
        alert("Cadastrar Professor");
            //console.log($("#formCadastroProfessor").serialize());
            //return false;

            //console.log("Oi");
        $.ajax({
            url: '', // url where to submit the request
            type : "POST",
            async   : true, // type of action POST || GET
            dataType : 'json', // data type
            data : $("#formCadastroProfessor").serialize(), // post data || get data
            success : function(result) {
                // you can see the result from the console
                // tab of the developer tools
                console.log(result);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
                 
            }
        })
    });


    // Listar

    $("#pesquisar").click(function(){
        alert("Pesquisar");

        $.ajax({
            url: '', // url where to submit the request
            type : "GET",
            async   : true, // type of action POST || GET
            dataType : 'json', // data type
            data : $("#formPesquisarProfessor").serialize(), // post data || get data
            success : function(result) {
                // you can see the result from the console
                // tab of the developer tools
                console.log(result);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
                 
            }
        })
    });

    $("#listarTudo").click(function(){
        alert("Listar Tudo");

        $.ajax({
            url: '', // url where to submit the request
            type : "GET",
            async   : true, // type of action POST || GET
            dataType : 'json', // data type
            data : $("#formListarProfessor").serialize(), // post data || get data
            success : function(result) {
                // you can see the result from the console
                // tab of the developer tools
                console.log(result);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
                 
            }
        })
    });

    //Orientacao

    $("#cadastrarOrientacao").click(function(){
        alert("Cadastrar Orientacao");

        $.ajax({
            url: '', // url where to submit the request
            type : "POST",
            async   : true, // type of action POST || GET
            dataType : 'json', // data type
            data : $("#formCadastrarOrientacao").serialize(), // post data || get data
            success : function(result) {
                // you can see the result from the console
                // tab of the developer tools
                console.log(result);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
                 
            }
        })
    });

        //Index - Login

        $("#logar").click(function(){
            alert("Logar");
    
            // $.ajax({
            //     url: '', // url where to submit the request
            //     type : "POST",
            //     async   : true, // type of action POST || GET
            //     dataType : 'json', // data type
            //     data : $("#login-form").serialize(), // post data || get data
            //     success : function(result) {
            //         // you can see the result from the console
            //         // tab of the developer tools
            //         console.log(result);
            //     },
            //     error: function(xhr, resp, text) {
            //         console.log(xhr, resp, text);
                     
            //     }
            // })
        });

        $("#cadastrar").click(function(){
            alert("Cadastrar");
    
            // $.ajax({
            //     url: '', // url where to submit the request
            //     type : "POST",
            //     async   : true, // type of action POST || GET
            //     dataType : 'json', // data type
            //     data : $("#register-form").serialize(), // post data || get data
            //     success : function(result) {
            //         // you can see the result from the console
            //         // tab of the developer tools
            //         console.log(result);
            //     },
            //     error: function(xhr, resp, text) {
            //         console.log(xhr, resp, text);
                     
            //     }
            // })
        });

});