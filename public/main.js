$(document).ready(function () {
    var selectedSeat=[]
    // 
      $.ajax({
        url: '/reservation/5500632d2dc02be024ba5c66', 
        type: 'GET'
    })
        .then(data => {
            var seat = data.seats;
            for (let i = 0; i <= 5; i++){
                for (let j = 0; j <= 8; j++){
                    if (seat[i][j]==1){$('.seat--'+i+'--'+j+'--').addClass('selected')}
                }
            }
        })
          .catch(err => {
              alert(err);
          })
    
    var count = $('#count').text();
    
    $('.seat').click(function () {
        if ($(this).hasClass('occupied')) {
            $(this).removeClass('occupied');
            selectedSeat.push([$(this).attr('class').split('--')[1], $(this).attr('class').split('--')[2]]);
            count--;
            loaddata(count)
        } else {
            $(this).addClass('occupied');
            selectedSeat.push([$(this).attr('class').split('--')[1], $(this).attr('class').split('--')[2]]);
            count++;
            loaddata(count);
        }
        console.log(selectedSeat[0]);
    })

    function loaddata(count) {
        $('#count').text(count);
        $('#price').text(count*10);
    }
// 
})