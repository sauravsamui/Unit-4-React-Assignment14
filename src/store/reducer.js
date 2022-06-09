
export const reducer =(state=0,{type,payload})=>{
   if(state=="error"){
      state=0
   }
   payload=Number(payload)
   switch(type){
       case "add":{
            return state+1
       }
       case "substract":{
         if(state>0){
            return state-1
         }
         return state
       }
       case "addValue":{
          return (state+Number(payload))
       }
       case "substractValue":{
          return (state-Number(payload))
       }
       case "multiplyValue":{
          
          return (state*Number(payload))
       }
       case "divideValue":{
          if(payload>0){
             return (state/payload)
          }else{
             return "error"
          }
       }
      default: return state
   }
  
}