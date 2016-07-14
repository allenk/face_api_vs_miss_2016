'use strict';

var https = require('https');
var querystring = require('querystring');

var api_key1 = 'bbd02add65ed47ec937df86c28b14c4b';
var api_key2 = 'f7dc1467fc4d4acabba9128056103e39';

var api_url = 'https://api.projectoxford.ai/face/v1.0/detect';

var urls = [
'https://s31.postimg.org/g1e6u49az/image.jpg',
'https://s31.postimg.org/8hjrtsqqz/image.jpg',
'https://s32.postimg.org/7iumvk5l1/image.jpg',
'https://s31.postimg.org/7xyk2p3dn/image.jpg',
'https://s32.postimg.org/j41vly7wl/image.jpg',
'https://s32.postimg.org/f0xqy586d/image.jpg',
'https://s31.postimg.org/qgz2b4qjv/image.jpg',
'https://s32.postimg.org/jjuts7jx1/image.jpg',
'https://s31.postimg.org/oc4lg1223/image.jpg',
'https://s32.postimg.org/5yprh21f9/image.jpg',
'https://s31.postimg.org/v16ji90kb/image.jpg',
'https://s31.postimg.org/vxmbjmrff/image.jpg',
'https://s32.postimg.org/9ckls53yd/image.jpg',
'https://s31.postimg.org/m157d8u3v/image.jpg',
'https://s32.postimg.org/sat2qi88l/image.jpg',
'https://s32.postimg.org/4pdqybsjp/image.jpg',
'https://s32.postimg.org/5viwx49lh/image.jpg',
'https://s32.postimg.org/yejdih6lx/image.jpg',
'https://s31.postimg.org/useh8wqhn/image.jpg',
'https://s31.postimg.org/az2dg7d3v/image.jpg',
'https://s32.postimg.org/c4sf0bxc5/image.jpg',
'https://s31.postimg.org/6o90cr8ln/image.jpg',
'https://s31.postimg.org/gbvt82qe3/image.jpg',
'https://s32.postimg.org/s553ss41x/image.jpg',
'https://s31.postimg.org/u12ghgeq3/image.jpg',
'https://s32.postimg.org/a49xc2zdh/image.jpg',
'https://s32.postimg.org/o1nfliu85/image.jpg',
'https://s32.postimg.org/ca486l2tx/image.jpg',
'https://s31.postimg.org/in76y86ej/image.jpg',
'https://s32.postimg.org/agdd15sat/image.jpg',
'https://s31.postimg.org/q46r23n8b/image.jpg',
'https://s31.postimg.org/lrku28m4b/image.jpg',
'https://s32.postimg.org/umc9m3vxx/image.jpg',
'https://s32.postimg.org/4eegiaool/image.jpg'
];

var faceIds = [];

var faceIds = [
  'f2bb4094-59ad-46d1-b2fe-02821faa2800',
  'ba5a9187-dd8a-46d5-89e6-bee3a407a31f',
  '5c858e78-28e7-4947-a882-46573c5be158',
  '3e631340-bf92-449f-a79b-19e19204a429',
  'cfda7e47-9ba8-4b8e-86a5-2431b5d94731',
  'c6ac3b62-f452-4ed2-a706-fb75c9985922',
  '13fbbd97-5155-42b8-9f60-d7ae1fbb2920',
  '9b4fe799-5652-4a7c-a93a-db4700097419',
  'b4f26176-b5c6-4d91-ab01-3695c3b1fb37',
  '2f4b4468-ff7f-4806-a9c9-423076273df3',
  '0f0908b2-250d-481b-a29e-3702fa83f440',
  'a3f68ce5-ad25-4dd3-b914-0f42fc0635c1',
  '26ea8005-6ec5-4533-a41f-549a638ce58a',
  '94ce0844-d180-41e1-b9fe-51dbcbaac237',
  '4e0af5b3-6731-4708-a96a-5e77be3d1c92',
  'c49fb570-8f7b-46ed-872d-aa5216812794',
  'b16d97ff-b362-4026-9701-5fbb6a654f95',
  'a69d2f54-c43c-4be1-99dc-a45985dd07d0',
  '3a6893b4-5aff-48c6-803e-c150b8700541',
  'bfe195cf-d296-4f10-a6be-9b9c9be9eb52',
  '1d548756-b364-4d45-9dee-a709a8256496',
  '71c830bf-ace3-4772-a35a-3448cb83862e',
  '4267b5da-e971-496e-8c97-93f67981e86e',
  '0a55e155-7814-42df-8025-ead0820f52c2',
  'a7c49bb4-9b0c-4f44-9412-5e5ae675cf46',
  '7d90a4eb-4fb2-4e4d-a2c3-140831a8ec2c',
  '626481c8-e4fe-4ebe-8825-1c74be73f92c',
  'ffdd6a76-c37b-4cb4-8e74-ac9b7aa3db60',
  '84b601db-b1d5-4e65-8a36-e98d83fa2652',
  '97bd0235-6420-4f5f-b484-8631d0ad1a08',
  '0ab5b30a-d6b8-499f-b0a3-4ec74d0be36e',
  'a590fa0c-0c34-4ec4-a43c-f3e1bfaf80a3',
  '195c206f-feda-40c4-a9d0-1cbfeb5260d2',
  '4a820016-2aab-4e93-82ec-f19a427f3ad4' 
];

