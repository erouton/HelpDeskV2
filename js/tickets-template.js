const tickets = [
    {id: 1, title: "Login page broken", priority: "high", status: "pending"},
    {id: 2, title: "Email not sending", priority: "medium", status: "pending"},
    {id: 3, title: "Not charging", priority: "low", status: "pending"}
];

function renderTickets(tickets) {
    const container = document.getElementById("ticket-container");

    if (tickets.length === 0) {
        container.innerHTML = "<p>No, Pending Tickets</p>";
        return container;
    }

    container.innerHTML = tickets.map(ticket => `
        <div class="ticket-card" data-priority="${ticket.priority}">
            <h3>#${ticket.id} - ${ticket.title}</h3>
            <p>Priority: ${ticket.priority}</p>
            <p>Status: ${ticket.status}</p>
        </div>
        `).join("");
}

renderTickets(tickets);