function addAirport(lng, lat, name) {
	var _location = new BMap.Point(lng, lat);
	var _icon = new BMap.Icon("/baiduMap/icons/airport2.png", new BMap.Size(8,8));
	/*var _marker = new BMap.Marker(_location,{icon:_icon});  // 创建标注*/
	var _marker = new BMap.Marker(_location);  // 创建标注
	map.addOverlay(_marker);              // 将标注添加到地图中

	/*var _label = new BMap.Label(name,{offset:new BMap.Size(0,0)});
		_label.setStyle({ color : "#666", fontSize : "10px",fontFamily : "微软雅黑", border : "none", background : "none", }) ;
		_marker.setLabel(_label);*/
}