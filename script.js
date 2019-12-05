const modal = document.getElementById('popup');
function showMobile(i) {
 document.querySelector(i).style.display = 'block';
 document.getElementById('result').innerHTML = `
      <div id = "mobile" >
          <img src = "/img/cross.svg" id="cross" alt = "cross" onclick='modal.style.display = "none"'
           height = "20px" width = "20px" />
          <h2> Confirmation </h2>
          <img src = "/img/device.svg" alt = "smartphone icon" height = "150px" width = "100px" />
          <h1> MOBILE </h1> 
          <p>
          Get notifications about new releases in our mobile app. 
          </p> 
          <div class = "price"> <sup> $ </sup><b>10</b ><span> /month </span > </div>
     </div>
     <button type = "button" class="button"> Confirm and pay </button>
        `;
}

function showDesktop(i) {
    document.querySelector(i).style.display = 'block';
    document.getElementById('result').innerHTML = `
    <div id="desktop" >
        <img src = "/img/cross.svg" id="cross" alt = "cross" onclick='modal.style.display = "none"'
           height = "20px" width = "20px" />
          <h2> Confirmation </h2>
        <img src="/img/laptop.svg" class="device" alt="laptop icon" height="150px" width="100px" />
       <h1>DESKTOP</h1>
       <p>
       Enjoy new episodes on your laptop in browser with our web service, 
       which supports all the platforms.
       </p>
       <div class="price"><sup>$</sup><b>15</b> <span>/month</span></div>
     </div>
     <button type = "button" class="button"> Confirm and pay </button>

    `
}

    function showTv(i) {
    document.querySelector(i).style.display = 'block';
    document.getElementById('result').innerHTML = `
    <div id="tv" >
        <img src = "/img/cross.svg" id="cross" alt = "cross" onclick='modal.style.display = "none"'
           height = "20px" width = "20px" />
          <h2> Confirmation </h2>
        <img src="/img/monitor.svg" class="device" alt="TV icon" height="150px" width="100px" />
       <h1>TV</h1>
       <p>Watch your favorite series at home on large screen with our TV 
       application.
       </p>
      <div class="price"><sup>$</sup><b>20</b> <span>/month</span></div>
     </div>
     <button type = "button" class="button"> Confirm and pay </button>
    `
    }
//Clear modal
window.onclick = function(event) {
    if (event.target == modal ) {
        modal.style.display = "none";
    }
}
