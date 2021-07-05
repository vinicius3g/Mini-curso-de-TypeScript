//Type Alias 
type Uid = number | string

type Plataform = 'Windows' | 'Linux' | 'Mac Os' | 'ios'

const logDetails = (uid: Uid | string, item: string) => {
    console.log(`Aproduct with ${uid} has title ${item}`);
}

const logInfo = (uid: Uid | string, user: string) => {
    console.log(`Aproduct with ${uid} has title ${user}`);

}

const renderPlataform = (plataform: Plataform) => {
    return plataform
}

renderPlataform('ios')

logDetails(11, 'test')
logDetails('11', 'test')

logInfo(22, 'etst')
logInfo('22', 'etst')