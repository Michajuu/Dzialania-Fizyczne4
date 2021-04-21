
function Oblicz()
{
    let V0 = document.getElementById("V0").value;
    let h = document.getElementById("h").value;
let a = document.getElementById("S");
a.innerHTML = V0 * Math.sqrt((2*h)/9.81);
}
