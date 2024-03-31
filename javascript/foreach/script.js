arr = ['CSE', 'IT', 'ECE', 'EEE']

arr.forEach(val =>{
   let opt = document.createElement('option')
   opt.innerHTML = val
//    opt.value=val
   document.getElementById('branch').appendChild(opt)

})