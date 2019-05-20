const socket = io('/app');

socket.on('hotel:booked', () => {});

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.modal');
    const instances = M.Modal.init(elems, {});
});
