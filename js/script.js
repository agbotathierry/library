const myLibrary = [];

function Book(title,author,page,read) {
    if (!new.target){
        throw Error("utiliser new")
    }
  this.identifiant=crypto.randomUUID()
  this.title=title;
  this.author=author;
  this.page=page;
  this.read=read;

}
// const hivernage=new Book("hivernage","jule verne",350,true)
// const TheHobbit=new Book("the Hobbit","inconnu",293,true)

function addBookToLibrary(title,author,page,read) {
    const livre= new Book(title,author,page,read)
    myLibrary.push(livre)
    return myLibrary
}
console.log(addBookToLibrary("hivernage","jule verne",350,true));
console.log(addBookToLibrary("les miserable","victor Hugo",420,false));
