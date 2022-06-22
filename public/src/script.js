
document.addEventListener("DOMContentLoaded",() => {
    const preloader = document.querySelector('.preloader');
const body = document.querySelector('body')
    setTimeout(() =>{
        setTimeout(() => {
            preloader.style.display="none" 
            body.style.overflow="auto"
        }, 1000);
        preloader.style.opacity="0"

            },2000)
            const user = document.getElementById('user')
const accaunt = document.getElementById('accaunt')
const exit = document.getElementById('exit')

user.addEventListener('click', () => {
    accaunt.style.animation="bounceIn 1s fardwards"
    accaunt.style.display="flex"

 
})

const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba"
  ];
  const MONTHS = [
    "Yanvar",
    "Fevral",
    "Mart",
    "April",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr"
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);



exit.addEventListener('click', () =>{
    accaunt.style.display="none"
})
const button = document.querySelector('#button');
button.addEventListener('click' ,() =>{
    let input = document.getElementById('input').value,
     url = `https://www.google.co.uz/search?q=${input}`
   
    if (input !== '') {
        window.open(url, "_self");
        input= '';
    }
} )









const msg = document.querySelector(".msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "4d8fb5b93d4af21d66a2948710284366";




  let city1 = "toshkent"



  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}&units=metric` ;
 


  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("div");
           li.classList.add("col-lg-3","col-md-6","col-sm-12","m-auto");
      const markup =`
      <div class="city" >
      <h2 class="city-name" data-name="${name}">
      <span>${name}</span>
     
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img style="margin:auto;" class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
  }">
    
    </figure>
      </div>
    `;
     
      li.innerHTML = markup;
 
      
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = rttot;
    });








  //ajax here
const sity2 = 'sirdaryo'
  const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${sity2}&appid=${apiKey}&units=metric` ;


  fetch(url2)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("div");
           li.classList.add("col-lg-3","col-md-6","col-sm-12","m-auto");
      const markup2 = `
      <div class="city" >
      <h2 class="city-name" data-name="${name}">
      <span>${name}</span>
     
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img style="margin:auto;" class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
  }">
    
    </figure>
      </div>
    `;
     
      li.innerHTML = markup2;
 
      
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = rttot;
    });



const city3 = 'samarqand'
  const url3 = `https://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${apiKey}&units=metric` ;


  fetch(url3)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("div");
           li.classList.add("col-lg-3","col-md-6","col-sm-12","m-auto");
      const markup3 = `
      <div class="city" >
      <h2 class="city-name" data-name="${name}">
      <span>${name}</span>
     
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img style="margin:auto;" class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
  }">
    
    </figure>
      </div>
    `;
     
      li.innerHTML = markup3;
 
      
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = rttot;
    });




const city4 = 'namangan'
  const url4 = `https://api.openweathermap.org/data/2.5/weather?q=${city4}&appid=${apiKey}&units=metric` ;


  fetch(url4)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("div");
            li.classList.add("col-lg-3","col-md-6","col-sm-12","m-auto");
      const markup4 = `
      <div class="city" >
      <h2 class="city-name" data-name="${name}">
      <span>${name}</span>
     
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img style="margin:auto;" class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
  }">
    
    </figure>
      </div>
    `;
     
      li.innerHTML = markup4;
 
      
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = rttot;
    });




  const city5 = 'qashqadaryo'
  const url5 = `https://api.openweathermap.org/data/2.5/weather?q=${city5}&appid=${apiKey}&units=metric` ;


  fetch(url5)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("div");
            li.classList.add("col-lg-3","col-md-6","col-sm-12","m-auto");
      const markup5 = `
      <div class="city" >
      <h2 class="city-name" data-name="${name}">
      <span>${name}</span>
     
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img style="margin:auto;" class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
  }">
    
    </figure>
      </div>
    `;
     
      li.innerHTML = markup5;
 
      
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = rttot;
    });





const city6 = 'navoiy'
  const url6 = `https://api.openweathermap.org/data/2.5/weather?q=${city6}&appid=${apiKey}&units=metric` ;


  fetch(url6)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("div");
            li.classList.add("col-lg-3","col-md-6","col-sm-12","m-auto");
      const markup6 = `
      <div class="city" >
      <h2 class="city-name" data-name="${name}">
      <span>${name}</span>
     
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img style="margin:auto;" class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
  }">
    
    </figure>
      </div>
    `;
     
      li.innerHTML = markup6;
 
      
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = rttot;
    });

  

