import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'titleCasing'
})
export class TitleCasingPipe implements PipeTransform {

    transform (value: string, args?: any) {
        var finalTitle = "";
        if (!value)
            return null;
        //break the title into words
        let words= value.split(" ");
        console.log(words);
        let propsitions = ["a", "an", "the", "of", "is", "an"];
        for (var _i=0; _i<words.length && words[_i]; _i++) {
            let word = words[_i];
            if(_i==0) {
                finalTitle = finalTitle.concat(this.titleCase(word), " ");
                //word = this.titleCase(word)
                //words[_i] = word
            }
            else if (!propsitions.includes(word.toLowerCase())) {
                finalTitle = finalTitle.concat(" ", this.titleCase(word));
                //word = this.titleCase(word)
                //words[_i] = word
            }
            else {
                finalTitle = finalTitle.concat(" ", word.toLowerCase());
                //word = word.toLowerCase())
                //words[_i] = word
            }
        }

        //return words.join(' ');
        return finalTitle;
    }

    isProposition (props: string[], word: string) {
        var isProp = false;
        props.forEach(element => {
            if (element == word){
                isProp = true;
            }
        });
        return isProp;
    }

    titleCase(str: string) {
        if(!str)
            return null;
        var finalString = str.substr(0,1).toUpperCase().concat(str.substr(1).toLowerCase());
        return finalString;
    } 

}