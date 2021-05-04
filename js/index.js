
tinymce.init({
    selector: '#detalle-txt',
    height: 300,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
const reos = [];  
    const cargarTabla = ()=>{
        let tbody = document.querySelector("#tbody-tabla");
        tbody.innerHTML = "";
        for (let i=0; i< reos.length; ++i){
            let p = reos[i];
            let tr = document.createElement("tr");
            let tdNRO = document.createElement ;
            let tdNombre = document.createElement("td");
            let tdDetalle = document.createElement("td");
            let tdGravedad = document.createElement("td");
            let tdCiudad = document.createElement("td");

            tdNRO.innerText = i + 1;
            tdNombre.innerText = p.nombre;
            tdDetalle.innerHTML = p.detalle;
            tdGravedad = p.gravedad;
            tdCiudad = p.ciudad;

            tr.appendChild(tdNombre);
            tr.appendChild(tdDetalle);

            let Gravedad = document.createElement("i");
            if(tdGravedad >= 0 && tdGravedad <= 3){
                Gravedad.classList.add("fas", "fa-leaf", "text-success", "fa-3x");
            }else if(tdGravedad >= 4 && tdGravedad <= 6){
                Gravedad.classList.add("fas", "fa-fire", "text-danger", "fa-3x");
            }else if(tdGravedad >= 7 && tdGravedad <= 15){
                Gravedad.classList.add("fas", "fa-bolt", "text-warning", "fa-3x");
            }else if (tdGravedad > 15) {
                Gravedad.classList.add("fas", "fa-bullseye", "text-info", "fa-3x");
            }
            tr.appendChild(Gravedad);

            let Ciudad = document.createElement("text");
            if(tdCiudad == 1){
                Ciudad.innerText = "vina del mar";
            }else if(tdCiudad == 2){
                Ciudad.innerText = "quilpue";
            }else if(tdCiudad == 3){
                Ciudad.innerText = "santiago";
            }else if (tdCiudad == 4){
                Ciudad.innerText = "con-con";
            }

            tr.appendChild(Ciudad);

            tbody.appendChild(tr);
            }
        };

    document.querySelector("#registrar-btn").addEventListener("click", ()=>{
        let nombre = document.querySelector("#nombre-txt").value;
        let apellido = document.querySelector("#apellido-txt").value;
        let detalle = tinymce.get("detalle-txt").getContent ();
        let gravedad = document.querySelector("#crimenes-num").value;
        let ciudad = document.querySelector("#ciudad-select").value;
        
        let reo = {};

        reo.nombre = nombre + " " + apellido;
        reo.detalle = detalle;
        reo.gravedad = gravedad;
        reo.ciudad = ciudad;
        reos.push(reo);
        cargarTabla();
        Swal.fire("resultado exitoso", "", "info");  
    });