const city7 = 'urganch'
  const url7 = `https://api.openweathermap.org/data/2.5/weather?q=${city7}&appid=${apiKey}&units=metric` ;


  fetch(url7)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("div");
            li.classList.add("col-lg-3","col-md-6","col-sm-12","m-auto");
      const markup7 = `
      <div class="city" >
      <h2 class="city-name" data-name="${name}">
      <span>${name}</span>
     
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img style="margin:auto;" class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
  }">
    
    </figure>
      </div>
    `;
     
      li.innerHTML = markup7;
 
      
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = rttot;
    });



const city8 = 'termiz'
  const url8 = `https://api.openweathermap.org/data/2.5/weather?q=${city8}&appid=${apiKey}&units=metric` ;


  fetch(url8)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("div");
      li.classList.add("col-lg-3","col-md-6","col-sm-12","m-auto");
      const markup8 = `
      <div class="city" >
      <h2 class="city-name" data-name="${name}">
      <span>${name}</span>
     
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img style="margin:auto;" class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
  }">
    
    </figure>
      </div>
    `;
     
      li.innerHTML = markup8;
 
      
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = rttot;
    });

    


  const city9 = 'jizzax'
  const url9 = `https://api.openweathermap.org/data/2.5/weather?q=${city9}&appid=${apiKey}&units=metric` ;


  fetch(url9)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("div");
      li.classList.add("col-lg-3","col-md-6","col-sm-12","m-auto");
      const markup9 = `
      <div class="city" >
      <h2 class="city-name" data-name="${name}">
      <span>${name}</span>
     
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img style="margin:auto;" class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
  }">
    
    </figure>
      </div>
    `;
     
      li.innerHTML = markup9;
 
      
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = rttot;
    });



  const city10 = 'fargona'
  const url10 = `https://api.openweathermap.org/data/2.5/weather?q=${city10}&appid=${apiKey}&units=metric` ;


  fetch(url10)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("div");
      li.classList.add("col-lg-3","col-md-6","col-sm-12","m-auto");
      const markup10 = `
      <div class="city" >
      <h2 class="city-name" data-name="${name}">
      <span>${name}</span>
     
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img style="margin:auto;" class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
  }">
    
    </figure>
      </div>
    `;
     
      li.innerHTML = markup10;
 
      
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = rttot;
    });


  const city11 = 'buxoro'

  const url11 = `https://api.openweathermap.org/data/2.5/weather?q=${city11}&appid=${apiKey}&units=metric` ;


  fetch(url11)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("div");
      li.classList.add("col-lg-3","col-md-6","col-sm-12","m-auto");
      const markup11 =`
      <div class="city" >
      <h2 class="city-name" data-name="${name}">
      <span>${name}</span>
     
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img style="margin:auto;" class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
  }">
    
    </figure>
      </div>
    `;
     
      li.innerHTML = markup11;
 
      
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = rttot;
    });


const city12 = 'andijon'

  const url12 = `https://api.openweathermap.org/data/2.5/weather?q=${city12}&appid=${apiKey}&units=metric` ;


  fetch(url12)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("div");
      li.classList.add("col-lg-3","col-md-6","col-sm-12","m-auto");
      const markup12 = `
      <div class="city" >
      <h2 class="city-name" data-name="${name}">
      <span>${name}</span>
     
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img style="margin:auto;" class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
  }">
    
    </figure>
      </div>
    `;
     
      li.innerHTML = markup12;
 
      
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = rttot;
    });




  const resbublic = 'nukus'

  const url13 = `https://api.openweathermap.org/data/2.5/weather?q=${resbublic}&appid=${apiKey}&units=metric` ;


  fetch(url13)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("div");
       li.classList.add("col-lg-3","col-md-6","col-sm-12","m-auto");
      const markup13 = `
     <div class="city " >
     <h2 class="city-name" data-name="${name}">
     <span>${name}</span>
    
   </h2>
   <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
   <figure>
     <img style="margin:auto;" class="city-icon" src="${icon}" alt="${
   weather[0]["description"]
 }">
   
   </figure>
     </div>
    `;
     
      li.innerHTML = markup13;
 
      
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = rttot;
    });






  })