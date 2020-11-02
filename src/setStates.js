console.log('function of set states');
var map = $('map')[0];
// console.log( 'map: ', map )

function showLaws(stateName) {
    var infoDiv = $('#info');
    infoDiv.empty();

    // get all laws that contains the selected state
    var stateLaws = laws.filter(function (law) {
        if (law.states.includes(stateName)) return law;
    });

    stateLaws.forEach(function (law) {
        infoDiv.append('<h1>' + law.name + '</h1>');
        infoDiv.append('<p>' + law.content + '</p>');
    });

    console.log(stateLaws);
}

console.log('states on set states: ', states);
states.forEach(function (state) {
    // create and set area
    var area = document.createElement('area');
    area.setAttribute('shape', 'poly');
    area.setAttribute('id', state.name);
    area.setAttribute('coords', state.coords);
    area.setAttribute('href', '#');
    area.setAttribute('mapKey', state.name);
    // set click event on area
    area.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('on select ', state.name);
        showLaws(state.name);
    });

    map.append(area);
});
