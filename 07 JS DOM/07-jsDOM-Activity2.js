function calculateVolume()
{
    //The formula to calculate the volume of a sphere is 4/3 * π * r^3
    let radius = document.getElementById("radius").value; // Get the value of the radius input
    let volume = 4/3 * Math.PI  * radius**3; // Calculate the volume of the sphere using the formula

    document.getElementById("volume").value = volume; // Display the result
}