var veryfy_result = [];
var a;
for(a=0; a<faceIds.length; a++) {
	veryfy_result[a] = [];
}

var detect = 0;
var verify = 0;
var group = 1;

urls.forEach(function(url, index){
	if(!detect)
		return;
	
	setTimeout(function(){
		console.log(url, index);

		var postData = JSON.stringify({
			 "url": urls[index]
		});
		
		var options = {
			hostname: 'api.projectoxford.ai',
			port: 443,
			path: '/face/v1.0/detect',
			method: 'POST',
			
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': Buffer.byteLength(postData),
				'Ocp-Apim-Subscription-Key': api_key1
			}
		};

		var req = https.request(options, (res) => {
			//console.log(`STATUS: ${res.statusCode}`);
			//console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
			res.setEncoding('utf8');

			res.on('data', (chunk) => {
				//console.log(`BODY: ${chunk}`);
				var obj = JSON.parse(chunk);
				var chunk0 = obj[0];
				var faceId = chunk0['faceId'];
				console.log(faceId);
				faceIds[index] = faceId;
				console.log(faceIds);
				console.log('');
			});

			res.on('end', () => {
				//console.log('No more data in response.')
			});
		});
		
		req.write(postData);
		req.end();
		
		}, index*5000);
});

// verify
var length = faceIds.length;
var i, j;
var delay = 0;
faceIds.forEach(function(id_i, i){
	if(!verify)
		return;
	
	faceIds.forEach(function(id_j, j){
		if(i>=j) {
			return;
		}

		setTimeout(function(){
			console.log(i, j);
			//console.log(id_i, id_j);

			var postData = JSON.stringify({
				 "faceId1": id_i,
				 "faceId2": id_j,
			});
			
			var options = {
				hostname: 'api.projectoxford.ai',
				port: 443,
				path: '/face/v1.0/verify',
				method: 'POST',
				
				headers: {
					'Content-Type': 'application/json',
					'Content-Length': Buffer.byteLength(postData),
					'Ocp-Apim-Subscription-Key': api_key1
				}
			};

			var req = https.request(options, (res) => {
				//console.log(`STATUS: ${res.statusCode}`);
				//console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
				res.setEncoding('utf8');

				res.on('data', (chunk) => {
					console.log(`BODY: ${chunk}`);
					var obj = JSON.parse(chunk);
					var confidence = obj.confidence;
					veryfy_result[i][j] = confidence;
										
					// print row
					if(j === length-1){
						console.log(veryfy_result);
						var k=0;
						var out = '';
						for(k=0; k<=j; k++){
							out = out.concat((veryfy_result[i][k])?(veryfy_result[i][k]):'').concat(',');
						}
						console.log(out);
					}
				});

				res.on('end', () => {
					//console.log('No more data in response.')
				});
			});
			
			req.write(postData);
			req.end();
			
		}, delay*5000);

		delay++;
	});
});

if (group === 1) {
	var postData = JSON.stringify({
		 "faceIds": faceIds
	});
	
	var options = {
		hostname: 'api.projectoxford.ai',
		port: 443,
		path: '/face/v1.0/group',
		method: 'POST',
		
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': Buffer.byteLength(postData),
			'Ocp-Apim-Subscription-Key': api_key1
		}
	};

	var req = https.request(options, (res) => {
		//console.log(`STATUS: ${res.statusCode}`);
		//console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
		res.setEncoding('utf8');

		res.on('data', (chunk) => {
			//console.log(`BODY: ${chunk}`);
			var obj = JSON.parse(chunk);
			var out = JSON.stringify(obj,null,4);
			console.log(out);
		});

		res.on('end', () => {
			//console.log('No more data in response.')
		});
	});
	
	req.write(postData);
	req.end();	
}