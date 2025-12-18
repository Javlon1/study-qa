const detailsElements = document.querySelectorAll('.accordion__content details');

detailsElements.forEach((details) => {
    details.addEventListener('toggle', function () {
        if (this.open) {
            detailsElements.forEach((otherDetails) => {
                if (otherDetails !== this && otherDetails.open) {
                    otherDetails.open = false;
                }
            });
        }
    });
});
