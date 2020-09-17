$(document).ready(function () {
    // get id form Url
    const queryString = window.location.href.split('/');
    var id = queryString[queryString.length-2]
    //
      $.ajax({
        url:'/reservation/'+id, 
        type: 'GET'
    })
          .then(data => {
            console.log(data);
            var seat = data.seats;
            // Render seat are selected or not
                for (let i = 0; i <= 5; i++){
                    for (let j = 0; j <= 8; j++){
                        if (seat[i][j]==1){$('.seat--'+i+'--'+j+'--').addClass('selected')}
                    }
                }

                let count = $('#count').text();
            // Click to choose the seats
            $('.seat').click(function () {
                if ($(this).hasClass('selected')){return true}
                if ($(this).hasClass('occupied')) {
                    $(this).removeClass('occupied');
                    seat[parseInt($(this).attr('class').split('--')[1], 10)][parseInt($(this).attr('class').split('--')[2], 10)] = 0;
                    count--;
                    loaddata(count,data.price)
                } else {
                    $(this).addClass('occupied');
                    seat[parseInt($(this).attr('class').split('--')[1], 10)][parseInt($(this).attr('class').split('--')[2], 10)] = 1;
                    count++;
                    loaddata(count,data.price);
                }
            })
            // Confirm               
            $('.btn').click(function () {
                $.ajax({
                    url: '/reservation/5500632d2dc02be024ba5c66', 
                    type: 'POST',
                    data: {
                        seats:seat
                    }
                })
                    .then(data => {
                       alert('Confirm')
                    })
            })
        })
          .catch(err => {
              alert(err);
          })
    
    
    function loaddata(count,price) {
        $('#count').text(count);
        $('#price').text(count*price);
    }
// 
})