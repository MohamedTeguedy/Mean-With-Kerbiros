import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch:string) {
   let result ="";
   for (let i = 0; i < ch.length; i++) {
    result=ch[i]+result
    
   }
   return result
   
  }

}
