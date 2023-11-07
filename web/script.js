var engine = 0
window.addEventListener('message', (event) => {
	let data = event.data
	if(data.action == 'open') {
		$('#content-container').fadeIn()
    }else if(data.action == 'close'){
        $('#content-container').fadeOut()
    }
})

$(function(e){
    $('#engine_1').click(function(e) {
        $.post(`https://${GetParentResourceName()}/engine`);
    });

    // Door
    $('#doorl1_1').on('click', function () {
        $.post(`https://${GetParentResourceName()}/openDoor`,
            JSON.stringify(indexDoor = 0)
        );
    });
    $('#doorr1_1').on('click', function () {
        $.post(`https://${GetParentResourceName()}/openDoor`,
            JSON.stringify(indexDoor = 1)
        );
    });
    $('#doorl2_1').on('click', function () {
        $.post(`https://${GetParentResourceName()}/openDoor`,
            JSON.stringify(indexDoor = 2)
        );
    });
    $('#doorr2_1').on('click', function () {
        $.post(`https://${GetParentResourceName()}/openDoor`,
            JSON.stringify(indexDoor = 3)
        );
    });
    $('#hood_1').on('click', function () {
        $.post(`https://${GetParentResourceName()}/openDoor`,
            JSON.stringify(indexDoor = 4)
        );
    });
    $('#trunk_1').on('click', function () {
        $.post(`https://${GetParentResourceName()}/openDoor`,
            JSON.stringify(indexDoor = 5)
        );
    });
    // Window
    $('#windowl1_1').on('click', function () {
        $.post(`https://${GetParentResourceName()}/openWindow`,
            JSON.stringify(indexWindow = 0)
        );
    });
    $('#windowr1_1').on('click', function () {
        $.post(`https://${GetParentResourceName()}/openWindow`,
            JSON.stringify(indexWindow = 1)
        );
    });
    $('#windowl2_1').on('click', function () {
        $.post(`https://${GetParentResourceName()}/openWindow`,
            JSON.stringify(indexWindow = 2)
        );
    });
    $('#windowr2_1').on('click', function () {
        $.post(`https://${GetParentResourceName()}/openWindow`,
            JSON.stringify(indexWindow = 3)
        );
    });

    //Seat
    $('#seat_1').on('click', function () {
        $.post(`https://${GetParentResourceName()}/selectSeat`,
            JSON.stringify(indexWindow = -1)
        );
    });
    $('#seat_3_ek1').on('click', function () {
        $.post(`https://${GetParentResourceName()}/selectSeat`,
            JSON.stringify(indexWindow = 0)
        );
    });
    $('#seat_2').on('click', function () {
        $.post(`https://${GetParentResourceName()}/selectSeat`,
            JSON.stringify(indexWindow = 1)
        );
    });
    $('#seat_3').on('click', function () {
        $.post(`https://${GetParentResourceName()}/selectSeat`,
            JSON.stringify(indexWindow = 2)
        );
    });

    //lock
    $('#download__1__removebg_preview_1').on('click', function () {
        $.post(`https://${GetParentResourceName()}/lock`);
    });
})

$(document).keydown(function(e) {
    if (e.key === "Escape" || e.key === "Backspace") { // escape key maps to keycode `27`
        $.post(`https://${GetParentResourceName()}/Close`);
    }
});
