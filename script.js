const startButton = document.querySelector(".start")
const stopButton = document.querySelector(".stop")
const resetButton = document.querySelector(".reset")
const hours = document.getElementById ("hrs")
const minutes = document.getElementById ("mins")
const seconds = document.getElementById ("secs")
const miliseconds = document.getElementById ("milisecs")
let s = 0
let mins = 0
let hrs = 0
let interval = null

startButton.addEventListener("click",start)
stopButton.addEventListener("click",stop)
resetButton.addEventListener("click",reset)

function timer(){
    s++
   
    
    let secs = s%60
    
   
    
    
    seconds.textContent = `${secs}`
    minutes.textContent =`${mins}`
    hours.textContent =  `${hrs}`
    
    if (s<10){
        seconds.textContent = `0${secs}`
    }
    if(mins<10){
        minutes.textContent = `0${mins}`
    }
    //60 pya ny loh 0 pyn htr ya dl
    if(s > 59)
   {    
    s = 0
        

        
        seconds.textContent = "00"
        

    }
    // 1s saw ny loh
    if(s>58){
        mins++
    }
   // minutes 60 pya ny
    if(mins > 59 && s==59){
       mins = 0
         hrs++
        
       
    }
  
    
   
    if(hrs<9)
    {
        hours.textContent =`0${hrs}`
    }
   
    
    

}
function start(){

    clearInterval(interval)
    //start ko spam ma loke nai ag
    
    interval = setInterval(timer,1000)
    


}
function stop(){
   clearInterval(interval)
}

function reset(){
   clearInterval(interval)
   
    seconds.textContent = '00'
    minutes.textContent ='00'
    hours.textContent =  '00'
     s = 0
 mins = 0
 hrs = 0
 interval = null

    

}



