enum SIZEEnum {
    'Small',
    'Medium',
    'Large'
}

console.log(SIZEEnum.Large)

console.log(SIZEEnum[0])
console.log(SIZEEnum[5]) //エラーがでない
//即時関数になってしまう
