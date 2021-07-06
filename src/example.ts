function expo2(amount: number) {
    return amount ** 2
}

function logger(msg: string): void {
    console.log(msg)
}

console.log(expo2(1000))
// console.log(expo2('1000')) // Error

const flag: boolean = false
let decimal: number = 123
let hex: number = 0xfff
let bin: number = 0b000
let octal: number = 0o123

let str: string = 'aaa'
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

let list3: Array<any> = [1, 'hoge', {}]

let unko: Array<unknown> = ['1']
// unko[0].toFixed(1) // Error

// intersection type: 複数の型を1つに統合
type Dog = {
    tail: Tail
    bark: () => void
}
type Bird = {
    wind: Tail
    fly: () => void
}
type Tail = {
    length: number
}

type Kimera = Dog & Bird

let kimera: Kimera

// Union Type 複数の型を許容
let val: boolean | number | string
val = false
val = 1
val = 'hoge'

let nullableString: string | null
nullableString = null
nullableString = 'notNull'

// Literal Type
let myName: 'Taro'
myName = 'Taro'
// myName = 'Jiro' // Error

// typeof 他のオブジェクトの型を使える
let myObject = { foo: 'foo' }
let anotherObject: typeof myObject = { foo: 'bar' }
anotherObject['foo'] = 'foofoo'
// anotherObject['bar'] = 'barbar' // Error

// assertion
let someValue: any = 'this is a string'
let strLen: number = (<string>someValue).length
let strLen2: number = (someValue as string).length

// Class
class Creature {
    numberOfHands: number
    numberOfFeet: number

    constructor(hands: number, feet: number) {
        this.numberOfHands = hands
        this.numberOfFeet = feet
    }
}
const creature = new Creature(0, 4)

class Cat extends Creature {
    mew: string

    constructor(mew: string) {
        super(0, 4)
        this.mew = mew
    }
}

const cat = new Cat('mewmew')

// Promiseの型推論
// 暗黙的に書かれている場合は Promise<{}> という推論になる
// アノテーションで指定する
function wait(duration: number): Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve(`${duration} ms passed`), duration)
    })
}

wait(1000).then(res => {
    console.log(res)
})

async function queue() {
    const msg = await wait(1000)
    return msg
}

queue()

// JSONの型推論
import usersJson from './users.json'
type Users = typeof usersJson

// 関数の引数をオプションにする、デフォルト値を入れる
function greet(name?: string, gender = 'Mr.') {
    if (name === undefined) return 'Hello'
    return `Hello ${gender} ${name.toUpperCase()}`
}

console.log(greet())
console.log(greet('Taro'))

// インデックスシグネチャ: 任意のプロパティを追加することができる
type User = {
    name: string
    [k: string]: any // 全てのプロパティがこの型と互換性がある必要がある(この例ではname)
}

const userA: User = {
    name: 'Taro',
    age: 26,
    height: 170
}
const x = userA.name
const y = userA.age

// 指定可能なプロパティを制限
type Question = 'exercise_habits' | 'time_of_sleeping'
type Answer = 'mighty' | 'lot' | 'few' | 'entirely'
type Client = {
    name: string
    enquete: { [k in Question]?: Answer } // in を使う場合は ? を付与できる
}

const clientA: Client = {
    name: 'Jiro',
    enquete: {
        exercise_habits: 'entirely',
        time_of_sleeping: 'few'
    }
}

// type guards
/// typeof

function reset(value: number | string | boolean) {
    const v = value

    if (typeof v === 'number') {
        const v1 = v
        return 0
    }
    if (typeof v === 'string') {
        const v1 = v
        return ''
    }
    if (typeof v === 'boolean') {
        const v1 = v
        return false
    }
}

reset(1)
reset('str')
reset(true)

/// in
type A = { gender: string }
type B = A & { name: string }
type C = A & { age: number; graduate: string }

function judgeUserType(user: B | C) {
    if ('gender' in user) {
        const u0 = user
        console.log('user type is B | C')
    }
    if ('name' in user) {
        const u1 = user
        console.log('user type is B')
        return
    }
    const u2 = user
    console.log('user type is C')
}

