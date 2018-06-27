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
            headers: {
                "Authorization": "Basic " + window.localStorage.getItem("token")
            },
            success : function(result) {
                console.log(result);
            },
            error: function(xhr, resp, text) {
                window.localStorage.removeItem("token");
                window.location.replace("http://127.0.0.1:4200/");
            }
        })
    });

    $("#sair").click(function(e) {

        window.localStorage.removeItem("token");
        window.location.replace("http://127.0.0.1:4200/");
          
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
            headers: {
                "Authorization": "Basic " + window.localStorage.getItem("token")
            },
            success : function(result) {
                
            },
            error: function(xhr, resp, text) {
                window.localStorage.removeItem("token");
                window.location.replace("http://127.0.0.1:4200/");
            }
        })
    });

    // LISTAGEM
    $(".js-list").click(function(){
        $.ajax({
            url: 'http://localhost:8080/orientacao?nomeProfessor=' + $("#inputNome").val(), // url where to submit the request
            type : "get",
            headers: {
                "Authorization": "Basic " + window.localStorage.getItem("token")
            },
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
                window.localStorage.removeItem("token");
                window.location.replace("http://127.0.0.1:4200/"); 
            }
        });
    });

    $("#logar").click(function(e){

        e.preventDefault();
        
        var token = btoa($("#emailLogin").val() + ":" + $("#senhaLogin").val());
        window.localStorage.setItem("token", token);

        window.location.replace("http://127.0.0.1:4200/professores");

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

        if(window.location.href === 'http://127.0.0.1:4200' || window.location.href === 'http://127.0.0.1:4200/') {
            return;
        }

        $.ajax({
            type: "get",
            url: "http://localhost:8080/professor",
            headers: {
                "Authorization": "Basic " + window.localStorage.getItem("token")
            },
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
            },
            error: function(obj) {
                window.localStorage.removeItem("token");
                window.location.replace("http://127.0.0.1:4200/");
            }
        });   
    });


});