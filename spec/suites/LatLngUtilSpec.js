describe("L.LatLngUtil", function () {
	it("cloneLatLngs", function () {
		var latLngs = [[{ lat: 0, lng: 0 }], [{ lat: 1, lng: 2 }]];
		var	clone = L.LatLngUtil.cloneLatLngs(latLngs);

		expect(clone[0][0].lat).to.eql(latLngs[0][0].lat);
		expect(clone[1][0].lat).to.eql(latLngs[1][0].lat);
		clone[0][0].lat = 10;
		expect(latLngs[0][0].lat).to.eql(0);
	});
});
