$(document).ready(function() {
    $('#datipassaporti').DataTable({
        ajax: 'data/dati_passaporti.json',
        responsive: true
    });
});