// Generics
interface Box<T> {
    value: T
}
const box1: Box<string> = { value: 'test' }
const box2: Box<number> = { value: 123 }

/// 初期型を指定
interface BoxStr<T = string> {
    value: T
}

const boxStr1: BoxStr = { value: 'string' }
const boxStr2: BoxStr<number> = { value: 123 }

/// 指定可能な型を制約
interface BoxExt<T extends string | number> {
    value: T
}

const boxExt1: BoxExt<string> = { value: 'test' }
const boxExt2: BoxExt<number> = { value: 123 }
// const boxExt3: BoxExt<boolean> = { value: true } // Error

// 関数のGenerics
function boxed<T>(props: T) {
    return { value: props }
}

const b0 = boxed('test')
const b1 = boxed(0)

const boxed2 = <T>(props: T) => ({ value: props })
const boxed3 = <T extends number>(props: T) => ({ value: props.toFixed(1) })

function pick<T, K extends keyof T>(props: T, key: K) {
    return props[key]
}

let obj = {
    name: 'Taro',
    amount: 0,
    flag: false
}

const value1 = pick(obj, 'name')
const value2 = pick(obj, 'amount')

// クラスのGenerics
class Person<T extends string> {
    name: T
    constructor(name: T) {
        this.name = name
    }
}
const person = new Person('Taro')
const personName = person.name

interface PersonProps {
    name: string
    age: number
    gender: 'male' | 'female' | 'other'
}
class PersonProp<T extends PersonProps> {
    name: T['name']
    age: T['age']
    gender: T['gender']

    constructor(props: T) {
        this.name = props.name
        this.age = props.age
        this.gender = props.gender
    }
}

const personProp = new PersonProp({
    name: 'Jiro',
    age: 28,
    gender: 'male'
})

// Conditional Types: 型の互換性を条件分岐にかけ、型推論を導出する型
// T extends: X ? Y : Z   => T型がX型と互換性があるときはY型、ないときはZ型
type IsString<T> = T extends string ? true : false
type X = IsString<'test'> // true
type Y = IsString<9> // false

interface Properties {
    name: string
    age: number
    flag: boolean
    walk: () => void
    jump: () => Promise<void>
}

type IsType<T, U> = {
    [K in keyof T]: T[K] extends U ? true : false
}

type IsString2 = IsType<Properties, string>
type IsNumber = IsType<Properties, number>
type IsBoolean = IsType<Properties, boolean>
type IsNotObject = IsType<Properties, object>

type Filter<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never
}[keyof T]

type StringKeys = Filter<Properties, string>
type FunctionKeys = Filter<Properties, Function>
type ReturnPromiseKeys = Filter<Properties, () => Promise<any>>

type StringKeys2<T> = Filter<T, string>
type FunctionKeys2<T> = Filter<T, Function>
type ReturnPromiseKeys2<T> = Filter<T, () => Promise<any>>

/// 組み込み型Pick型:もとのObject型から該当のプロパティのみを抽出したObject型を生成できる
type Strings = Pick<Properties, StringKeys2<Properties>>
type Functions = Pick<Properties, FunctionKeys2<Properties>>
type ReturnPromises = Pick<Properties, ReturnPromiseKeys2<Properties>>

// 部分的な型抽出
// 組み込みType ReturnType型と同じ型で挙動の確認
// Rにはgreeting()の返り値の型が入る
function greeting() {
    return 'Hello'
}
type Return<T> = T extends (...args: any[]) => infer U ? U : never
type R = Return<typeof greeting>
type R2 = ReturnType<typeof greeting>
type S = Return<string>
// type S2 = ReturnType<string> // Error
type V = Return<typeof logger>
type W = Return<typeof wait>

async function hello() {
    return 'Hello'
}

type ResolveArg<T> = T extends () => Promise<infer U> ? U : never
type XX = typeof greet // type XX = () => Promise<string>
type YY = ResolveArg<typeof greet> // type YY = string
