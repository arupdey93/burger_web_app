export const saveData = (email,password)=>{
  fetch("https://burger-app-901b7.firebaseio.com/userDatabase.json", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      newUserEmail:email,
      newUserPassword:password}),
  })
} 