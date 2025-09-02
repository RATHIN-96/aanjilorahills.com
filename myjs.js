
      $(document).ready (function(){

        $('#fade').hover (function(){
          $('#out').slideDown(2000)
        })

      })

       document.getElementById('year').textContent = new Date().getFullYear();
       document.getElementById('year').style.color = "#00F704";