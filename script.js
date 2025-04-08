const donors = [
  { name: "Rahul Kumar", blood: "A+", phone: "9876543210" },
  { name: "Priya Sharma", blood: "O-", phone: "9123456789" },
  { name: "Amit Singh", blood: "B+", phone: "9988776655" }
];

function showList() {
  document.getElementById('home').classList.add('hidden');
  document.getElementById('list').classList.remove('hidden');

  const listDiv = document.getElementById('donor-list');
  listDiv.innerHTML = '';
  donors.forEach(donor => {
    const card = document.createElement('div');
    card.className = 'donor-card';
    card.innerHTML = `
      <strong>${donor.name}</strong><br>
      Blood Group: ${donor.blood}<br>
      Phone: <a href="tel:${donor.phone}">${donor.phone}</a>
    `;
    listDiv.appendChild(card);
  });
}

function showHome() {
  document.getElementById('list').classList.add('hidden');
  document.getElementById('home').classList.remove('hidden');
}
