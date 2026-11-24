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
addBookToLibrary("hivernage","jule verne",350,true);
addBookToLibrary("les miserable","victor Hugo",420,false);
const etagere=document.querySelector("#identifiant");
const apparition=document.querySelector("#apparition");
const newbook=document.querySelector("#bouton")
const formulaire=document.querySelector("#formulaire")
newbook.addEventListener("click",function(){
    apparition.showModal()
});
formulaire.addEventListener("submit",function(event){
    event.preventDefault()
    const caseTitre=document.querySelector("#titre")
    const caseAuthor=document.querySelector("#auteur")
    const casePage=document.querySelector("#page")
    const caseEtat=document.querySelector("#etat")
    addBookToLibrary(caseTitre.value,caseAuthor.value,casePage.value,caseEtat.checked)
    console.log(myLibrary)
    // console.log(caseTitre.value)
    // console.log(caseAuthor.value)
    // console.log(casePage.value)
    // console.log(caseEtat.checked)
})
    

function affichage(){
    for(let i=0;i < myLibrary.length;i++){
        const carte=document.createElement("div");
        const p1=document.createElement("p")
        p1.textContent=myLibrary[i].title;
        carte.appendChild(p1)
        const p2=document.createElement("p")
        p2.textContent=myLibrary[i].author;
        carte.appendChild(p2)
        const p3=document.createElement("p")
        p3.textContent=myLibrary[i].page;
        carte.appendChild(p3)
        const p4=document.createElement("p")
        p4.textContent=myLibrary[i].read;
        carte.appendChild(p4)
        etagere.appendChild(carte);
    }
}
affichage();

