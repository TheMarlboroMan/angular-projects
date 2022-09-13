//These two are actually new to me... One is the annotation and the other the interface.
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
//That's right, no dashes... Inconsistent modern piece of crap...
//	name: 'deform-user-email'
	name: 'deformUserEmail'
})

//Funny thing, you really need the interface here. How consistent with other parts of the platform...
export class DeformUserEmailPipe implements PipeTransform{

	//This will just split the email in two and return the second part as "x".
	public transform(input:string):string {

		if(input.indexOf('@')==-1) return "Invalid email";
		
		let parts=input.split('@');
		if(parts.length!=2) return "Invalid email";

		return parts[0]+"@"+"x".repeat(parts[1].length);
	}
};
