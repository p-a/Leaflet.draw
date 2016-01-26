/*
 * L.LatLngUtil contains different utility functions for LatLngs.
 */

L.LatLngUtil = {
	// Clones a LatLngs[], returns [][]
	cloneLatLngs: function (latlngs) {
		if (!latlngs) {
			return null;
		}

		if (latlngs instanceof L.LatLng || !!latlngs.lat) {
			return L.latLng(latlngs);
		}

		var flat = latlngs[0] instanceof L.LatLng || typeof latlngs[0] === 'object' && 'lat' in latlngs[0];
		var clone = [];
		var i, j;
		if (flat) {
			for (j = 0; j < latlngs.length; j++) {
				clone.push(this.cloneLatLng(latlngs[j]));
			}
		} else {
			for (j = 0; j < latlngs.length; j++) {
				var temp = [];
				for (i = 0; i < latlngs[j].length; i++) {
					temp.push(this.cloneLatLng(latlngs[j][i]));
				}
				clone.push(temp);
			}
		}
		return clone;
	},

	cloneLatLng: function (latlng) {
		return L.latLng(latlng.lat, latlng.lng);
	}

};
