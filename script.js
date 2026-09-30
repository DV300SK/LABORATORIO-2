const lienzo = document.getElementById("lienzo");
if (lienzo) {
const ctx = lienzo.getContext("2d");
ctx.fillStyle = "#1F4E79";
ctx.fillRect(0, 0, lienzo.width, lienzo.height);
ctx.fillStyle = "#FFFFFF";
ctx.font = "22px Arial";
ctx.fillText("¡Gracias por visitarnos!", 20, 50);
}