document.addEventListener('DOMContentLoaded', function() {

    const faction = fleetBuilder.fleet.faction

    /**
     * Processes a single image element to apply its background-image style
     * based on the associated card title from the 'cards' object.
     * @param {HTMLElement} imageElement The .image element to process.
     */
    function processImageElement(imageElement) {


        try {
            // Go up one parent div to find the sibling with class "name"
            const parentDiv = imageElement.parentElement;
            if (!parentDiv) {
                console.warn("Could not find parent element for:", imageElement);
                return;
            }

            let nameElement = parentDiv.querySelector('.name');
            // If 'name' element is not found, try to find a 'title' element
            if (!nameElement) {
                nameElement = parentDiv.querySelector('.title');
            }

            if (!nameElement) {
                console.warn("Could not find 'name' or 'title' element within the parent of:", imageElement);
                return;
            }
            let cardPoint = 0
            let pointElement = parentDiv.querySelector('.points');
            if (!pointElement) {
            //     console.warn(imageElement, " does not have 'points' element")
            }
            else{cardPoint = Number(pointElement.innerText.trim())};


            const cardTitle = nameElement.innerText.replace(/^\d+\s*×\s*/, '').trim();

            const numberMatch = nameElement.innerText.match(/^\d+\s*×/); // Matches one or more digits at the beginning
            let extractedNumber = 1;
            if (numberMatch) {
                extractedNumber = parseInt(numberMatch[0].replace(/\s*×\s*/,''), 10); // Convert the matched string to an integer
            }

            cardPoint = Math.floor(cardPoint / extractedNumber)
            let imageUrl = null;

            // Search through all categories in the 'cards' object
            for (const category in fleetBuilder.cards) {
                if (Array.isArray(fleetBuilder.cards[category])) {
                    const foundCard = fleetBuilder.cards[category].find(card => (
                    card.title === cardTitle &&
                    (cardPoint === 0 || card.points === cardPoint) &&
                    (!card.faction || (Array.isArray(card.faction) ? card.faction.includes(faction) : card.faction === faction))
                    ));
                    if (foundCard && foundCard.image) {
                        imageUrl = foundCard.image;
                        break; // Found the image, no need to search further
                    }
                }
            }

            if (imageUrl) {
                // Add the background-image style to the image element
                imageElement.style.backgroundImage = `url('${imageUrl}')`;
            }
	else {
	    console.error(`Error: ${cardTitle}`); // Note the backticks around the entire string
	}

        } catch (error) {
            console.error("An error occurred while processing an image element:", imageElement, error);
        }
    }

    // --- Initial processing for elements present on DOMContentLoaded ---
    const initialImageElements = document.querySelectorAll('.image');
    initialImageElements.forEach(processImageElement);


    // 1. Get a reference to ALL buttons with the class 'add-objective'
    const addObjectiveButtons = document.querySelectorAll('.add-objective');

        addObjectiveButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                button.click()
                document.body.querySelectorAll('.image').forEach(processImageElement);
            });
        });




    const observer = new MutationObserver(() => {
        document.body.querySelectorAll('.image').forEach(processImageElement)



        // Select the target div
        const buttonsDiv = document.querySelector('.buttons');

        if (buttonsDiv) {
            // Only proceed with setting up the MutationObserver if the element exists

            // Create a new MutationObserver
            const observer2 = new MutationObserver(function(mutationsList) {
                for (const mutation of mutationsList) {
                    // Check if the mutation was an attribute change
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        // Check if the target of the mutation is one of the button elements
                        if (mutation.target.tagName === 'BUTTON') {
                            console.log('A button class has changed!');
                            // Execute your desired function here
                            document.body.querySelectorAll('.image').forEach(processImageElement)
                        }
                    }
                }
            });

            // Configure the observer to watch for attribute changes on child elements
            

            // Start observing the target div
            observer2.observe(buttonsDiv, {attributes: true,subtree: true, attributeFilter: ['class']});
        } 
        else {}



    })
    observer.observe(document.body, { childList: true, subtree: true });






});

