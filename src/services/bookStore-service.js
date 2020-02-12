export default class BookStoreService {
  data = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Fowler",
      price: 32,
      coverImage:
        "https://covers.oreillystatic.com/images/0636920053675/lrg.jpg"
    },
    {
      id: 2,
      title: "Release It!",
      author: "Michael T. Nygard",
      price: 50,
      coverImage: "https://imagery.pragprog.com/products/93/mnee.jpg?1298589747"
    }
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("Something bad happend"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
