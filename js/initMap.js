function initMap() {
	map = new BMap.Map("container",{minZoom:5,maxZoom:6});          // 创建地图实例
	/*map.addControl(new BMap.MapTypeControl());   	*/					//添加地图类型控件
	map.setMapStyle({
	  styleJson:[
	          {
	                    "featureType": "road",
	                    "elementType": "all",
	                    "stylers": {
	                              "visibility": "off"
	                    }
	          },
	          {
	                    "featureType": "label",
	                    "elementType": "all",
	                    "stylers": {
	                              "visibility": "off"
	                    }
	          }
		]
	});

	map.centerAndZoom(new BMap.Point(96.000, 37.000), 5);  			// 初始化地图,设置中心点坐标和地图级别
	map.enableScrollWheelZoom();
	/*map.addEventListener("click",function(e){
		alert(e.point.lng + "," + e.point.lat);
	});*/										//单击获取点击的经纬度
}