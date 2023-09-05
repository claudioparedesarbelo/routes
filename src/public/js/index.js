
  let eight = document.getElementById("8"); 
  eight.onclick = limit8; 
    
  function limit8(evento) {
    const url = '?limit=8'
    window.location.href = url
  }


  let twelve = document.getElementById("12"); 
  twelve.onclick = limit12; 
    
  function limit12(evento) {
    const url = '?limit=12'
    window.location.href = url
  }


  let sixteen = document.getElementById("16"); 
  sixteen.onclick = limit16; 
    
  function limit16(evento) {
    const url = '?limit=16'
    window.location.href = url
  }


  let pageOne = document.getElementById("p1"); 
  pageOne.onclick = page1; 
    
  function page1(evento) {
    const url = '?page=1'
    window.location.href = url
  }

  let pageTwo = document.getElementById("p2"); 
  pageTwo.onclick = page2; 
    
  function page2(evento) {
    const url = '?page=2'
    window.location.href = url
  }

  let pageThree = document.getElementById("p1"); 
  pageThree.onclick = page3; 
    
  function page3(evento) {
    const url = '?page=3'
    window.location.href = url
  }

  

