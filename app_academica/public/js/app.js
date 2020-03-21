var $ = el => document.querySelector(el);
document.addEventListener("DOMContentLoaded",event=>{
    let mostrarVista = $("[class*='mostrar-alumnos']"),
     mostrardocente= $("[class*='mostrar-docentes']");
    mostrarVista.addEventListener('click',e=>{
        console.log(mostrarVista);
        
        e.stopPropagation();

        let modulo = e.target.dataset.modulo;
       // console.log(modulo);
        fetch('/app_academica/public/vistas/alumnos/alumnos.html').then( resp=>resp.text() ).then(resp=>{
            $(`#vista-${modulo}`).innerHTML = resp;
         
          
            
            let btnCerrar = $(".close");
            btnCerrar.addEventListener("click",event=>{
                $(`#vista-${modulo}`).innerHTML = "";
            });

            let cuerpo = $("body"),
                script = document.createElement("script");
            script.src = `/app_academica/public/vistas/alumnos/jsAlumnos/${modulo}.js`;
            cuerpo.appendChild(script);
        });
       
    });
    mostrardocente.addEventListener('click',e=>{
        e.stopPropagation();
        let modulo = e.target.dataset.modulo;
        console.log(modulo);
        fetch('/app_academica/public/vistas/Docente/docentes.html').then( resp=>resp.text() ).then(resp=>{
            $(`#vista-${modulo}`).innerHTML = resp;
          
            
            let btnCerrar = $(".close");
            btnCerrar.addEventListener("click",event=>{
                $(`#vista-${modulo}`).innerHTML = "";
            });

            let cuerpo = $("body"),
                script = document.createElement("script");
            script.src = `/app_academica/public/vistas/Docente/Docentejs/${modulo}.js`;
            cuerpo.appendChild(script);
        });

    });
}); 