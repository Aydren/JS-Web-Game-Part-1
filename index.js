function newImage(name,assets,lft,btm) {
    name = document.createElement('img');
    name.src = assets;
    name.style.position = 'fixed';
    name.style.left = lft;
    name.style.bottom = btm;
    document.body.append(name);
    return name;
}
newImage('greenCharacter', 'assets/green-character.gif', '100px', '100px')
newImage('pineTree', 'assets/pine-tree.png', '450px', '200px')
newImage('tree', 'assets/tree.png', '200px', '300px')
newImage('pillar', 'assets/pillar.png', '350px', '100px')
newImage('crate', 'assets/crate.png', '150px', '200px')
newImage('well', 'assets/well.png', '500px', '425px')

function newItem(name,assets,lft,btm) {
    name = newImage(name,assets,lft,btm);
    
    name.addEventListener('dblclick', function() {
        name.remove();
    })
}

newItem('sword', 'assets/sword.png', '500px', '405px')
newItem('sheild', 'assets/sheild.png', '175px', '185px')
newItem('staff', 'assets/staff.png', '600px', '100px')

// attempts to make the background work. Last one kinda worked, but not close enough

/* 
function backgroundImg(namebg,assets) {
    namebg = document.createElement('img');
    namebg.src = assets;
    namebg.style.position = 'fixed';
    document.body.append(namebg);
    return namebg;
}

backgroundImg('grass', 'assets/grass.png')
 */

/* let imgSrc = 'assets/grass.png';

function generateImage() {
  let img = document.createElement('img')
  img.src = imgSrc;
  return img;
}

for (let i = 0; i < 171; i++ ) {
  document.body.appendChild(generateImage());
} */