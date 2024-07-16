export const addBookToStorage = (data: any) => {
  let parsedBooks: any[] = [];

  const booksInStorage = sessionStorage.getItem("rentals");

  if (booksInStorage) {
    try {
      parsedBooks = JSON.parse(booksInStorage);
    } catch (error) {
      console.error("Error parsing JSON from sessionStorage", error);
    }
  }

  parsedBooks.push(data);

  sessionStorage.setItem("rentals", JSON.stringify(parsedBooks));
};

export const getRentalsFromStorage = () => {
    return sessionStorage.getItem("rentals") ? sessionStorage.getItem("rentals") : null
}