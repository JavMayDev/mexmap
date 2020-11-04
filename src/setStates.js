$(document).ready(function () {
    var map = $('map')[0];

    var toolTips = [];

    statesCoords.forEach(function (state) {
        // create and set area
        var area = document.createElement('area');
        area.setAttribute('shape', 'poly');
        area.setAttribute('id', state.name);
        area.setAttribute('coords', state.coords);
        area.setAttribute('href', '#');
        map.append(area);

        var stateToolTip = '<strong >' + state.name + '</strong><ul>';
        statesLaws.forEach(function (lawedState) {
            if (state.name === lawedState.stateName) {
                lawedState.laws

                    // skip repeated law types
                    .filter(function (_, index) {
                        for (var i = 0; i < index; i++)
                            if (
                                lawedState.laws[i].type ===
				lawedState.laws[index].type 
                            )
                                return false;
                        return true;
                    })

                    // append filtered law types to state tool tip
                    .forEach(function (law) {
                        stateToolTip += '<li>' + law.type + '</li>';
                    });
            }
        });

        // close list tag
        stateToolTip += '</ul>';

        toolTips.push({
            key: state.name,
            toolTip: stateToolTip,
        });
    });

    $('#mapimg').mapster({
        singleSelect: true,
        showToolTip: true,
        mapKey: 'id',
        areas: toolTips,

        onClick: function (data) {
            // remove seleceted option from select drop down
            $('select')[0].value = 'default';

            showStateLaws(this.id);

            // set single select
            $('#mapimg').mapster('set_options', {
                singleSelect: true,
            });
        },
    });

    $('#mapimg').mapster('resize', 1020, 714);
});

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
        if (law.article)
            infoDiv.append('<h4>Artículo ' + law.article + '</h4>');
        infoDiv.append('<p>' + law.content + '</p>');
    });
}
