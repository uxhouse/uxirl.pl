const profitTiles = document.querySelectorAll('.profitTile');
console.log(profitTiles);

profitTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        tile.classList.toggle('profitTile-active');
    })
})
