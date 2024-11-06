<!DOCTYPE html>
<html>
<head>
    <title>Leaflet Map Example</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
</head>
<body>
    <div id="map" style="height: 600px;"></div>

    <script>
        var map = L.map('map').setView([56.95, 24.1], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);
    </script>
</body>
</html>

