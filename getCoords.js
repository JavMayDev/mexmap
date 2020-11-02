
console.log( 'testing script' )

var p = $('p')[0];
console.log( 'p: ', p )
function getCoords(event) {
    p.append(`${event.offsetX}, ${event.offsetY}, `);
}
