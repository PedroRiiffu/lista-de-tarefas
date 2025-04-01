$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault()

        const inTarefa = $('#inTarefa').val()
        const novoItem = $('<li></li>').text(inTarefa)
        $('ul').append(novoItem)
        $('#inTarefa').val('')

        novoItem.click(function() {
            $(this).toggleClass('completed')
        })
    })


})