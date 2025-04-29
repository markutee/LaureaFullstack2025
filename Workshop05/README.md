# REST API Workshop05 
API Route List
| Method | URL                | Description                  |
|--------|--------------------|------------------------------|
| GET    | /api/getall        | Hakee kaiken                 |
| GET    | /api/:id           | Hakee yksittäisen ID.n       |
| POST   | /api/add           | Lisää uuden                  |
| PUT    | /api/update/:id    | Päivittää tietoa ID:n mukaan |
| DELETE | /api/delete/:id    | Poistaa ID:n mukaan          |

## Example POST Body
```json
{
  "title": "Song Name",
  "artist": "Artist Name",
  "year": 2026
}