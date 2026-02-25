const myUrl = new URL("https://api.example.com/search");
myUrl.searchParams.set("q", "js lecture");
myUrl.searchParams.set("page", "1");

console.log(myUrl.toString());
// https://api.example.com/search?q=js+lecture&page=1
