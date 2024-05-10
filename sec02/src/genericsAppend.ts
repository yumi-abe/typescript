type GenObjectE<T extends number | string> = {
    sample: T
}

const testObjE: GenObjectE<string> = {
    sample: '123'
}

type GenObjectD<T = string> = {
    sample: T
}

const testObjD: GenObjectD = {
    sample: '123'
}