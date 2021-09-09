let blinkText = document.getElementById("quote1").innerHTML;
let text = blinkText.split(" ");
let idx=0;
let emptyString = "";

setInterval(showTime, 1000);
        function showTime(){
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            am_pm = "AM";

            if(hour>12){
                hour-=12;
                am_pm="PM";
            }
            if(hour==0){
                hour=12;
                am_pm="AM";
            }

            hour = hour<10?"0"+hour:hour;
            min = min<10?"0"+min:min;
            sec = sec<10?"0"+sec:sec;

            let currentTime = hour+" : "+min+" : "+sec+" "+am_pm;
            document.querySelector("body > div.clock").innerHTML = currentTime;

            if(idx==text.length){ 
                idx=0;
                emptyString = "";
            }
            let displayText = text[idx];
            emptyString += " " + (displayText);

            idx++;
            document.getElementById("quote1").innerHTML = emptyString;


        }
        showTime();

