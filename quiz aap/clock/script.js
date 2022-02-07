  setInterval(()=>{
      d=new Date();
      ht= d.getHours();
      mt= d.getMinutes();
      st= d.getSeconds();
      hrotation= 30*ht + mt/2;
      mrotation = 6*mt;
      srotation= 6*st;

      hr.style.transform = `rotate(${hrotation}deg)`;
      mn.style.transform = `rotate(${mrotation}deg)`;
      sc.style.transform =`rotate(${srotation}deg)`;
  },1000);