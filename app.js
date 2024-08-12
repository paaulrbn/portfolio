
// Faire apparaître les éléments au scroll

const projetParts = document.querySelectorAll('.projet-part');
const projetDetails = document.querySelectorAll('.projetDetails');


document.addEventListener('scroll', function () {
    projetParts.forEach(projetPart => {
        if (isVisible(projetPart)) {
            projetPart.classList.add('projet-part-visible');
        }
    })
    projetDetails.forEach(projetDetail => {
        if (isVisible(projetDetail)) {
            projetDetail.classList.add('projetDetails-visible');
        }
    })
})

function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
}


