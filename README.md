# CovidKashmir Widgets
Repository to Store Embeddable Widgets for the site [covidkashmir.org](https://covidkashmir.org).

View the widgets at [embed.covidkashmir.org](https://embed.covidkashmir.org)

## Contributing

1. Fork the repo
2. Create your widgets using data from the api `https://covidkashmir.org/api/live`

3. Make sure your widget.js loads the widget into an element with the id `covidkashmir-widget`
4. Store the widget files in `widgets/<widget-name>` under the following structure  

    ``` bash
    widgets
    |-- <widget-name>
        |-- widget.js       (The widget JS file)
        |-- widget.css      (The widget CSS file)
        |-- widget.json     (Widget Configuration)

    ```

5. The `widget.json`  file should be of the following format

    ``` js
        {
            "name":"<widget-name>",
            "contributor":{
                "name":"<your-name>",
                "username": "<your-github-username>"
            },
            "css": true | false     // If your widget has an associated .css file or not
            "classes": []           // Array of options for your widget using classes (colors,themes,etc)
        }
    ```

6. Submit a Pull Request

*Note: Ideally, no other file should be required to go along with your widget, but if you have some files, like fonts, etc, mention them in the README*

## Testing

You can also test the various embeds, and report any error you find.
