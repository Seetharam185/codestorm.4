async function trackTrain() {
    const trainNumber = document.getElementById('train-number').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Fetching data...";

    try {
        const response = await fetch(`API_URL/trains/${trainNumber}`);
        const data = await response.json();

        if (response.ok) {
            displayTrainInfo(data);
        } else {
            resultDiv.innerHTML = `Error: ${data.message || 'Unable to fetch data'}`;
        }
    } catch (error) {
        resultDiv.innerHTML = `Error: ${error.message}`;
    }
}

function displayTrainInfo(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Train Details</h2>
        <p><strong>Train Name:</strong> ${data.trainName}</p>
        <p><strong>Current Status:</strong> ${data.status}</p>
        <p><strong>Next Station:</strong> ${data.nextStation}</p>
        <p><strong>Arrival Time:</strong> ${data.arrivalTime}</p>
        <p><strong>Departure Time:</strong> ${data.departureTime}</p>
    `;
}
