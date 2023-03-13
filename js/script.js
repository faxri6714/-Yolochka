//Первый треугольник
let g = ''
let h = '*'
do {
    g = g + h
    document.write(`<h1>${g}<h1>`)
} while (6 > g.length)

//второй треугольник
let p = ''
let k = '*****'
do {
    p = p + k
    // let tor = p.slice(p.length , 2)
    let top = p.replace('******', '')//убераю звезды с 2 строчкт
    let rot = top.replace('******', '')//убераю звезды с 3 строчкт
    let tor = rot.replace('******', '')//убераю звезды с 4 строчкт
    let opt = tor.replace('******', '')//убераю звезды с 5 строчкт
    document.write(`<h1>${opt}<h1>`)
} while (25 > p.length)

//3 треугольник
let w = ''
let q = '*'
do {
    w = w + q
    document.write(`<h1>${w}<h1>`)
} while (6 > w.length)

//4 треугольник
let e = ''
let r = '****'
do {
    e = e + r
    let d = e.slice(2, 4)//копирует у всех строчек по 2 звезд и все строчки становятся по 2 звезд
    document.write(`<h1>${d}<h1>`)
} while (20 > e.length);
