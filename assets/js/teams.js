
//CHANGE SELECTOR NUMBER OF CONCURRENT
document.querySelector('#participate').addEventListener("change", function () {

    let concurrents = ' ';
    let x = 0;

    document.querySelector('#input_concurrents').innerHTML = '';
    document.querySelector('#show_teams').innerHTML = '';

    for (i = 0; i < this.value; i++) {
        x++;

        let current_input = '<input id =\"current_' + x + '\" type=\"text\" class=\"form-control name_participant my-1\" placeholder=\"' + x + ' - mate \" aria-label=\"Username\" aria-describedby=\"basic-addon1\">';

        concurrents = concurrents.concat(current_input);
    }

    let btn = '<button id="add" class="btn btn-primary mt-3">add ' + x + ' - attendees</button>';
    concurrents = concurrents.concat(btn);

    document.querySelector('#input_concurrents').innerHTML = concurrents;

});

window.addEventListener("click", function (event) {

    // add input relative to the number of concurrent
    if (event.target?.id === "add") {

        tab = [...document.querySelectorAll('.name_participant')].map(input => (input.value));

        let many_team = '<h2> How many team ? </h2>';

        for (i = 2; i < tab.length; i++) {

            let buffer = tab.length / i;

            if (Number.isInteger(buffer)) {

                let btn = '<button data-team=' + i + ' name="teams_number" class="btn btn-primary mt-3">' + i + ' teams</button>&nbsp;';

                many_team = many_team.concat(btn);
            }

            document.querySelector('#btn_teams').innerHTML = many_team;
            document.querySelector('#input_concurrents').innerHTML = '';
        }
    }

    // "Get number of teams"
    if (event.target?.name === "teams_number") {
        let target_btn = event.target.getAttribute('data-team');

        getteams(tab, target_btn);
    }
});

function getteams(tab, target_btn) {

    let teams = []; //multidimensional array

    let buffer_tab = [];
    let buffer = tab.length / target_btn; //number of concurrent per team

    shuffle(tab);

    for (i = 0; i < target_btn; i++) {

        // if (i > target_btn - 2) {
        //     buffer = tab.length;
        // }

        buffer_tab = tab.splice(0, buffer);
        teams.push(buffer_tab);
    }

    document.querySelector('#input_concurrents').innerHTML = '';
    document.querySelector('#btn_teams').innerHTML = '';

    showteams(teams);

}

function showteams(teams) {
    let show_teams = '<h2 class="mb-5 text-uppercase fw-bold text-warning"> The Teams : </h2><div class="d-flex flex-wrap">';

    let n = 1; // Team number

    for (i = 0; i < teams.length; i++) {

        let x = 0;

        show_teams = show_teams.concat('<ul class="list-group m-1"><li class="list-group-item fw-bold font-monospace text-danger text-uppercase px-5 py-3 fs-5">team ' + n + '</li>');

        while (x < teams[0].length) {
            let current = teams[i][x];
            x++;
            show_teams = show_teams.concat(' <li class="list-group-item py-3 fs-6"><span class="fw-bold text-secondary">' + x + ' - </span>' + current + '</li > ');
        }

        show_teams = show_teams.concat('</ul>');

        n++;
    }

    show_teams = show_teams.concat('</div>');
    //show_teams = show_teams.concat('<button id="shuffle" type="button" class="btn btn-danger">SHUFFLE</button>');

    document.querySelector('#show_teams').innerHTML = show_teams;
}
