// Create your Token on AirTable here: https://airtable.com/create/tokens
// Make sure the BASE you want to display is listed under the APIKEY token set below
const apiKey = '';

function loadAppId() {
    const appId = localStorage.getItem('selectedAppId');
    if (appId) {
        // Code to use the loaded tableId
        return appId;
    }
}

function getTitle() {
    axios.get(`https://api.airtable.com/v0/meta/bases`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    }).then(response => {
        const bases = response.data.bases;
        bases.forEach(base => {
            if (base.id == tableId) {
                var title = base.name;
                document.title = title;
                titleElement.textContent = title;
            }
        });
    })
        .catch(error => {
            console.error('Error fetching data from Airtable:', error);
        });
}