console.log(usersData);

class FriendInfo {
    constructor(friend) {
        this.fullName = friend.name;
        this.age = friend.age;
        this.gender = friend.gender;
        this.company = friend.company;
        this.email = friend.email;
        this.phone = friend.phone;
    }
    parseFullName() {
        let names = {};
        names.firstName = this.fullName.split(' ')[0];
        names.lastName = this.fullName.split(' ')[1];
        return names
    }
    showAge(){
        alert(this.age);
    }
    contactMyFriend() {
        return this.parseFullName().firstName + '<br/>' + "company name:" + this.company + '<br/>' + this.email + '<br/>' + this.phone ;
    }
}
let IrynaInfo = new FriendInfo({name: 'Iryna Bilous', age: 28});
// IrynaInfo.parseFullName();
// IrynaInfo.showAge();
IrynaInfo.contactMyFriend();


function getFriendByIndex(data, index) {
    return _.find(data, {'index': Number(index)})
}
let currentFriend = new FriendInfo(getFriendByIndex(usersData.friends, 1));

console.log('currentFriend',currentFriend);

function getById(data, _id){
    return  _.find(
        data,
        function (element) {
            return element._id == _id;
        })
}
var NunezBentley = new FriendInfo(getById(usersData.friends, "5c8901ed08041b1aebba5c45"));





// recusive
// function f() {
//     console.log(new Date());
//     if(true){
//         f()
//     }
// }
