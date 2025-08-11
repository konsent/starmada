document.addEventListener('DOMContentLoaded', function() {
    /**
     * Handles the saving of the fleet data to a text file.
     * This function serializes the `window.fleetBuilder.fleet` object
     * to a JSON string and then triggers a download of this string
     * as a text file.
     */
    function saveFleetData() {
        // Ensure the fleetBuilder object and fleet property exist
        if (window.fleetBuilder && window.fleetBuilder.fleet) {
            try {
                // Convert the fleet object to a JSON string with pretty printing
                const fleetData = JSON.stringify(window.fleetBuilder.fleet, null, 2);

                // Create a Blob containing the fleet data as plain text
                const blob = new Blob([fleetData], { type: 'text/plain;charset=utf-8' });

                // Get the fleet name for the filename, defaulting to 'untitled-fleet'
                const fleetName = window.fleetBuilder.fleet.name ?
                                  window.fleetBuilder.fleet.name.replace(/[\\/:*?"<>|]/g, '_') :
                                  'untitled-fleet';

                // Create a temporary anchor element for downloading the file
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = `${fleetName}.txt`; // Set the filename

                // Programmatically click the anchor to trigger the download
                document.body.appendChild(a); // Append to body is required for Firefox
                a.click();

                // Clean up the temporary URL and element
                document.body.removeChild(a);
                URL.revokeObjectURL(a.href);


            } catch (error) {
                console.error('Error saving fleet data:', error);
            }
        } else {
            console.warn('window.fleetBuilder.fleet object not found. Cannot save fleet data.');
        }
    }

    // --- Event Listeners ---

    // 1. Listen for clicks on the "save-fleet" button
    const saveButton = document.getElementById('save-fleet');
    if (saveButton) {
        saveButton.addEventListener('click', saveFleetData);
    } else {
        console.warn('Button with ID "save-fleet" not found. Ctrl+S will still work.');
    }

    // 2. Listen for Ctrl+S key combination
    document.addEventListener('keydown', function(event) {
        // Check for Ctrl (or Command on Mac) and 'S' key
        if ((event.ctrlKey || event.metaKey) && event.key === 's') {
            event.preventDefault(); // Prevent the browser's default save dialog
            saveFleetData();
        }
    });

});
