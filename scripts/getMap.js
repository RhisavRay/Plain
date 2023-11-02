var map;

function loadMap()
{
    map = new Microsoft.Maps.Map(document.getElementById('mapComponent'), {
        center: new Microsoft.Maps.Location(20.5937, 78.9629),
        zoom: 5
    })
}