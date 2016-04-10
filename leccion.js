
var estudiante=[
	{Nombre: "Erika",Genero: "Femenino",Edad: 23,Notas: [10,10,9],Ciudad:"Salinas",Lenguaje_Favorito:"HTML", Esta_Trabajando:true},
	{Nombre: "Roxana",Genero: "Femenino",Edad:45,Notas: [10,8,10],Ciudad:"Salinas",Lenguaje_Favorito:"C++", Esta_Trabajando:true},
	{Nombre: "Jhonny",Genero: "Masculino",Edad:28,Notas: [9,9,10],Ciudad:"La Libertad",Lenguaje_Favorito:"HTML", Esta_Trabajando:false},
	{Nombre: "Hugo",Genero: "Masculino",Edad:24,Notas: [10,9,8],Ciudad:"La Libertad",Lenguaje_Favorito:"C#", Esta_Trabajando:true},
	{Nombre: "Lily",Genero: "Femenino",Edad:24,Notas: [10,9,8],Ciudad:"La Libertad",Lenguaje_Favorito:"C#", Esta_Trabajando:true}
	];

function printList(lista,ubicacion)
{
	var listHTML='';
	if(ubicacion<0){
		for(var i=0; i<lista.length; i++){
		listHTML +=  crearLista (lista , i);
	}
	else
	{
		listHTML += crearLista (lista , ubicacion);
	}
	printHtml(listHTML , 'info-estudiante');

}

function crearLista(lista,ubicacion){
	listHTML='';
	listHTML += '<ul>';
	listHTML += '<li> Nombre: ' + lista[ubicacion].Nombre + '</li>';
	listHTML += '<li> Genero: ' + lista[ubicacion].Genero + '</li>';
	listHTML += '<li> Edad:   ' + lista[ubicacion].Edad + '</li>';
	listHTML += '<li> Notas:  ' + lista[ubicacion].Notas[0] +',' + lista[ubicacion].Notas[1] + ',' +lista[ubicacion].Notas[2]'</li>';
	listHTML += '<li> Lenguaje_Favorito: ' + lista[ubicacion].Lenguaje_Favorito + '</li>';
	listHTML += '<li> Esta_Trabajando: ' + lista[ubicacion].Esta_Trabajando + '</li>';
	listHTML += '</ul>'
	return listHTML;
}


function printHtml(mensaje)
{
	//remplazando por getelementaryID para tomar el nodo(object)
	var outputDiv =document.getElementById('output');
  	outputDiv.innerHTML = mensaje;

}
function buscaEstudiante(lista.Nombre){
	var encontrado ='-1';
	for(var i=0;i<lista.length; i++)
	{
       encontrado=i;
	}
}
return encontrado;

/*BUSQUEDA DE ESTUDIOANTE EN REGISTRO*/

while(true){
	var busqueda = prompt("Ingrese una opcion: ** q= Salir ** l= listar ** Ingrese el estudiante  a consultar: ");
	if(busqueda != "" && busqueda = null);
	if (busqueda.toLowerCase()=='q'){
		alert("Has finalizado la busqueda");
		break;
	}
	else if(busqueda.toLowerCase()=='l'){
	
			printList(estudiante , -1);	
	}
	else{
		var ubicacion=buscaEstudiante(estudiante,busqueda.toLowerCase());
		if(ubicacion>=0){
			printList(estudiante,ubicacion);
		}
		else
		{
			alert ("El Estudiante no existe en el registro");
		}
	}
	else
	{
		alert ("El dato no es correcto, ingrese de nuevo el nombre");
	}