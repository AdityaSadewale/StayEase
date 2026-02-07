const hotels = [
  { name: "Grand Palace Hotel", price: 4500, rating: "⭐⭐⭐⭐⭐" },
  { name: "City View Inn", price: 3200, rating: "⭐⭐⭐⭐" },
  { name: "Budget Stay", price: 1800, rating: "⭐⭐⭐" }
];

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  showHotels();
});

function showHotels() {
  const list = document.getElementById("hotelList");
  list.innerHTML = "";

  hotels.forEach(hotel => {
    const card = document.createElement("div");
    card.className = "hotel-card";

    card.innerHTML = `
      <h3>${hotel.name}</h3>
      <p class="price">₹${hotel.price} <span>/ room / day</span></p>
      <p>Rating: ${hotel.rating}</p>
      <button onclick="bookHotel('${hotel.name}')">Book Now</button>
    `;

    list.appendChild(card);
  });
}

function bookHotel(name) {
  alert("Booking started for " + name);
}

function contactSupport() {
  alert("Support team available 24/7.");
}

function scrollToSearch() {
  document.getElementById("search").scrollIntoView({ behavior: "smooth" });
}
