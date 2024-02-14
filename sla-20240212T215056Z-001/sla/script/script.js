img1();
var configuracao = false;
var ir_img1;
var ir_img2;
var ir_img3;
var ir_img4;
    function img1(){
        document.getElementById("img4").style="background-color: #DDDDDD;";
        document.getElementById("img2").style="background-color: #DDDDDD;";
        document.getElementById("img3").style="background-color: #DDDDDD;";

        document.getElementById("imagens").style="background-color: #ff0000;";
        document.getElementById("img1").style="background-color: #0000ff;";
        ir_img2 = setTimeout(img2, 2300);
    }
    function img2(){
        document.getElementById("img1").style="background-color: #DDDDDD;";
        document.getElementById("img3").style="background-color: #DDDDDD;";
        document.getElementById("img4").style="background-color: #DDDDDD;";

        document.getElementById("imagens").style="background-color: #00ff00;";
        document.getElementById("img2").style="background-color: #0000ff;";
        ir_img3 = setTimeout(img3, 2300);
    }
    function img3(){
        document.getElementById("img2").style="background-color: #DDDDDD;";
        document.getElementById("img1").style="background-color: #DDDDDD;";
        document.getElementById("img4").style="background-color: #DDDDDD;";

        document.getElementById("imagens").style="background-color: #0000ff;";
        document.getElementById("img3").style="background-color: #0000ff;";
        ir_img4 = setTimeout(img4, 2300);
    }
    function img4(){
        document.getElementById("img3").style="background-color: #DDDDDD;";
        document.getElementById("img1").style="background-color: #DDDDDD;";
        document.getElementById("img2").style="background-color: #DDDDDD;";


        document.getElementById("imagens").style="background-color: #000000;";
        document.getElementById("img4").style="background-color: #0000ff;";
        ir_img1 = setTimeout(img1, 2300);
    }

    function config(){
        if(configuracao == false){
            document.getElementById("config").style="width: 175px; right: 0px;";
            configuracao = true;
        }
        else{
            document.getElementById("config").style="width: 0px; ";
            configuracao = false;
        }
        
    }

    window.addEventListener('blur', function(){
        document.title="não nos deixe :'(";
    });
    window.addEventListener('focus', function(){
        document.title="sobre o nenem";
    });

    function click_img1(){
        clearTimeout(ir_img1);
        clearTimeout(ir_img2);
        clearTimeout(ir_img3);
        clearTimeout(ir_img4);

        img1();
    }
    function click_img2(){
        clearTimeout(ir_img1);
        clearTimeout(ir_img2);
        clearTimeout(ir_img3);
        clearTimeout(ir_img4);

        img2();
    }
    function click_img3(){
        clearTimeout(ir_img1);
        clearTimeout(ir_img2);
        clearTimeout(ir_img3);
        clearTimeout(ir_img4);

        img3();
    }
    function click_img4(){
        clearTimeout(ir_img1);
        clearTimeout(ir_img2);
        clearTimeout(ir_img3);
        clearTimeout(ir_img4);

        img4();
    }