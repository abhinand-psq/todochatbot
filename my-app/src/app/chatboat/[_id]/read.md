 setfirst(a.candidates)
  try{
    fetch('/api/chatdata',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({text:a.candidates[0].content.parts[0].text})
    })
  }catch(e){
    throw new  Error(e)
  }