/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui créer les coeurs pour incrémenter les likes
export const displayHeart = (total) => {
    const span = document.querySelector('.likeAndPriceLike');
    span.innerHTML = total
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const incrementTotalNbLikes = (total) => {
    // on récupère tous les likes
    const hearts = document.querySelectorAll('.like');

    // on écoute les click sur chaque like
    hearts.forEach(heart => {
        heart.addEventListener('click', (event) => {
            // on récupère le parent comme on peut (grace à l'événement ici)
            const parent = event.path[1];
            let picLike = parent.querySelector('.mediaNbLike');

            // si le coeur est vide
            if (heart.classList.contains('far')) {
                // on incrémente le nb de like
                picLike.innerHTML = parseInt(picLike.innerHTML) + 1;
                // on incrémente le nb de like total
                total += 1;
                // on change le coeur
                heart.classList.replace("far", "fas");
            } else {
                // on décrémente le nb de like
                picLike.innerHTML = parseInt(picLike.innerHTML) - 1;
                // on décrémente le nb de like total
                total -= 1;
                // on change le coeur
                heart.classList.replace("fas", "far");
            }
            // on affiche le total
            displayHeart(total)
        })
    });
}