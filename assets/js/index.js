const f=document.querySelector('#firstValue');
const s=document.querySelector('#secondValue');
const mathoper=document.querySelector('#op');
const di=document.createElement('div')
document.body.appendChild(di)
function calculate(){
    class mathOperations{
        constructor(firstvalue,secondvalue,operation){
            this.firstvalue=firstvalue
            this.secondvalue=secondvalue
            this.operation=operation
        }
    }
    const Operations=new mathOperations(f.value,s.value,mathoper.value)
    switch(mathoper.value){
        case "+":
            let t=parseFloat(f.value)+parseFloat(s.value)
            di.innerHTML=t
            console.log('Operation is :'+ Operations.firstvalue+ Operations.operation+ Operations.secondvalue)
            break
        case "-":
            let m=parseFloat(f.value)-parseFloat(s.value)
            di.innerHTML=m
            console.log('Operation is :'+ Operations.firstvalue+ Operations.operation+ Operations.secondvalue)
            break
        case "*":
            let mu=parseFloat(f.value)*parseFloat(s.value)         
            di.innerHTML=mu
            console.log('Operation is :'+ Operations.firstvalue+ Operations.operation+ Operations.secondvalue)
            break
        case "/":
            let divide=parseFloat(f.value)/parseFloat(s.value)
            di.innerHTML=divide
            console.log('Operation is :'+ Operations.firstvalue+ Operations.operation+ Operations.secondvalue)
            break
        case "sin(x+y)":
            let sinus=Math.sin(parseFloat(f.value)+parseFloat(s.value))
            di.innerHTML=sinus
            console.log('Operation is : sin('+ Operations.firstvalue+'+'+ Operations.secondvalue+')')
            break
        default:
         let p=parseFloat(f.value)**parseFloat(s.value)
         di.innerHTML=p
         console.log('Operation is :'+ Operations.firstvalue+ Operations.operation+ Operations.secondvalue)
        break
    }
}



