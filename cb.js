

        
      function openForm() {
        document.getElementById("bodybox").style.display = "block";
      }
      
      function closeForm() {
        document.getElementById("bodybox").style.display = "none";
      }
      
      
      var messages = [], 
        lastUserMessage = "", 
        botMessage = "", 
        botName = 'Chatbot', 
        talking = true; 
      
      
      
      function chatbotResponse() {
        talking = true;
        botMessage = "I'm confused"; 
      
        if (lastUserMessage === 'hi' || lastUserMessage =='hello' || lastUserMessage =='hii') {
          const hi = ['hi','howdy','hello']
          botMessage = hi[Math.floor(Math.random()*(hi.length))];;
        }
      
        if (lastUserMessage === 'name') {
          botMessage = 'My name is ' + botName;
        }
      
      
        if (lastUserMessage === 'show me photos' || lastUserMessage =='pictures' || lastUserMessage =='photos' || lastUserMessage =='take me to gallery' || lastUserMessage =='photography'){
          var str="Photography";
          // var result = str.link("Photography.html");
          var result = window.location.replace("gallery.html");
          botMessage = "Taking you to  ' " +result+ " ' ";
        }
      
        if (lastUserMessage === 'show me recent articles' || lastUserMessage =='articles' || lastUserMessage =='blog posts'|| lastUserMessage =='blog') {
          var str="Read";
          var result = str.link("read.html");
          // var result = window.location.replace("read.html");
          botMessage = "Click on this link ' " +result+ " ' ";
          
        }
      
        if (lastUserMessage === 'take me home' || lastUserMessage =='home page' || lastUserMessage =='home') {
          var str="Home";
          var result = str.link("index.html");
          // var result = window.location.replace("index.html");
          botMessage = "Click on this link ' " +result+ " ' "; 
        }
      
      }
      
      
      
      
      function newEntry() {
         
        if (document.getElementById("chatbox").value != "") {
          
          lastUserMessage = document.getElementById("chatbox").value;
          
          document.getElementById("chatbox").value = "";
          
          messages.push(lastUserMessage);
          
          chatbotResponse();
          
          messages.push("<b>" + botName + ":</b> " + botMessage);
          
          Speech(botMessage);
          
          for (var i = 1; i < 8; i++) {
            if (messages[messages.length - i])
              document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
          }
        }
      }
      
      //text to Speech
      
      function Speech(say) {
        if ('speechSynthesis' in window && talking) {
          var utterance = new SpeechSynthesisUtterance(say);
          
          speechSynthesis.speak(utterance);
        }
      }
      
      document.onkeypress = keyPress;
      
      function keyPress(e) {
        var x = e || window.event;
        var key = (x.keyCode || x.which);
        if (key == 13 || key == 3) {
         
          newEntry();
        }
        if (key == 38) {
          console.log('hi')
            document.getElementById("chatbox").value = lastUserMessage;
        }
      }
      
      
      function placeHolder() {
        document.getElementById("chatbox").placeholder = "";
      }
      
        
      
      