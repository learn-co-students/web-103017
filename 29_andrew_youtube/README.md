EXAMPLE RESPONSE FROM YOUTUBE:

```javascript
const response = [
	{
		etag: '"m2yskBQFythfE4irbTIeOgYYfBU/XoCknp0EO0YWZcuTVD_GhkJp_-M"',
		id: { kind: "youtube#video", videoId: "KMZ7oOCXfP8" },
		snippet: {
			title:
				"Super Smart Dolphin Answers Questions - Extraordinary Animals - Earth",
			description:
				"The Echo Location Visualization and Interface System (ELVIS) allows Dolphins to make choices and answer questions. Luna the young Dolphin grasped the ...",
			thumbnails: {
				default: {
					url: "https://i.ytimg.com/vi/KMZ7oOCXfP8/default.jpg"
				}
			}
		}
	},
	{
		etag: '"m2yskBQFythfE4irbTIeOgYYfBU/z_l0ThWRPFnv9um1eRM_O1LVUqU"',
		id: { kind: "youtube#video", videoId: "3Bk6VPWGi1o" },
		snippet: {
			title: 'The Complete 2016 SeaWorld "Blue Horizons" Dolphin Show',
			description:
				"Please SUBSCRIBE by clicking here: http://www.youtube.com/subscription_center?add_user=MoneySavingVideos To see my entire SeaWorld playlist click ...",
			thumbnails: {
				default: {
					url: "https://i.ytimg.com/vi/3Bk6VPWGi1o/default.jpg"
				}
			}
		}
	}
];
```

SEARCH BAR MARKUP

```html
<div className="ui secondary segment">
			<div className="ui huge fluid input">
				<input />
			</div>
		</div>
	</div>
```

SEARCH BAR MARKUP

```html
<div className="ui secondary segment">
			<div className="ui huge fluid input">
				<input />
			</div>
		</div>
	</div>
```

VIDEO LIST

```html
<div className="four wide column">
		<div className="ui relaxed items">
			<div className="item">
				<div className="ui small image">
					<img src={"hi"} alt="" />
				</div>
				<div className="content">Title</div>
			</div>
		</div>
	</div>
</div>
```

Video Detail:

```html
<div className="twelve wide column">
		<div className="ui raised segments">
			<div className="ui segment">
				<div className="ui embed">
					<iframe src={embedUrl} />
				</div>
			</div>
			<div className="ui segment">
				<h4>Title</h4>
			</div>
			<div className="ui secondary segment">
				<p>Description</p>
			</div>
		</div>
	</div>
```
