# graphino
Lightweight interactive graphite graphs.

## Setting up
* Edit `js/graphino.js` and change `graphUrl` to the endpoint of your Graphite render function.
* Serve the folder in a web server. For development, you can use python's `SimpleHTTPServer`, like so:
```
python -m SimpleHTTPServer
```
* Access the page with `?target=your.metric`. For instance, if your Graphite installation has a metric named `app.requests`, access this page:
```
http://localhost:8000/?target=app.requests
```

## Additional Parameters
Aside from `target` (which is required), these are the additional parameters to give the URL:
### `width` and `height`
Specify the width and height of the graph, in pixels. By default, the graph size will be determined by Graphite's default.

### `title`
Specify a title for the graph, to be displayed at the top of the graph. Leaving this empty will not show a title on the graph.

## Additional Configuration
These variables in `js/graphino.js` alter the behavior of Graphino.

### `fromTime`
The amount of minutes, relative to now, that will be the left-most part of the graph. A default of `-10` means the beginning of the graph is 10 minutes ago.
### `untilTime`
The amount of minutes, relative to now, that will be the right-most part of the graph. A default of `-10` means the graph will show data until now.
### `bgcolor`
The background color of the graph. Accepts a hex value like `"#FF00CC"`, or a named color like `"violet"`. A default of `null` means Graphite decides what color.
### `fgcolor`
Like `bgcolor`, but determines the foreground color (the color of the line).
### `tickSize`
The amount of time, in minutes, that will be moved when using the arrow buttons. A default of `3` means that every click on the arrows will move the time window by 3 minutes to either side.
