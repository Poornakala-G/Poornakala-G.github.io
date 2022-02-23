var names=new Array();
names[0]="Sneha";
names[1]="Jenny";
names[2]="John";
names[3]="jaron";
names[4]="Paul";
names[5]="Tommy";
names[6]="raashi";
names[7]="Violaa";
names[8]="Henry";
names[9]="junnu";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
} 