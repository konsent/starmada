function formatFleetText(fleet) {
    let output = `Name: ${fleet.name}\n`;
    output += `Faction: ${fleet.faction.charAt(0).toUpperCase() + fleet.faction.slice(1)}\n`; // Capitalize first letter
    output += `Commander: ${fleet.commander ? fleet.commander.title + (fleet.commander.legacy ? " [Legacy]" : ""): ''}\n\n`;

    output += `Assault: ${fleet.assault ? fleet.assault.title : ''}\n`;
    output += `Defense: ${fleet.defense ? fleet.defense.title : ''}\n`;
    output += `Navigation: ${fleet.navigation ? fleet.navigation.title : ''}\n\n`;

    // Handle empty ships array
    if (fleet.ships.length > 0) {
        fleet.ships.forEach(ship => {
            let shipPoints = ship.points;
            let shipTitle = ship.title + (ship.legacy ? " [Legacy]" : "");
            output += `${shipTitle} (${ship.points})\n`;
            for (const upgradeType in ship.upgrades) {
                const upgrade = ship.upgrades[upgradeType];
                if (upgrade && upgrade.title) {
                    let upgradeTitle = upgrade.title + (upgrade.legacy ? " [Legacy]" : "");
                    output += `• ${upgradeTitle} (${upgrade.points})\n`;
                    shipPoints += upgrade.points;
                }
            }
            output += `= ${shipPoints} Points\n\n`;
        });
    }

    output += `Squadrons:\n`;
    if (fleet.squadrons.length > 0) {
        fleet.squadrons.forEach(squadron => {
            const squadronPoints = squadron.points * squadron.quantity;
            let squadronTitle = squadron.title + (squadron.legacy ? " [Legacy]" : "");
            output += `• ${squadron.quantity > 1 ? `${squadron.quantity} x ` : ''}${squadronTitle} (${squadronPoints})\n`;
        });
        output += `= ${fleet.points.squadron} Points\n\n`;
    } else {
        output += `= 0 Points\n\n`;
    }

    output += `Total Points: ${fleet.points.total}`;

    return output;
}



// Get the export button element
const exportButton = document.querySelector('.export');

// Add a click event listener to the export button
exportButton.addEventListener('click', () => {

    const fileContent = formatFleetText(fleetBuilder.fleet)

    const customTitle = "export";


    const pageContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${customTitle}</title> <style>


		body {
			font: 400 15px/20px monospace;
			white-space: nowrap;
			margin: 20px;
			max-width: 100%; }

		p {margin:20px 0;}
		a {font-size:11px;}

		@media (max-width: 900px) {
			body {font-size:13px; line-height:16px;}
		}

	
            </style>
        </head>
        <body>
            <pre>${fileContent}</pre>
        </body>
        </html>
    `;

    // Create a Blob object from the HTML content with HTML MIME type
    const blob = new Blob([pageContent], { type: 'text/html;charset=utf-8' });

    // Create a URL for the Blob
    const blobUrl = URL.createObjectURL(blob);

    // Open the Blob URL in a new tab
    const newWindow = window.open(blobUrl, '_blank');

    // Optional: You might want to revoke the Blob URL after a short delay
    // or after the new window has loaded, to free up resources.
    // For simple text, immediate revocation is usually fine as the browser
    // likely copied the content already.
    if (newWindow) {
        // If the new window opened successfully, revoke the URL after a small delay
        // to allow the browser to process the URL and display the content.
        setTimeout(() => {
    URL.revokeObjectURL(blobUrl);
        }, 100); // 500ms should be sufficient
    } else {
        alert('Pop-up blocked! Please allow pop-ups for this site to open the text.');
    }

    console.log('Fleet exported in new tab');
});