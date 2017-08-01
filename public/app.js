var catAdder = function(newCat){
    var innerCatList = document.createElement('ul');
    innerCatList.classList.add('cat', 'fade');

    var catNameItem = document.createElement('li');
    catNameItem.innerText = "Name: " + newCat.name; 

    var catFavFoodItem = document.createElement('li');
    catFavFoodItem.innerText = "Favourite food: " + newCat.favFood;

    var catImageItem = document.createElement('li');
    var catImage = document.createElement('img');
    catImage.classList.add('cat-image');
    catImage.src = newCat.imageUrl;
    catImageItem.appendChild(catImage);

    innerCatList.appendChild(catNameItem);
    innerCatList.appendChild(catFavFoodItem);
    innerCatList.appendChild(catImageItem);

    var catContainer = document.getElementById('cats');
    catContainer.appendChild(innerCatList);
}

var catSourceList = [
    {name: 'Boba', favFood: 'Sock fluff', imageUrl: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'},
    {name: 'Barnaby', favFood: 'Tuna', imageUrl: 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'},
    {name: 'Max', favFood: 'Whiskas Temptations', imageUrl: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'},
    {name: 'cat1', favFood: 'favFood1', imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg'},
    {name: 'cat2', favFood: 'favFood2', imageUrl: 'https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781'},
    {name: 'cat3', favFood: 'favFood3', imageUrl: 'http://www.petmd.com/sites/default/files/scared-kitten-shutterstock_191443322.jpg'}
];

var addCats = function(catList){
    for(cat of catList){
        catAdder(cat);
    };
};

window.onload = function(){
    addCats(catSourceList);
}