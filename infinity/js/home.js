//login
const logbtn = document.querySelector('.logbtn');
logbtn.addEventListener('click',function(){
document.querySelector('.login').classList.remove('hidden');
});
const close=document.querySelector('.closelog');
close.addEventListener('click',function(){
    document.querySelector('.login').classList.add('hidden');
});


document.querySelector('.searchbtn').addEventListener('click',function(){
  document.querySelector('.search').classList.remove('hidden');
  });
       //sidebar
       document.querySelector('.sidebarbtn').addEventListener('click',function(){
          document.querySelector('.sidebar').classList.remove('hidden');
              });
          
           document.querySelector('#sidebarclose').addEventListener('click',function(){
              document.querySelector('.sidebar').classList.add('hidden');
           });
  
           //active and nonactive
  const trending = document.querySelector('.trending');
  const shirts = document.querySelector('.shirts');
  const pants = document.querySelector('.pants');
  const dresses = document.querySelector('.dresses');
  const kurti = document.querySelector('.kurti');
  const glasses = document.querySelector('.glasses');
  const product = document.querySelector('.productcat')
  
  shirts.addEventListener('click', function () {
      shirts.classList.add('AC');
      trending.classList.remove('AC');
      pants.classList.remove('AC');
      dresses.classList.remove('AC');
      kurti.classList.remove('AC');
      glasses.classList.remove('AC');
  });
  trending.addEventListener('click', function () {
      trending.classList.add('AC');
      shirts.classList.remove('AC');
      pants.classList.remove('AC');
      dresses.classList.remove('AC');
      kurti.classList.remove('AC');
      glasses.classList.remove('AC');
  });
  pants.addEventListener('click', function () {
      pants.classList.add('AC');
      shirts.classList.remove('AC');
      trending.classList.remove('AC');
      dresses.classList.remove('AC');
      kurti.classList.remove('AC');
      glasses.classList.remove('AC');
  });
  dresses.addEventListener('click', function () {
      dresses.classList.add('AC');
      shirts.classList.remove('AC');
      pants.classList.remove('AC');
      trending.classList.remove('AC');
      kurti.classList.remove('AC');
      glasses.classList.remove('AC');
  });
  kurti.addEventListener('click', function () {
      kurti.classList.add('AC');
      shirts.classList.remove('AC');
      pants.classList.remove('AC');
      dresses.classList.remove('AC');
      trending.classList.remove('AC');
      glasses.classList.remove('AC');
  });
  glasses.addEventListener('click',function(){
      glasses.classList.add('AC');
       shirts.classList.remove('AC');
       pants.classList.remove('AC');
   dresses.classList.remove('AC');
   kurti.classList.remove('AC');
  trending.classList.remove('AC');
       });
       