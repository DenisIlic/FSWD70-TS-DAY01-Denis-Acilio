const n1: Array<number>=[];
const n2: Array<number>=[];
var table: Array<number>=[];

// First loop to feed the array n1
for(var i = 1; i < 11; i++){ 
	n1.push(i);
	console.log( "n1" + n1);
};

// First loop to feed the array n1
for(var i = 1; i < 11; i++){ 
	n2.push(i);
	console.log("n2" + n2);
};

for(var i = 0; i < n1.length; i++){ 	
	for(var y = 0; y < 10; y++){
		table.push(n1[i]*n2[y]);

		var newp = document.createElement("p");
		var textnode = document.createTextNode(n1[i]+"x"+n2[y]+"="+n1[i]*n2[y]);
		newp.appendChild(textnode);
		document.body.appendChild(newp);	
		};	
};

console.log("table" + table);




