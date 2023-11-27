export function shuffle(a) {
  for(let i = a.length - 1; i > 0 ; i-- ) {
    const j = Math.floor(Math.random() * i)
    const temp = a[i]
    a[i] = a[j]
    a[j] = temp
  }
}

export function random_goes(n) {
  let a = [];
  for (let i = 0 ; i < n ; a[i] = i++);
  shuffle(a);
  return a;
}
  