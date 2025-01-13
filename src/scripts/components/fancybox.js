let activateFancybox = ( gallery, id ) => {
    let items = gallery.querySelectorAll("[data-fancybox]")

    Fancybox.bind('[data-fancybox="'+id+'"]', {
        infinite: false,
        groupAll: true,
        hideScrollbar: false,
        startIndex: 0,
        contentClick: false,
        Images: {
            zoom: false,
        },
        Thumbs: {
            type: "modern",
            minCount: 5
        },
        Toolbar: {
            display: {
                left: [],
                middle: ["infobar"],
                right: ["slideshow", "thumbs", "close"],
            },
        }
    })
}

let galleries = document.querySelectorAll('.gallery')

galleries.forEach(g => {
    activateFancybox(g, g.dataset.gallery)
})