$(document).ready(function(){

    //CADASTRAR PROFESSORES
    $("#cadastrarProfessor").click(function(e) {

        var prof = {
            nomeProfessor: $("#nomeProfessor").val() 
        };

        e.preventDefault();
           
        $.ajax({
            url: 'http://localhost:8080/professor', 
            type : 'post',
            dataType : 'json',
            contentType: 'application/json',
            data: JSON.stringify(prof),
            success : function(result) {
                console.log(result);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);   
            }
        })
    });

    // CADASTRAR ORIENTAÇÃO
    $("#cadastrarOrientacao").click(function(e){
        e.preventDefault();

        var ori = {
            "descricaoOrientacao": $("#descricaoOrientacao").val() ,
            "orientadoOrientacao": $("#orientadoOrientacao").val() ,
            "professor": {
                "idProfessor": $("#selectProfessor option:selected").val()
            }
        };


        $.ajax({
            url: 'http://localhost:8080/orientacao',  
            type : 'post',
            dataType : 'json', 
            contentType: 'application/json',
            data: JSON.stringify(ori),
            success : function(result) {
                
            },
            error: function(xhr, resp, text) {
                 
            }
        })
    });

    // LISTAGEM
    $(".js-list").click(function(){
        $.ajax({
            url: 'http://localhost:8080/orientacao?nomeProfessor=' + $("#inputNome").val(), // url where to submit the request
            type : "get",
            success : function(result) {
                if (!!result.content.length) {
                    var data = result.content;
                    var ul = $('#listagem-orientacoes');
                    var _htmlOptions = "";
                    ul.find('li').remove();
                    $.each(data, function (i, d) {
                        _htmlOptions += 
                        "<li>" + d.professor.nomeProfessor
                            + "<ul>"
                                +"<li>Descrição da orientação:" + d.descricaoOrientacao + "</li>" 
                                + "<li>Orientado:" + d.orientadoOrientacao + "</li>"
                            + "</ul>"                    
                        + "</li>";
                    });
                    ul.append(_htmlOptions);
                }
            },
            error: function(xhr, resp, text) {
                 
            }
        });
    });

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

    $("#cadastrarUsuario").click(function(e){
        var usuario = {
            "nomeUsuario": $("#nomeUsuario").val(),
            "emailUsuario": $("#emailUsuario").val(),
            "senhaUsuario": $("#senhaUsuario").val()
        };

        e.preventDefault();
           
        $.ajax({
            url: 'http://localhost:8080/usuario', 
            type : 'post',
            dataType : 'json',
            contentType: 'application/json',
            data: JSON.stringify(usuario),
            success : function(result) {
                console.log(result);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);   
            }
        })
    });

    $(".js-cadastro-orientacao").ready(function(e){
        // e.preventDefault();
        $.ajax({
            type: "get",
            url: "http://localhost:8080/professor",

            success: function (obj) {
                if (obj != null) {
                    var data = obj;
                    var selectbox = $('#selectProfessor');
                    var _htmlOptions;
                    selectbox.find('option').remove();
                    $.each(data, function (i, d) {
                        _htmlOptions += "<option value='"+d.idProfessor+"'>"+d.nomeProfessor+"</option>";
                    });
                    selectbox.append(_htmlOptions);
                }
            }
        });   
    });


});