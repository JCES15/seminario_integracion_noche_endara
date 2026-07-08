const op : number = 1;

let producto : string = "";
let precio : number =0;
let resultado : number = 0;

switch(op) {
    
    case 1:
        producto = "Display";
        precio = 1500;
        break;
    case 2:
        producto = "Mesa";
        precio = 856;
        break;
    default :
        console.log("ERROR");
        break;
  
        
}
console.log(`opcion selecionada ${op}`);
console.log(producto);
console.log(precio);
console.log(`IVA= ${precio *1.15}`);
