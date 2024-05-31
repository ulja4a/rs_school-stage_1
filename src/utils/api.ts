const API='ws://localhost:4000'
const MSG=['Sure','Great!','Right','Yup','Cool!']
const s=new WebSocket(API);
s.addEventListener('open',()=>{s.send(JSON.stringify({id:'1',type:'USER_LOGIN',payload:{user:{id:'1',login:'Chat Bot',password:'123'}}}))});
s.addEventListener('message',({data})=>{
const {type,payload}=JSON.parse(data)
if(type=='MSG_SEND'&&payload.message.from!='Chat Bot')s.send(JSON.stringify({id:'2',type:'MSG_SEND',payload:{message:{to:payload.message.from,text:MSG[~~(Math.random()*MSG.length)]}}}));
});