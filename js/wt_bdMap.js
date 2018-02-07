//��Ҫ���ؽӿڣ�Ҫ�ں����⣬��֤�ȼ���
document.write('<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=A739765f9a84bee561d30fa0b537ccb9"></script>');
document.write('<script charset=utf-8 type="text/javascript" src="http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.js"></script>');
document.write('<link charset=utf-8 rel="stylesheet" href="http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css" />');
var bdMapDestination; //ȫ���յ�λ��

//��ʾ��ͼ
//��������ʾ����ID������(city,addr,title,lawfirm,tel,user,mapx,pic,ismove,piobj,zoom)
function ShowMap(objname,options){
	if(options){
		this._city = options.city ? options.city : ""; //����
		this._addr = options.addr ? options.addr : ""; //��ַ
		this._title = options.title ? options.title : ""; //��Ϣ���ڱ���
		this._lawfirm = options.lawfirm ? options.lawfirm : ""; //����
		this._tel = options.tel ? options.tel : ""; //�绰
		this._user = options.user ? options.user : ""; //����
		this._mapx = options.mapx ? options.mapx : ""; //��ͼ����
		this._pic = options.pic ? options.pic : ""; //ͼƬ
		this._ismove = options.ismove ? options.ismove : "0"; //�Ƿ��϶���1Ϊ�϶�Ϊ���ñ�ע��0Ϊ��ʾ��Ĭ��0
		this._piobj = options.piobj ? options.piobj : ""; //�����϶�����ı�ID
		this._zoom = options.zoom ? options.zoom : "14"; //�Ŵ󼶱�Ĭ��14
	}
	//�趨��ʼ����
	var point=new BMap.Point(113.63156,34.83794);
	//��ΧΪ3-18��
	var zoom=parseInt(this._zoom); //ҪתΪ����

	//������ͼ
	var map = new BMap.Map(objname);
	map.enableScrollWheelZoom();
	map.centerAndZoom(point, zoom);//���ʼ����ͼ��

	//���ͼ���������ͼ�ؼ�
	var ctrlOve = new BMap.OverviewMapControl({
		anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
		isOpen: 1
	});
	map.addControl(ctrlOve);

	//���ð�Ȩ�ؼ�λ��
	var cr = new BMap.CopyrightControl({anchor: BMAP_ANCHOR_TOP_LEFT});
	map.addControl(cr); //��Ӱ�Ȩ�ؼ�
	var bs = map.getBounds(); //���ص�ͼ��������
	cr.addCopyright({id: 1, content: "<a href='http://www.shalisoft.com' style='font-size:12px;'></a>", bounds: bs});

	//���겻Ϊ��ʱ��������ʾ
	if (this._mapx != ""){
		var mx=this._mapx.substr(0,this._mapx.indexOf(","));
		var my=this._mapx.substr(this._mapx.indexOf(",")+1);
		point=new BMap.Point(mx,my);
		map.centerAndZoom(point, zoom); //���µ���λ��
	}
	//���򰴵�ַ��ʾ
	else if (this._addr != ""){
		//������ַ������ʵ��   
		var myGeo = new BMap.Geocoder();    
		//����ַ���������ʾ�ڵ�ͼ�ϣ���������ͼ��Ұ���˹���Ϊ�첽������Ҫ�����ע 
		myGeo.getPoint(this._addr, function(poi){
			map.centerAndZoom(poi, zoom);
			marker.setPosition(poi); //�ص���עλ��
			//���蹫����ѯ�յ�
			bdMapDestination="latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:"+this._lawfirm;
		}, this._city);
	}
	//���򰴳�����ʾ
	else if (this._city != ""){
		map.setCenter(this._city); //���õ�ͼ���ĵ㡣
		//�˶�λ�޾������꣬������ʾģʽʱҪ�����ע��Ҫ��ʱ����
		if (this._ismove=="0"){setTimeout(function(){map.clearOverlays();}, 1000);}
	}
	//��Ϊ�հ�IP��λ
	else{
		//����һ����ȡ���س���λ�õ�ʵ��
		var myCity = new BMap.LocalCity();
		//��ȡ����
		myCity.get(function(result){map.setCenter(result.name);});
		if (this._ismove=="0"){setTimeout(function(){map.clearOverlays();}, 1000);}
	}

	//������ע
	var marker = new BMap.Marker(point);
	map.addOverlay(marker); // ����ע��ӵ���ͼ��
	
	//���ñ�עʱ
	if (this._ismove=="1"){
		marker.enableDragging(); //����ק
		var label = new BMap.Label("��ק������λ��",{offset:new BMap.Size(20,-15)});
		label.setStyle({ backgroundColor:"red", color:"white", fontSize : "12px" });
		marker.setLabel(label);

		var poj=this._piobj; //�����ﲻ֧��this��Ҫ��������
		
		//��ק����λ��
		marker.addEventListener("dragend", function(e){
			try{document.getElementById(poj).value = e.point.lng + "," + e.point.lat;}catch (ex) {}
		});
		//�������λ��
		map.addEventListener("click", function(e){
			marker.setPosition(e.point); //�ص���עλ��
			try{document.getElementById(poj).value = e.point.lng + "," + e.point.lat;}catch (ex) {}
		});
	}

	//��ʾ��עʱ
	if (this._ismove=="0"){
		//marker.setAnimation(BMAP_ANIMATION_BOUNCE); //�����Ķ���
		bdMapDestination="latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:"+this._lawfirm;
		
		//��ʾ��������
		//var opts = {width:250,height:130,title : "<font color=green size=3>" + this._title + "</font>"} //���ڱ���
		//var infotxt="<table border='0'><tr><td valign='top'>"; //��������
		//if (this._pic != ""){infotxt += "<img src='"+this._pic+"' id='picid' style='padding-right:5px;' width=50>";}
		//infotxt += "</td><td style='font-size:12px;line-height:16px;'>";
		//if (this._lawfirm !=""){infotxt += "<b>������</b>" + this._lawfirm + "<br/>";};
		//if (this._addr !=""){infotxt += "<b>��ַ��</b>" + this._addr + "<br/>";};
		//if (this._tel !=""){infotxt += "<b>�绰��</b>" + this._tel + "<br/>";};
		//if (this._user !=""){infotxt += "<b>���Σ�</b>" + this._user + "<br/>";};
		//infotxt += "</td></tr>";
		//infotxt += "<tr><td colspan='2' style='font-size:12px;'>��㣺<input type='text' name='region' id='region' style='border:1px #cccccc solid;width:100px;'><input type='hidden' value='"+this._city+"' id='city'> <input type='button' value='����' onclick='gotobaidu(1)' style='border:1px #cccccc solid;background:#F8F8F8;'/> <input type='button' value='�ݳ�' onclick='gotobaidu(2)' style='border:1px #cccccc solid;background:#F8F8F8;'/></td></tr>";
		//infotxt += "</table>";

		//��ʾ�ı�����
		var label2 = new BMap.Label(this._title,{offset:new BMap.Size(20,-15)});
		label2.setStyle({ backgroundColor:"red", color:"white", fontSize : "12px" });
		marker.setLabel(label2);
		
		//searchInfoWindow��ʾ����
		var content = '<div style="margin:0;line-height:20px;padding:2px;">';
		if (this._pic != ""){ content += '<img src="' + this._pic + '"style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>'; }
		if (this._addr != ""){ content += "��ַ��" + this._addr + "<br/>"; }
		if (this._tel != ""){ content += "�绰��" + this._tel + "<br/>"; }
		if (this._user != ""){ content += "������" + this._user + "<br/>"; }
		if (this._lawfirm !=""){ content += "��飺" + this._lawfirm; }
		content += "</div>";

		//����������Ϣ���ڶ���
		var searchInfoWindow = null;
		searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : this._title,      //����
			width  : 290,             //���
			//height : 100,              //�߶ȡ�ȥ��Ϊ�Զ�
			panel  : "panel",         //����������
			enableAutoPan : true,     //�Զ�ƽ��
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //�ܱ߼���
				BMAPLIB_TAB_TO_HERE,  //������ȥ
				BMAPLIB_TAB_FROM_HERE //���������
			]
		});

		//������Ϣ���ڡ�����searchInfoWindow��ʾ
		//var infoWindow = new BMap.InfoWindow(infotxt,opts);
		marker.addEventListener("mouseover", function(){
			searchInfoWindow.open(marker);
		//	this.openInfoWindow(infoWindow);
			//ͼƬ��������ػ�infowindow����ֹ�����ٽ�����ͼƬδ����ʱ�����ɵ���Ϣ��߶ȱ�ͼƬ���ܸ߶�С������ͼƬ���ֱ�����
		//	document.getElementById('picid').onload = function (){infoWindow.redraw();}
		});
	}
}

//������ѯ
function gotobaidu(k){
	var qd=document.getElementById("region");
	var zd=bdMapDestination;
	var ct=document.getElementById("city").value;
	if (qd.value==""){
		alert("���������");
		qd.focus();
		return false;
	}
	if(ct==""){ct="֣��"};
	var mode=(k=="1"?"transit":"driving");
	var url="http://api.map.baidu.com/direction?output=html&mode="+mode+"&region="+ct+"&origin="+qd.value+"&destination="+zd+"&src=88148|88148.com";
	window.open(url);
}

//��ȡ����λ��,�����
//�ٶȲ�ѯ�ӿ�Ϊ�첽����������Ҫ���첽�ص���ʽ
function getBDAddress(callBackFun,spStr){
	if (!spStr){spStr="";} //�ָ�����Ĭ�Ͽ�
	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var point = new BMap.Point(r.point.lng,r.point.lat);
			var gc = new BMap.Geocoder();    
			gc.getLocation(point, function(rs){
				var addComp = rs.addressComponents;
				var addVal = addComp.province + spStr + addComp.city + spStr + addComp.district + spStr + addComp.street + spStr + addComp.streetNumber;
				callBackFun(addVal);
			});
		}
	},{enableHighAccuracy: true})
}