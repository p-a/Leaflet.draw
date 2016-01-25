/*
 * L.LatLngUtil contains different utility functions for LatLngs.
 */

L.LatLngUtil = {
	// Clones a LatLngs[], returns [][]
	cloneLatLngs: function (latlngs) {
		var clone = [];
	    for (var j = 0, k = latlngs.length; j < k; j++) {
			var temp = [];
			for (var i = 0, l = latlngs[j].length; i < l; i++) {
				temp.push(this.cloneLatLng(latlngs[j][i]));
			}
			clone.push(temp);
		}
		return clone;
	},

	cloneLatLng: function (latlng) {
		return L.latLng(latlng.lat, latlng.lng);
	}
};
