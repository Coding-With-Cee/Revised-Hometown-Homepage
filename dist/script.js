var images = [
  "https://cdn.londonandpartners.com/asset/56d4e8a5cb9a34b62eff32c35a78f347.jpg",
  "https://media.istockphoto.com/id/487511908/photo/kensington-palace-and-gardens-london-england-united-kingdom.jpg?s=612x612&w=0&k=20&c=CL7_CeWrvnbePzW7pZM7g_PYus8TglNisIVpxcrqxG0=",
  "https://media.istockphoto.com/id/476461232/photo/wembley-stadium-in-london-uk.jpg?s=612x612&w=0&k=20&c=C24Nlj-W65Ome8PUEqDuISmDlilv_XfENrTeVMnjMVA="
];

let currentIndex = 0;
const imageElement = document.getElementById("images");

imageElement.src = images[currentIndex];

document.getElementById("previous_button").addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  imageElement.src = images[currentIndex];
});

document.getElementById("next_button").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex];
});