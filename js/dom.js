const sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.border =  '2px solid green';
    section.style.marginBottom = '50px'
    section.style.maxWidth = '100%'
    section.style.padding ='50px'
    section.style.borderRadius ='50px'
    section.style.backgroundColor = 'lightgray'

   };
   const foodContainer = document.getElementById('food-container');
   foodContainer.style.backgroundColor = 'yellow'

   const placeTitle = document.getElementById("place-title")
   placeTitle.style.backgroundColor = 'lightgreen';
   placeTitle.style.padding = '50px';
   placeTitle.classList.add('red-bg')
   placeTitle.classList.remove('text-large')