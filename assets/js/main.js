
/* javascript */

window.addEventListener("load", () => {
    const colorItems = document.querySelectorAll('.color-item');
    const colorChangeBox = document.getElementById('color-change-box');

    const celebItems = document.querySelectorAll('.celeb-item');
    const celebImage = document.getElementById('celeb-image');

    const animationButtons = document.querySelectorAll('.ani-item');
    const animationImage = document.getElementById('animation-image');
    


    // Create an object to map IDs to image sources
    const imageSources = {
        adam: 'assets/img/ad.png',
        tyler: 'assets/img/ty.png',
        rock: 'assets/img/rock.png',
        tom: 'assets/img/tom.png',
        rami: 'assets/img/rami.png',
        chris: 'assets/img/chris.png',
        betram: 'assets/img/betram.png',
        austin: 'assets/img/austin.png',
        lebron: 'assets/img/lebron.png',
        paul: 'assets/img/paul.png',
        drake: 'assets/img/drake.png',
        hudson: 'assets/img/hudson.png',
        zendaya: 'assets/img/zendaya.png',
        ellen: 'assets/img/ellen.png',
        beyounce: 'assets/img/beyounce.png',
        vin: 'assets/img/vin.png',
        jennifer: 'assets/img/jennifer.png',
        emma: 'assets/img/emma.png',
        // Add more IDs and image sources as needed
    };


    const backgroundSources = {
        sky: 'assets/img/sky.png',
    };

    const gifAttributes = {
        run: {
            width: '300px',
            height: 'auto',
            marginLeft: '50px',
            marginTop: '180px',
        },

        dance: {
            width: '350px',
            height: 'auto',
            marginLeft: '58px',
            marginTop: '120px',
        },

        happy: {
            width: '530px',
            height: 'auto',
            marginLeft: '10px',
            marginTop: '80px',
        },

        dance1: {
            width: '500px',
            height: 'auto',
            marginLeft: '0px',
            marginTop: '40px',
        },

        crab: {
            width: '450px',
            height: 'auto',
            marginLeft: '10px',
            marginTop: '40px',
        },

        pixel: {
            width: '400px',
            height: 'auto',
            marginLeft: '10px',
            marginTop: '5px',
        },





    }

    function updateGif(id){
        if (gifSources.hasOwnProperty(id)){
            animationImage.src = gifSources[id];

            if (gifAttributes.hasOwnProperty(id)){
                const attributes = gifAttributes[id];
                animationImage.style.width = attributes.width;
                animationImage.style.height = attributes.height;
                animationImage.style.marginLeft = attributes.marginLeft;
                animationImage.style.marginTop = attributes.marginTop;
            } else {
                animationImage.style.width = 'auto';
                animationImage.style.height = 'auto';
                animationImage.style.marginLeft = '0';
                animationImage.style.marginTop = '0';
            }
        }
    }


    celebItems.forEach(item => {
        item.addEventListener('click', function() {
            const idSelected = this.id;
            if (idSelected in imageSources) {
                // Change the image source based on the clicked ID
                celebImage.src = imageSources[idSelected];

            } else {
                // Set a default image source if the ID is not found
                celebImage.src = 'assets/img/default.jpg'; // Replace with your default image path
            }
        });
    });

    const gifSources = {
        run: 'assets/img/run.gif',
        dance:'assets/img/giphy.gif',
        happy:'assets/img/happy.gif',
        dance1:'assets/img/chip.gif',
        crab:'assets/img/crab.gif',
        pixel:'assets/img/pixel.gif',    
        // Add more IDs and image sources as needed
    };


    animationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const idSelected = this.id;
            updateGif(idSelected);
            if (idSelected in gifSources) {
                // Change the image source based on the clicked ID
                animationImage.src = gifSources[idSelected];
         
            } else {
                // Set a default image source if the ID is not found
                animationImage.src = 'assets/img/run.gif'; // Replace with your default image path
    
                // Reset the size of the image to its default
                animationImage.style.width = 'auto';
                animationImage.style.height = 'auto'
            }

        });
    });
    
    
    colorItems.forEach(item => {
        item.addEventListener('click', function() {
            const idSelected = this.id;
            colorChangeBox.style.backgroundColor = idSelected;
        });
    });  
});

