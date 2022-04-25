$(document).ready(function(){
    var i = 1;
    $("#btn2").click(function(){
        $("#myModal").modal();
    });
    function kiemtrahoten(){
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#Name").val()== ""){
            $("#Name").html("khong duoc de trong");
            return false;
        }
        if(!mauKT.test($("#Name").val())){
            $("#Name").html("Ki tu dau phai viet hoa va khong dung so");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemtrahoten);
    function kiemtraCMND(){
        var mauKT = /^d{9}$/;
        if($("#CMND").val()== ""){
            $("#tbCMND").html("khong duoc de trong");
            return false;
        }
        if(!mauKT.test($("#CMND").val())){
            $("#tbCMND").html("CMND chi gom so");
            return true;
        }
        $("#tbCMND").html("*");
        return true;
    }
    $("#CMND").blur(kiemtraCMND);
    function kiemtraQQ(){
        var mauKT = /([A-Z]{1}[a-z]+)((s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#QQ").val()== ""){
            $("#tbQQ").html("khong duoc de trong");
            return false;
        }
        if(!mauKT.test($("#QQ").val())){
            $("#tbQQ").html("Phai viet chu in hoa");
            return true;
        }
        $("#tbQQ").html("*");
        return true;
    }
    $("#QQ").blur(kiemtraQQ);
    function kiemtraSDT(){
        var mauKT = /^0\d{2}-\d{3}-\d{4}$/;
        if($("#SDT").val()== ""){
            $("#tbSDT").html("khong duoc de trong");
            return false;
        }
        if(!mauKT.test($("#SDT").val())){
            $("#tbSDT").html("So dien thoai phai o dang 0xx-xxx-xxxx");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemtraSDT);
    function kiemtraEmail(){
        var mauKT = /([A-Za-z]{1,}@[A-Za-z]{1,}.com)$/;
        if($("#Email").val()== ""){
            $("#tbEmail").html("khong duoc de trong");
            return false;
        }
        if(!mauKT.test($("#SDT").val())){
            $("#tbEmail").html("Nhap dung theo dia chi @...com");
            return true;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("#Email").blur(kiemtraEmail);
    $("#Save").click(function(){
        if(kiemtrahoten== true && kiemtraCMND == true && kiemtraQQ == true && kiemtraSDT ==true && kiemtraEmail == true){
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val()+ "</th>";
            row += "<th>" + $("#CMND").val()+ "</th>";
            row += "<th>" + $("#QQ").val()+ "</th>";
            row += "<th>" + $("#Email").val()+ "</th;>"
            row += "<th>" + $("#SDT").val()+ "</th>";
            row += "<th>" + $("#ADD").val()+ "</th>";
            $("#danhsach").append(row);
            $("#myModal").modal("hide");
        }
    })
    })