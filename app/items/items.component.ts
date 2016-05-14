import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Item } from 'app/items/item';
import { ItemComponent } from './item.component';
@Component({
	selector:'items-list',
	templateUrl:'app/items/views/items.tmpl.html',
	directives: [ItemComponent]
	 styleUrls:['app/items/styles/items.style.css']
})

export class ItemsComponent {
	items: Items[] = [
		 {
		"itemId": 42608121,
		"parentItemId": 42608121,
		"name": "Apple iPod touch 16GB, Assorted Colors",
		"salePrice": 195,
		"upc": "888462350624",
		"categoryPath": "Electronics/Portable Audio/Apple iPods",
		"shortDescription": "&lt;p&gt;Whether you're an avid gamer looking for a more powerful way to play, a music devotee seeking a better portable music experience, or a hobbyist photographer with an adventurous streak, the Apple 16 GB iPod touch packs a host of awesome features into a sleek package. A stunningly crisp 4-inch Retina display, a powerful A8 chip and M8 motion coprocessor make for a beautifully detailed, highly responsive gaming experience. Connect to Wi-Fi to FaceTime with friends and family, download music and games, send messages to your friends or post to social media. Capture the fun of impromptu gatherings with the iPod's 8-megapixel iSight camera with exposure control and improved HDR and face detection. And of course, the iPod touch is a sleek way to keep your music with you, and access the iTunes Store to grab your next favorite album. Attractive and designed to go with you everywhere, the iPod touch is available in 5 stunning colors to suit anyone's taste.&lt;/p&gt;",
		"longDescription": "&lt;b&gt;Apple iPod touch 16GB, Assorted Colors:&lt;/b&gt;&lt;div style=&quot;margin-left: 2em&quot;&gt;&lt;b&gt;Key Features:&lt;/b&gt;&lt;/div&gt;&lt;ul&gt;&lt;li&gt;4-inch Retina display&lt;/li&gt;&lt;li&gt;A8 with M8 motion coprocessor&lt;/li&gt;&lt;li&gt;8MP iSight &amp; FaceTime cameras&lt;/li&gt;&lt;li&gt;1080p HD video recording&lt;/li&gt;&lt;li&gt;802.11ac Wi-Fi &amp; Bluetooth 4.1&lt;/li&gt;&lt;li&gt;Up to 40 hours audio playback&lt;/li&gt;&lt;/ul&gt;&lt;div style=&quot;margin-left: 2em&quot;&gt;&lt;b&gt;Legal&lt;/b&gt;&lt;br&gt;iPod models are not available in all colors at all resellers.&lt;br&gt;Membership required. Requires initial sign-up. At the end of the trial period, the membership will automatically renew and payment method will be charged on a monthly basis until autorenewal is turned off in account settings.&lt;br&gt;FaceTime calling requires a FaceTime-enabled device with a Wi-Fi connection.&lt;br&gt; Display size is measured diagonally.&lt;br&gt;Rechargeable batteries have a limited number of charge cycles and may eventually need to be replaced. Battery life and number of charge cycles vary by use and settings. See www.apple.com/batteries for more information.&lt;br&gt;TM and (C) 2015 Apple Inc. All rights reserved.&lt;/div&gt;",
		"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-797e/k2-_15228eed-b202-4bcb-ae55-cc7c31480e42.v6.jpg",
		"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-52bd/k2-_ae3be777-76da-4d15-bc69-5d449589a4ef.v6.jpg",
		"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-3356/k2-_e938d1c6-86ca-4ad0-a297-037352c9ea17.v6.jpg",
		"productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Fwww.walmart.com%252Fip%252FApple-iPod-touch-16GB-Assorted-Colors%252F42608121%253Faffp1%253DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%2526affilsrc%253Dapi",
		"standardShipRate": 0,
		"marketplace": false,
		"modelNumber": "MKH62LL/A",
		"productUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPod-touch-16GB-Assorted-Colors%2F42608121%3Faffp1%3DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
		"customerRating": "4.79",
		"numReviews": 114,
		"customerRatingImage": "http://i2.walmartimages.com/i/CustRating/4_8.gif",
		"categoryNode": "3944_96469_1057284",
		"bundle": false,
		"stock": "Available",
		"addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D42608121%7C1%26affp1%3DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
		"affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D42608121%257C1%2526affp1%253DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%2526affilsrc%253Dapi",
		"giftOptions": {
			"allowGiftWrap": false,
			"allowGiftMessage": false,
			"allowGiftReceipt": false
		},
		"imageEntities": [
			{
				"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-72ea/k2-_799c8e73-6db0-40b0-87e0-832eaa05036a.v1.jpg",
				"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-8b5f/k2-_18cd6ae3-820b-4e2b-971d-18fcda472817.v1.jpg",
				"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-6697/k2-_721e6cd8-a767-4757-aa8e-dbbd543449a5.v1.jpg",
				"entityType": "SECONDARY"
			},
			{
				"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-797e/k2-_15228eed-b202-4bcb-ae55-cc7c31480e42.v6.jpg",
				"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-52bd/k2-_ae3be777-76da-4d15-bc69-5d449589a4ef.v6.jpg",
				"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-3356/k2-_e938d1c6-86ca-4ad0-a297-037352c9ea17.v6.jpg",
				"entityType": "PRIMARY"
			}
		],
		"availableOnline": true
    },
    {
		"itemId": 46088111,
		"parentItemId": 46088111,
		"name": "Apple iPod touch 64GB (6th Generation - Latest Model), Assorted Colors",
		"msrp": 297,
		"salePrice": 276,
		"upc": "888462351775",
		"categoryPath": "Electronics/Portable Audio/Apple iPods",
		"shortDescription": "&lt;div style=&quot;margin-left: 2em&quot;&gt;iPod touch is the perfect way to carry your music collection in your pocket. Now in 5 stunning colors. Listen to your favorite songs from Apple Music1 and iTunes. iPod touch offers the ultimate mobile gaming experience. Take great photos and videos with the new 8MP iSight camera and make video calls with the improved FaceTime HD camera.2 And stay connected with Messages and the most popular social networking apps. All on a 4-inch Retina display.3&lt;/div&gt;",
		"longDescription": "&lt;div style=&quot;margin-left: 2em&quot;&gt;&lt;b&gt;Key Features&lt;/b&gt;&lt;/div&gt;&lt;ul&gt;&lt;li&gt;4-inch Retina display3&lt;/li&gt;&lt;li&gt;A8 with M8 motion coprocessor&lt;/li&gt;&lt;li&gt;8MP iSight &amp; FaceTime cameras&lt;/li&gt;&lt;li&gt;1080p HD video recording&lt;/li&gt;&lt;li&gt;802.11ac Wi-Fi &amp; Bluetooth 4.1&lt;/li&gt;&lt;li&gt;Up to 40 hours audio playback4&lt;/li&gt;&lt;/ul&gt;&lt;div style=&quot;margin-left: 2em&quot;&gt;&lt;b&gt;Legal&lt;/b&gt;&lt;br&gt;iPod models are not available in all colors at all resellers.&lt;br&gt;1 Membership required. Requires initial sign-up. At the end of the trial period, the membership will automatically renew and payment method will be charged on a monthly basis until autorenewal is turned off in account settings.&lt;br&gt;2 FaceTime calling requires a FaceTime-enabled device with a Wi-Fi connection.&lt;br&gt;3 Display size is measured diagonally.&lt;br&gt;4 Rechargeable batteries have a limited number of charge cycles and may eventually need to be replaced. Battery life and number of charge cycles vary by use and settings. See www.apple.com/batteries for more information.&lt;br&gt;TM and &copy; 2015 Apple Inc. All rights reserved.&lt;/div&gt;",
		"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-1c45/k2-_d67282b5-9e67-47f6-a143-d30f491cf6eb.v5.jpg",
		"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-e8c3/k2-_5a546450-64f2-4d4e-82c5-ef0b79c6b223.v5.jpg",
		"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-bf2c/k2-_b9ce225e-ad75-4afd-b906-e4fcd144a727.v5.jpg",
		"productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Fwww.walmart.com%252Fip%252FApple-iPod-touch-64GB-6th-Generation-Latest-Model-Assorted-Colors%252F46088111%253Faffp1%253DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%2526affilsrc%253Dapi",
		"standardShipRate": 0,
		"marketplace": false,
		"modelNumber": "MKHL2LL/A",
		"productUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPod-touch-64GB-6th-Generation-Latest-Model-Assorted-Colors%2F46088111%3Faffp1%3DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
		"customerRating": "4.52",
		"numReviews": 17,
		"customerRatingImage": "http://i2.walmartimages.com/i/CustRating/4_5.gif",
		"categoryNode": "3944_96469_1057284",
		"bundle": false,
		"stock": "Available",
		"addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D46088111%7C1%26affp1%3DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
		"affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D46088111%257C1%2526affp1%253DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%2526affilsrc%253Dapi",
		"giftOptions": {
			"allowGiftWrap": false,
			"allowGiftMessage": false,
			"allowGiftReceipt": false
		},
		"imageEntities": [
			{
				"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-7341/k2-_7f4b73f9-9209-4cf4-8f63-1df99a42548d.v1.jpg",
				"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-4ac6/k2-_b75260e8-3b39-4c06-b5c2-24281673096e.v1.jpg",
				"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-beff/k2-_e4b8a7a4-b24b-4309-81a1-20a901cd9d78.v1.jpg",
				"entityType": "SECONDARY"
			},
			{
				"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-a484/k2-_f9a38fe7-8fda-485d-b080-29f765fecd23.v1.jpg",
				"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-f1d1/k2-_aca444b9-7d02-410f-8270-90fdf4cab969.v1.jpg",
				"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-6eeb/k2-_52f997e1-ec56-4198-b407-c7e5c92e4e1d.v1.jpg",
				"entityType": "SECONDARY"
			},
			{
				"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-1c45/k2-_d67282b5-9e67-47f6-a143-d30f491cf6eb.v5.jpg",
				"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-e8c3/k2-_5a546450-64f2-4d4e-82c5-ef0b79c6b223.v5.jpg",
				"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-bf2c/k2-_b9ce225e-ad75-4afd-b906-e4fcd144a727.v5.jpg",
				"entityType": "PRIMARY"
			},
			{
				"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-8394/k2-_fbf73f13-8926-46eb-bd36-d7c31141d690.v1.jpg",
				"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-e092/k2-_b5584f37-e9b3-4482-986a-034957eaceaf.v1.jpg",
				"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-1a5a/k2-_631cfd6e-7b23-47eb-a2a3-5b37c3905fe1.v1.jpg",
				"entityType": "SECONDARY"
			},
			{
				"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-752e/k2-_6ebb61fc-5e24-4910-beec-feeb34dfb8c0.v1.jpg",
				"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-958c/k2-_7af7e3cc-0b5d-4a36-acb2-6b66d2745053.v1.jpg",
				"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-31b5/k2-_ddc41ef7-2eea-4279-a566-32c4c9ef4fe4.v1.jpg",
				"entityType": "SECONDARY"
			},
			{
				"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-30d8/k2-_ce2e7ed5-ea7d-47b1-aa0a-726063f431f3.v1.jpg",
				"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-907d/k2-_63477779-88fc-4cdb-b1fb-cf3dd05aa7e7.v1.jpg",
				"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-986d/k2-_a798763f-d294-4b07-88ee-52f1ecc679d1.v1.jpg",
				"entityType": "SECONDARY"
			},
			{
				"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-b51e/k2-_55b11c78-773f-40a3-891a-bcc31497a073.v1.jpg",
				"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-eae0/k2-_539f8496-c4cf-488a-8ea3-495f18fb9d2e.v1.jpg",
				"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-a441/k2-_ccdf6b76-2a17-40af-84c6-7545565541a5.v1.jpg",
				"entityType": "SECONDARY"
			}
		],
		"availableOnline": true
    },
    {
		"itemId": 49650094,
		"parentItemId": 49650094,
		"name": "Refurbished Apple iPod Touch 16GB, Blue",
		"msrp": 179,
		"salePrice": 124,
		"upc": "813516025371",
		"categoryPath": "Electronics/Portable Audio/Apple iPods",
		"shortDescription": "&lt;div style=&quot;margin-left: 2em&quot;&gt;iPod touch is the perfect way to carry your music collection in your pocket. Now in 5 stunning colors. Listen to your favorite songs from Apple Music1 and iTunes. iPod touch offers the ultimate mobile gaming experience. Take great photos and videos with the new 8MP iSight camera and make video calls with the improved FaceTime HD camera.2 And stay connected with Messages and the most popular social networking apps. All on a 4-inch Retina display.3&lt;/div&gt;",
		"longDescription": "&lt;div style=&quot;margin-left: 2em&quot;&gt;&lt;b&gt;Key Features&lt;/b&gt;&lt;/div&gt;&lt;ul&gt;&lt;li&gt;4-inch Retina display3&lt;/li&gt;&lt;li&gt;A8 with M8 motion coprocessor&lt;/li&gt;&lt;li&gt;8MP iSight &amp; FaceTime cameras&lt;/li&gt;&lt;li&gt;1080p HD video recording&lt;/li&gt;&lt;li&gt;802.11ac Wi-Fi &amp; Bluetooth 4.1&lt;/li&gt;&lt;li&gt;Up to 40 hours audio playback4&lt;/li&gt;&lt;/ul&gt;&lt;div style=&quot;margin-left: 2em&quot;&gt;&lt;b&gt;Legal&lt;/b&gt;&lt;br&gt;iPod models are not available in all colors at all resellers.&lt;br&gt;1 Membership required. Requires initial sign-up. At the end of the trial period, the membership will automatically renew and payment method will be charged on a monthly basis until autorenewal is turned off in account settings.&lt;br&gt;2 FaceTime calling requires a FaceTime-enabled device with a Wi-Fi connection.&lt;br&gt;3 Display size is measured diagonally.&lt;br&gt;4 Rechargeable batteries have a limited number of charge cycles and may eventually need to be replaced. Battery life and number of charge cycles vary by use and settings. See www.apple.com/batteries for more information.&lt;br&gt;TM and &copy; 2015 Apple Inc. All rights reserved.&lt;/div&gt;",
		"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-b0aa/k2-_9d1eb230-1215-4765-b0b2-3ad46668cfdf.v2.jpg",
		"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-da99/k2-_fee90d4e-64b0-41a4-8d27-983f45965e28.v2.jpg",
		"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-9ee8/k2-_d663035d-278e-4489-8728-e2b80e69ab16.v2.jpg",
		"productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Fwww.walmart.com%252Fip%252FFAST-TRACK-Apple-iPod-Touch-6th-Generation-16GB-Blue-Refurbished%252F49650094%253Faffp1%253DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%2526affilsrc%253Dapi",
		"standardShipRate": 0,
		"marketplace": false,
		"modelNumber": "RBMKH22LL/A",
		"productUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Fwww.walmart.com%2Fip%2FFAST-TRACK-Apple-iPod-Touch-6th-Generation-16GB-Blue-Refurbished%2F49650094%3Faffp1%3DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
		"customerRating": "5.0",
		"customerRatingImage": "http://i2.walmartimages.com/i/CustRating/5.gif",
		"categoryNode": "3944_96469_1057284",
		"bundle": false,
		"stock": "Available",
		"addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D49650094%7C1%26affp1%3DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
		"affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D49650094%257C1%2526affp1%253DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%2526affilsrc%253Dapi",
		"giftOptions": {
			"allowGiftWrap": false,
			"allowGiftMessage": false,
			"allowGiftReceipt": false
		},
		"imageEntities": [
			{
				"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-6f68/k2-_5132a4c5-5a49-4b5c-ad6a-23ade96d3882.v2.jpg",
				"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-8e42/k2-_e9f9b9dd-459a-45ce-ab17-d73238faa122.v2.jpg",
				"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-73e6/k2-_71f0742a-30b7-4aa9-b9de-b1488fab215a.v2.jpg",
				"entityType": "SECONDARY"
			},
			{
				"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-b0aa/k2-_9d1eb230-1215-4765-b0b2-3ad46668cfdf.v2.jpg",
				"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-da99/k2-_fee90d4e-64b0-41a4-8d27-983f45965e28.v2.jpg",
				"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-9ee8/k2-_d663035d-278e-4489-8728-e2b80e69ab16.v2.jpg",
				"entityType": "PRIMARY"
			}
		],
		"availableOnline": true
    },
    {
		"itemId": 49650093,
		"parentItemId": 49650093,
		"name": "Refurbished Apple iPod nano 16GB, Black",
		"msrp": 119,
		"salePrice": 87.89,
		"upc": "813516025395",
		"categoryPath": "Electronics/Portable Audio/Apple iPods",
		"shortDescription": "&lt;p&gt;The Apple iPod Nano comes in five stunning Assorted Colors. It is designed to provide hours of entertainment with maximum portability. This 16GB iPod nano has a clear multi-touch display that lets you see more of the things that you love. It has a built-in FM radio as well as support for Fitness Walk + Run and Nike+. This Bluetooth iPod nano provides up to 30 hours of audio playback. Plug in a pair of ear buds or headphones to enjoy your favorite song lists. It also provides access to your videos and your photos. It has plenty of storage space for all of your apps and media.&lt;br&gt;&lt;/p&gt;",
		"longDescription": "&lt;b&gt;&lt;br&gt;Refurbished Apple iPod Nano 16GB, Assorted Colors:&lt;br&gt;&lt;/b&gt;&lt;ul&gt;&lt;li&gt;2.5&quot; multi-touch display1&lt;/li&gt;&lt;li&gt;Bluetooth iPod nano plays FM radio and video&lt;/li&gt;&lt;li&gt;Built-in pedometer and Nike+&lt;/li&gt;&lt;li&gt;16GB iPod nano features Bluetooth 4.0&lt;/li&gt;&lt;li&gt;Up to 30 hours audio playback2&lt;/li&gt;&lt;li&gt;Available colors: space gray, pink, blue, gold, white and silver&lt;/li&gt;&lt;/ul&gt; &lt;b&gt;Legal:&lt;/b&gt; &lt;br&gt;&lt;ul&gt;&lt;li&gt;iPod models are not available in all colors at all resellers&lt;/li&gt;&lt;li&gt;1 Display size is measured diagonally&lt;/li&gt;&lt;li&gt;2 Rechargeable batteries have a limited number of charge cycles and may eventually need to be replaced. Battery life and number of charge cycles vary by use and settings&lt;/li&gt;&lt;li&gt;See www.apple.com/batteries for more information&lt;/li&gt;&lt;/ul&gt;&lt;br&gt; &lt;br&gt; TM and &copy; 2015 Apple Inc. All rights reserved.&lt;br&gt; &lt;br&gt;",
		"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-4c81/k2-_c81d56ba-b853-452f-9ec6-808ed288059b.v2.jpg",
		"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-1365/k2-_460a82d3-f210-4b49-8d67-37a62cd686a5.v2.jpg",
		"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-844a/k2-_4b533fb6-3ac9-48d8-97df-e34b85c1da93.v2.jpg",
		"productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Fwww.walmart.com%252Fip%252FFAST-TRACK-Apple-iPod-Nano-8th-Generation-Refurbished%252F49650093%253Faffp1%253DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%2526affilsrc%253Dapi",
		"standardShipRate": 0,
		"marketplace": false,
		"modelNumber": "RBMKN52LL/A",
		"productUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Fwww.walmart.com%2Fip%2FFAST-TRACK-Apple-iPod-Nano-8th-Generation-Refurbished%2F49650093%3Faffp1%3DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
		"customerRating": "4.429",
		"numReviews": 2,
		"customerRatingImage": "http://i2.walmartimages.com/i/CustRating/4_4.gif",
		"categoryNode": "3944_96469_1057284",
		"bundle": false,
		"stock": "Available",
		"addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D49650093%7C1%26affp1%3DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
		"affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D49650093%257C1%2526affp1%253DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%2526affilsrc%253Dapi",
		"giftOptions": {
			"allowGiftWrap": false,
			"allowGiftMessage": false,
			"allowGiftReceipt": false
		},
		"imageEntities": [
			{
				"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-4c81/k2-_c81d56ba-b853-452f-9ec6-808ed288059b.v2.jpg",
				"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-1365/k2-_460a82d3-f210-4b49-8d67-37a62cd686a5.v2.jpg",
				"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-844a/k2-_4b533fb6-3ac9-48d8-97df-e34b85c1da93.v2.jpg",
				"entityType": "PRIMARY"
			}
		],
		"availableOnline": true
    },
    {
		"itemId": 42608106,
		"parentItemId": 42608106,
		"name": "Apple iPod nano 16GB, Assorted Colors",
		"msrp": 145,
		"salePrice": 145,
		"upc": "888462471756",
		"categoryPath": "Electronics/Portable Audio/Apple iPods",
		"shortDescription": "&lt;p&gt;The Apple iPod Nano comes in five stunning Assorted Colors. It is designed to provide hours of entertainment with maximum portability. This 16GB iPod nano has a clear multi-touch display that lets you see more of the things that you love. It has a built-in FM radio as well as support for Fitness Walk + Run and Nike+. This Bluetooth iPod nano provides up to 30 hours of audio playback. Plug in a pair of ear buds or headphones to enjoy your favorite song lists. It also provides access to your videos and your photos. It has plenty of storage space for all of your apps and media.&lt;br&gt;&lt;/p&gt;",
		"longDescription": "&lt;b&gt;&lt;br&gt;Apple iPod Nano 16GB, Assorted Colors:&lt;br&gt;&lt;/b&gt;&lt;ul&gt;&lt;li&gt;2.5&quot; multi-touch display1&lt;/li&gt;&lt;li&gt;Bluetooth iPod nano plays FM radio and video&lt;/li&gt;&lt;li&gt;Built-in pedometer and Nike+&lt;/li&gt;&lt;li&gt;16GB iPod nano features Bluetooth 4.0&lt;/li&gt;&lt;li&gt;Up to 30 hours audio playback2&lt;/li&gt;&lt;li&gt;Available colors: space gray, pink, blue, gold, white and silver&lt;/li&gt;&lt;/ul&gt; &lt;b&gt;Legal:&lt;/b&gt; &lt;br&gt;&lt;ul&gt;&lt;li&gt;iPod models are not available in all colors at all resellers&lt;/li&gt;&lt;li&gt;1 Display size is measured diagonally&lt;/li&gt;&lt;li&gt;2 Rechargeable batteries have a limited number of charge cycles and may eventually need to be replaced. Battery life and number of charge cycles vary by use and settings&lt;/li&gt;&lt;li&gt;See www.apple.com/batteries for more information&lt;/li&gt;&lt;/ul&gt;&lt;br&gt; &lt;br&gt; TM and &copy; 2015 Apple Inc. All rights reserved.&lt;br&gt; &lt;br&gt;",
		"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-92a2/k2-_693c2884-1607-4439-9316-6d3bf6964598.v5.jpg",
		"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-3a71/k2-_e8fe4452-7c5b-40de-bf9b-b73e7ad23f8f.v5.jpg",
		"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-299d/k2-_87fea925-2143-4cab-b205-edc815e15516.v5.jpg",
		"productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Fwww.walmart.com%252Fip%252FApple-iPod-nano-16GB-Space-Gray%252F42608106%253Faffp1%253DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%2526affilsrc%253Dapi",
		"standardShipRate": 0,
		"marketplace": false,
		"modelNumber": "MKN52LL/A",
		"productUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPod-nano-16GB-Space-Gray%2F42608106%3Faffp1%3DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
		"customerRating": "4.419",
		"numReviews": 779,
		"customerRatingImage": "http://i2.walmartimages.com/i/CustRating/4_4.gif",
		"categoryNode": "3944_96469_1057284",
		"bundle": false,
		"stock": "Available",
		"addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D42608106%7C1%26affp1%3DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
		"affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D42608106%257C1%2526affp1%253DkcMYSs5A-JtfqT4VFlHM0_TEXOCAsWiGTsrNGvuqT08%2526affilsrc%253Dapi",
		"giftOptions": {
			"allowGiftWrap": false,
			"allowGiftMessage": false,
			"allowGiftReceipt": false
		},
		"imageEntities": [
			{
				"thumbnailImage": "http://i5.walmartimages.com/dfw/dce07b8c-92a2/k2-_693c2884-1607-4439-9316-6d3bf6964598.v5.jpg",
				"mediumImage": "http://i5.walmartimages.com/dfw/dce07b8c-3a71/k2-_e8fe4452-7c5b-40de-bf9b-b73e7ad23f8f.v5.jpg",
				"largeImage": "http://i5.walmartimages.com/dfw/dce07b8c-299d/k2-_87fea925-2143-4cab-b205-edc815e15516.v5.jpg",
				"entityType": "PRIMARY"
			}
		],
		"availableOnline": true
    }
	]
}