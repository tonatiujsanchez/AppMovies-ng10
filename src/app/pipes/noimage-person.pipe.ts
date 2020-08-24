import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagePerson'
})
export class NoimagePersonPipe implements PipeTransform {

  transform( person: any ): string {
    
    if( !person.profile_path ){

      if( person.gender === 1 ){
        return './assets/img/female.jpg';
      }else{
        return './assets/img/male.jpg';
      }

    }else{
      return 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+person.profile_path
    }
  }

}
