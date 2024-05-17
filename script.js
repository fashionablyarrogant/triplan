document.getElementById('travel-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const notes = document.getElementById('notes').value;

    const planList = document.getElementById('plan-list');

    const listItem = document.createElement('li');
    listItem.classList.add('plan-item');
    listItem.innerHTML = `<h3>${destination}</h3>
                          <p><strong>Start Date:</strong> ${startDate}</p>
                          <p><strong>End Date:</strong> ${endDate}</p>
                          <p>${notes}</p>`;

    planList.appendChild(listItem);

    document.getElementById('travel-form').reset();
});
