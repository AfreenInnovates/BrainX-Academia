let cursor = document.querySelector('.cursor');
let scroll_btn = document.querySelector('.hero img');
let how_btn = document.querySelector('.hero a')
let slide_btn = document.querySelectorAll('.resources a');
let socials_btn = document.querySelectorAll('.socials a');
let navbar_links = document.querySelectorAll('.menu a');
let footer_links = document.querySelectorAll('.footer a');

window.addEventListener("mousemove", cursorAnimate);

function cursorAnimate(e) {
    cursor.animate({
        top:e.pageY + 'px',
        left:e.pageX + 'px', 
      }, duration=2000, fill='forwards')
  }

scroll_btn.addEventListener('mouseenter', (e) => {
    cursor.style.width = "15vw";
    cursor.querySelector('h1').innerHTML = "SCROLL DOWN"
  })
  
scroll_btn.addEventListener('mouseleave', (e) => {
    cursor.style.width = '2vw';
    cursor.querySelector('h1').innerHTML = ""
  })

how_btn.addEventListener('mouseenter', (e) => {
    cursor.style.width = "15vw";
    cursor.style.background = "white";
    cursor.querySelector('h1').innerHTML = "LEARN MORE"
  })
  
how_btn.addEventListener('mouseleave', (e) => {
    cursor.style.width = '2vw';
    cursor.style.background = "#FDB538";
    cursor.querySelector('h1').innerHTML = ""
  })


slide_btn.forEach(button => {
  button.addEventListener('mouseenter', (e) => {
    cursor.style.width = "15vw";
    cursor.querySelector('h1').innerHTML = "OPEN WEBPAGE"
    button.querySelectorAll('h1').forEach(header => {
      header.style.transform = 'scale(1)';
      header.style.opacity = 1;
    })

    button.querySelectorAll('.circle').forEach(header => {
      header.style.transform = 'scale(1)';
      header.style.opacity = 1;
    })

    button.querySelector('p').style.opacity = 1;
    button.querySelector('p').style.transform = 'translateX(-50%) translateY(0)';

    button.querySelector('video').play();
    button.querySelector('.video').style.opacity = 0.8;
    button.querySelector('.video').style.transform = 'scale(1.1)';
  })
  
  button.addEventListener('mouseleave', (e) => {
      cursor.style.width = '2vw';
      cursor.querySelector('h1').innerHTML = ""
      button.querySelectorAll('h1').forEach(header => {
        header.style.transform = 'scale(0.95)';
        header.style.opacity = 0;
      })
  
      button.querySelectorAll('.circle').forEach(header => {
        header.style.transform = 'scale(0.95)';
        header.style.opacity = 0;
      })

      button.querySelector('p').style.opacity = 0;
      button.querySelector('p').style.transform = 'translateX(-50%) translateY(25px)';

      button.querySelector('video').pause();
      button.querySelector('.video').style.opacity = 0.5;
      button.querySelector('.video').style.transform = 'scale(1)';
    })
})

socials_btn.forEach(button => {
  button.addEventListener('mouseenter', (e) => {
    cursor.style.width = "15vw";
    cursor.querySelector('h1').innerHTML = "OPEN WEBPAGE"
    button.querySelectorAll('.hover h1').forEach(header => {
      header.style.transform = 'scale(1)';
      header.style.opacity = 1;
    })

    button.querySelectorAll('.hover .icon').forEach(header => {
      header.style.transform = 'scale(1)';
      header.style.opacity = 1;
    })
  })
  
  button.addEventListener('mouseleave', (e) => {
      cursor.style.width = '2vw';
      cursor.querySelector('h1').innerHTML = ""
      button.querySelectorAll('.hover h1').forEach(header => {
        header.style.transform = 'scale(0.95)';
        header.style.opacity = 0;
      })
  
      button.querySelectorAll('.hover .icon').forEach(header => {
        header.style.transform = 'scale(0.95)';
        header.style.opacity = 0;
      })
    })
})

navbar_links.forEach(button => {
  button.addEventListener('mouseenter', (e) => {
    cursor.style.width = "0vw";
  })
  
  button.addEventListener('mouseleave', (e) => {
      cursor.style.width = '2vw';
    })
})

footer_links.forEach(button => {
  button.addEventListener('mouseenter', (e) => {
    cursor.style.width = "0vw";
  })
  
  button.addEventListener('mouseleave', (e) => {
      cursor.style.width = '2vw';
    })
})

document.querySelector('.navbar a').addEventListener('mouseenter', (e) => {
  cursor.style.width = "0vw";
})

document.querySelector('.navbar a').addEventListener('mouseleave', (e) => {
    cursor.style.width = '2vw';
  })

document.querySelector('.about a').addEventListener('mouseenter', (e) => {
  cursor.style.width = "0vw";
})

document.querySelector('.about a').addEventListener('mouseleave', (e) => {
    cursor.style.width = '2vw';
  })

document.querySelector('.contact a').addEventListener('mouseenter', (e) => {
  cursor.style.width = "0vw";
})

document.querySelector('.contact a').addEventListener('mouseleave', (e) => {
    cursor.style.width = '2vw';
  })

document.querySelector('.hero h1').addEventListener('mouseenter', (e) => {
  cursor.style.width = "15vw";
  cursor.querySelector('h1').innerHTML = "ACHIEVING DREAMS"
})
  
document.querySelector('.hero h1').addEventListener('mouseleave', (e) => {
    cursor.style.width = '2vw';
    cursor.querySelector('h1').innerHTML = ""
  })