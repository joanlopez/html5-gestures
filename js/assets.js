var AssetsManager = function(doneCallback) {
	return {
		assetPath: 'images',
		assets: ['play.png','triangle.png', 'x.png', 'rectangle.png', 'circle.png',
			 	 'check.png', 'caret.png', 'zig-zag.png', 'arrow.png',
		  		 'v.png', 'delete.png', 'star.png', 'pigtail.png'],
		downloadAll: function () {
			assetsManager.downloads = [];
			assetsManager.tmpImage = new Image();
			assetsManager.tmpImage.onload = assetsManager.nextAsset;
			assetsManager.tmpImage.src = assetsManager.assetPath+'/'+assetsManager.assets[0];
		},
		nextAsset: function() {
			assetsManager.downloads.push(assetsManager.tmpImage);
			var downloadedItems = assetsManager.downloads.length;
			if(downloadedItems < assetsManager.assets.length) {
				assetsManager.tmpImage = new Image();
				assetsManager.tmpImage.onload = assetsManager.nextAsset;
				assetsManager.tmpImage.src = assetsManager.assetPath+'/'+assetsManager.assets[downloadedItems];
			} else {
				doneCallback();
			}
		}
	};
}