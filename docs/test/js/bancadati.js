function updateTable(indata) {
    $(document).ready(function() {
        $('#data-table').DataTable({
            "language": {
                "sEmptyTable": "Nessun dato presente nella tabella",
                "sInfo": "Vista da _START_ a _END_ di _TOTAL_ elementi",
                "sInfoEmpty": "Vista da 0 a 0 di 0 elementi",
                "sInfoFiltered": "(filtrati da _MAX_ elementi totali)",
                "sInfoPostFix": "",
                "sInfoThousands": ".",
                "sLengthMenu": "Visualizza _MENU_ elementi",
                "sLoadingRecords": "Caricamento...",
                "sProcessing": "Elaborazione...",
                "sSearch": "Cerca:",
                "sZeroRecords": "La ricerca non ha portato alcun risultato.",
                "oPaginate": {
                    "sFirst": "Inizio",
                    "sPrevious": "Precedente",
                    "sNext": "Successivo",
                    "sLast": "Fine"
                },
                "oAria": {
                    "sSortAscending": ": attiva per ordinare la colonna in ordine crescente",
                    "sSortDescending": ": attiva per ordinare la colonna in ordine decrescente"
                }
            },
            "data": indata
        }).order([1, 'desc']).draw();
    });
    $('data-table').attr('width', '10px;');
}