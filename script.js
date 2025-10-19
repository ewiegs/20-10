document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    let isOpen = false;

    envelope.addEventListener('click', function() {
        if (!isOpen) {
            this.classList.add('open');
            isOpen = true;
        } else {
            this.classList.remove('open');
            isOpen = false;
        }
    });
});