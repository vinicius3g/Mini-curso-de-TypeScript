// @Component
// @Selector
// @useState("dsada")

//Factory
function Logger(prefix: string) {
    return (target: any) => {
        console.log(`${prefix} - ${target}`)
    }
}

@Logger('awsome')
class Foo { }

//Class decorator

function setAPIVersion(apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

//decorator - anotar a versão da aPI
@setAPIVersion("1.0.0")
class API { }

console.log(new API())

//Property decorator

function minLength(length: number) {
    return (target: any, key: string) => {
        let val = target[key];

        const getter = () => val
        const setter = (value: string) => {
            if (value.length < length) {
                console.log(`Erro: voce não pode criar ${key} menor que  ${length}`)
            } else {
                val = value
            }
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
        // console.log(target)
        // console.log(key)
    }
}

class Movie {
    //validação se form menor que 5 - erro
    @minLength(5)
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

const movie = new Movie("Interestelar")

console.log(movie)
// Method decorator

function delay (ms: number) {
    return (target: any, key:string, descriptor: PropertyDescriptor) => {

        const  originalMethod = descriptor.value

        descriptor.value = function (...args:any)  {
            console.log(`esperando ${ms}`)

            setTimeout(() => {
                originalMethod.apply(this, args)
            }, ms)

            return descriptor;
        }
        //   console.log(target)
        //   console.log(key)
        //   console.log(descriptor)
    }
}



class Gretter {
    gretter: string;

    constructor(gretter: string) {
        this.gretter = gretter;
    }
    @delay(2000)
    //esperar um tempo e ai vai rodar o metodo 
    greet() {
        console.log(`hello ${this.gretter}`)
    }
}

const pessoinha = new Gretter('pessoinha')
pessoinha.greet();