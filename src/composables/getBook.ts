export async function fetchBook(id: string) {
  const apiKey = 'YOUR_API_KEY'
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`)

  if (!response.ok) {
    throw new Error('Failed to fetch books')
  }

  const book = await response.json()

  return {
    id: book.id,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors,
    coverImage:
      book.volumeInfo.imageLinks?.large ||
      book.volumeInfo.imageLinks?.medium ||
      book.volumeInfo.imageLinks?.thumbnail ||
      '',
    categories: book.volumeInfo.categories,
    description: book.volumeInfo.description,
    publisher: book.volumeInfo.publisher,
    publishedDate: book.volumeInfo.publishedDate,
  }
}
