function newImage(name,assets,lft,btm) {
    name = document.createElement('img');
    name.src = assets;
    name.style.position = 'fixed';
    name.style.left = lft;
    name.style.bottom = btm;
    document.body.append(name);
}
newImage('greenCharacter', 'assets/green-character.gif', '100px', '100px')

newImage('pineTree', 'assets/pine-tree.png', '450px', '200px')

newImage('tree', 'assets/tree.png', '200px', '300px')

newImage('pillar', 'assets/pillar.png', '350px', '100px')

newImage('crate', 'assets/crate.png', '150px', '200px')

newImage('well', 'assets/well.png', '500px', '425px')

function newItem(name,assets,lft,btm) {
    newImage(name,assets,lft,btm);
    
    name.addEventListener('click', function() {
        name.remove();
    })
}

newItem('sword', 'assets/sword.png', '500px', '405px')