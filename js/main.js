$(document).ready(function () {
const list = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
console.log(list);
// Milestone 1 :Partendo dalla struttura dati che troviamo sotto, mostriamo in pagina tutte le icone disponibili come da layout.

//01.1 identifichiamo dove andranno inserite le icone
const container = $('.icons_container');

// 01.2 andiamo a creare le nostre icone coun un ciclo for all'interno dell'array(vedi riga 132 per funzionamento, riga 139 per funzione)

// printIcons(list,container);   s

// _______________________________________________
// Milestone 2 : Coloriamo le icone per tipo

// 02.1 creo un array con i TYPES di icone
const typeArray = [];
getIconTypes(list,typeArray);                                 //riga 158
console.log(typeArray)

// 02.2 creo un array COLORI
const colorsTypes =[
	'blue',
	'orange',
	'green'
];
console.log(colorsTypes);

// 02.3  aggiungo proprietà color a icone

giveIconColorByTypes(list,typeArray,colorsTypes);           //riga 168
console.log(list);


printIcons(list,container);
});


// _______________________________________________________________________________
//FUNCTIONS

// 01.2 FUNCTION PER STAMPARE ICONE
function printIcons(array,container){
	array.forEach((icon) =>{
		// definisco la mia icona
		const {name,prefix,family,color} = icon;
		
		// blocco icona da inserire all'interno dell'html
		const iconHTML =`
		<div class="box-icon">
			<i class="${family} ${prefix}${name}" style="color:${color}"></i>
			<div class="icon-title">${name}</div>
		</div>
		`;
	
		container.append(iconHTML);
	})

}

function getIconTypes(array,destinationArray){
	array.forEach((icon)=>{
		const {type} = icon;
		if(!destinationArray.includes(type)){
			destinationArray.push(type);
		}
	})

}

function giveIconColorByTypes(array,typeArray,colorArray){
	array.forEach((icon) =>{
		for (let i = 0; i < array.length; i++){
			if (icon.type === typeArray[i]){
				icon.color = colorArray[i]
			}
		}	
	})
}
