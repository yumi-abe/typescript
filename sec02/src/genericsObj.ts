type genObject<T, U> = {
    name: string,
    age: number,
    memo: T,
    value: U
}

const soccerMember: genObject<string, number> = {
    name: '三苫',
    age: 22,
    memo: 'test',
    value: 123
}

const basketMember: genObject<number, string> = {
    name: '桜木',
    age: 22,
    memo: 456,
    value: 'test'
}