export function shuffle(numbers : number[]) : void {
    for(let i = numbers.length - 1; i > 0 ; i-- ) {
      const j = Math.floor(Math.random() * i)
      const temp = numbers[i]
      numbers[i] = numbers[j]
      numbers[j] = temp
    }
  }
  
  export function random_goes(num_modes : number) : number[] {
    let goes : number[] = [];
    for (let i = 0 ; i < num_modes ; goes.push( i++) );
    shuffle(goes);
    return goes;
  }