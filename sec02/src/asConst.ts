const memberAC = {
    name: 'aaa',
    age: 123
} as const

// memberAC.name = 'iii' 上書きできない

const arrayAC = ['aaa', 'iii'] as const

// arrayAC.push('uuu') //追加できない