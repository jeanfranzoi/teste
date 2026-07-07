let popUpWin = null;

function abrirJanela(url,left,top,width,height){
    if(popUpWin && !popUpWin.closed){
        popUpWin.close();
    }

    popUpWin = window.open(
        url,
        "popUpWin",
        "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+width+",height="+height+",left="+left+",top="+top
    );
}

// ======================
// eventos automáticos
// ======================
document.addEventListener("DOMContentLoaded", function () {

// ----------------------
// botão fechar janela
// ----------------------
    const botoesFechar = document.querySelectorAll(".btn-fechar");
    botoesFechar.forEach(btn => {
        btn.addEventListener("click", function(){
            window.close();
        });
    });

// ----------------------
// botão fechar janela
// ----------------------

const botoesVoltar = document.querySelectorAll(".btn-voltar");
    botoesVoltar.forEach(btn => {
        btn.addEventListener("click", function(){
            history.back();
        });
    });

