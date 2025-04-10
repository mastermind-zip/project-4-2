export async function fetchBooks(query: string, apiKey: string) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}&langRestrict=en&maxResults=20`,
  )

  if (!response.ok) {
    throw new Error('Failed to fetch books')
  }

  const data = await response.json()
  return data.items.map((book: any) => ({
    id: book.id,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors,
    coverImage:
      book.volumeInfo.imageLinks?.large ||
      book.volumeInfo.imageLinks?.medium ||
      book.volumeInfo.imageLinks?.thumbnail ||
      '',
    categories: book.volumeInfo.categories,
  }))
}
