// this HomeWork

// Targil 1

// const data = {
//     info : "details",
//     logInfo(){
//         console.log(this.info);
//     }
// }

// data.logInfo();

// Targil 2

// const user = {
//     name : "Willy",
//     get myName() {
//         return console.log(this.name);
//     }
// }

// user.myName;

// Targil 3

// const mail = {
//     port(){
//         return 225;
//     },
//     sendPort(){
//         return console.log(`Request to port ${this.port()}`);
//     }
// };

// mail.sendPort();

// Targil 4

// const data = {
//     articles : ["politic", "sports", "weather","gossip","movies"],
//     print(){
//         let $c = document.getElementById('content');
//         for (let i = 0; i < this.articles.length; i++) {
//             $c.innerHTML += '<p>' + this.articles[i] + '</p>'
//         };
//     }
// }

// data.print();

// Targil 5

// const ob = {
//     name : null,
//     set setName(name){
//         this.name = name;
//         return this;
//     },
//     get getName(){
//         return this.name;
//     }
// }   

// ob.setName = "din";
// console.log(ob.getName);

// Targil 6

// const product = {
//     sizes : ['xxs','xs','s','m','l','xl','xxl'],
//     print(){
//         let $s = document.getElementById('sizes');
//         $s.innerHTML = '<option>' + "size" +'</option>'
//         for (let i = 0; i < this.sizes.length; i++) {
//             $s.innerHTML += '<option>' + this.sizes[i] +'</option>';
//         }
//     }
// }

// product.print();

// Targil 7

// const library = {
//     books : [],
//     set setBook(book){
//         this.books.push(book);
//         return this;
//     },
//     get getBook(){
//         return this.books;
//     }
// }

// for (let i = 0; i < 3; i++) {
//     library.setBook = prompt("Enter book name");
// }

// console.log(library.getBook);

// Classes Homework

// Targil 1

// class MyRequest{
//     url = 'boogle.com';
// }

// const myRequest = new MyRequest();
// console.log(myRequest.url);

// Targil 2

// function Mail(){
//     this.port = 225;
//     this.send = function(){
//         return `Mail sent by port ${this.port}`;
//     }
// }

// const mail = new Mail();
// console.log(mail.send());

// Targil 3

// class Hash{
//     key;
//     set setKey(key){
//         this.key = key;
//         return this;
//     }
//     get getKey(){
//         return this.key;
//     }
// }

// const hash = new Hash();
// hash.setKey = 'BBB';
// console.log(hash.getKey);

// Targil 4

// class Http{
//     url = 'http';
//     securedUrl = 'https';
// }

// const http = new Http();
// delete http.securedUrl;
// http.url = 'walla.co.il';
// http.sub = 'sub';
// http.unsub = function(){
//    return http.sub = 'unsub';
// }

// console.log(http);
// console.log(http.unsub());
// console.log(http);

// Targil 5

// class Db{
//     names = ["Jimmy","Tony","Rashel","Valery"];
//     $nl = document.getElementById('names-list');
//     render(){
//         for (let i = 0; i < this.names.length; i++) {
//             let allNames = '<li>'+ this.names[i] +'</li>';
//             this.$nl += allNames;
//         }
//     }
// }

// const myDb = new Db();
// myDb.render();

// Targil 6

// class MailMan {
//     name = "Frank";
//     age = 36;
//     checkIfWorkAtMail(){
//         this.name == "Frank"? "MailMan " + this.name : this.name + " isn't a MailMan";
//     }
// }

// const mailMan = new MailMan();
// for (const key in mailMan) {
//         console.log(key + ":" + mailMan[key]);
// }

// Targil 7

// class Mail{
//     email;
//     constructor(email){
//         this.email = email;
//     }
//     sendEmail(){
//         return `Mail send to ${this.email}`;
//     }
// }

// const mail = new Mail("myEmail@email.com");
// console.log(mail.sendEmail());