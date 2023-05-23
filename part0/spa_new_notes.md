```mermaid
flowchart
    Get the submitted item from the form --> Push that item to the notes list
    Push that item to the notes list --> Update the DOM with new item
    Update the DOM with new item --> Send the item as application/json to the server
    Send the item as application/json to the server --> Server send 201 back to the browser
```