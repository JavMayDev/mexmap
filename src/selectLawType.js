var map = $('map')[0];
// console.log( $('map')[0].children )

function selectLawType(lawType) {
    var infoDiv = $('#info');
    infoDiv.empty();

    // display law type info
    infoDiv.append(
        '<p>' +
            lawTypes.find(function (law) {
                if (law.name === lawType) return law;
            }).description +
            '</p>'
    );

    // disable single select
    $('img').mapster({ singleSelect: false });
    $('img').mapster('resize', 1200, 840);

    statesLaws
        .forEach(function (state) {
            // if state has that law type
            if (
                state.laws
                    .map(function (law) {
                        return law.type;
                    })
                    .includes(lawType)
            )
                // select area
                $('#' + state.stateName).mapster('select');
        });
}
