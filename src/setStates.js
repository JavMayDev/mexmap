var map = $('map')[0];

function showStateLaws(stateName) {
    var infoDiv = $('#info');
    infoDiv.empty();

    var stateLaws = statesLaws.find(function (state) {
        if (state.stateName === stateName) return state;
    });

    // if state has no laws exit the function
    if (stateLaws.length < 0) return;

    infoDiv.append(
        '<h2>Leyes restrictivas del estado de ' + stateName + '</h2>'
    );
    stateLaws.laws.forEach(function (law) {
        infoDiv.append('<h4>Artículo ' + law.article + '</h4>');
        infoDiv.append('<p>' + law.content + '</p>');
    });
}

statesCoords.forEach(function (state) {
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

        $('select')[0].value = 'default';
        $('img').mapster({ singleSelect: true });
        $('img').mapster('resize', 1200, 840);
        $(area).mapster('select');

        showStateLaws(state.name);
    });

    map.append(area);
});
