var fname = document.getElementById('firstName');
var lname = document.getElementById('lastName');
var submit = document.getElementById('submit');
var email = document.getElementById('email');
var country = document.getElementById('country');
var bio = document.getElementById('bio');
var phone = document.getElementById('phone');
var affil = document.getElementById('affil');
var occupation = document.getElementById('occupation');
var cat = document.getElementById('cat');
var talent = document.getElementById('talent');
var drink = document.getElementById('drink');
var power = document.getElementById('power');
var weapon = document.getElementById('weapon');
var comments = document.getElementById('comments');

var obj = {}

submit.addEventListener('click', function(){
    firstLast();
    emailInc();
    getCountry();
    biography();
    getPhone();
    getOccupation();
    getCat();
    favGadget();
    getDrink();
    getPower();
    getWeapon();
    getTalent();
    affiliation();
    comment();
    console.log(obj);
})


function firstLast() {
    var capitalFirstN = firstName.value[0];
    var capitalLastN = lastName.value[0];
    var lowerFirstN = firstName.value;
    var lowerLastN = lastName.value;
    if (capitalFirstN !== capitalFirstN.toUpperCase()){
        alert("name is case sensitive, please use correct format");
    } else if (capitalLastN !== capitalLastN.toUpperCase()) {
        alert("name is case sensitive, please use correct format");
    } else
        for (var i = 1; i < firstName.value.length; i++){
            if (lowerFirstN[i] !== lowerFirstN[i].toLowerCase()){
                alert("name is case sensitive, please use correct format");
          }
        }
        for (i = 1; i < lastName.value.length; i++) {
            if (lowerLastN[i] !== lowerLastN[i].toLowerCase()){
                alert("name is case sensitive, please use correct format");
            }
        }
    obj.firstName = firstName.value;
    obj.lastName = lastName.value;
}

function emailInc (){
    if(email.value.includes("@")){
        if(email.value.includes(".com")){
            obj.email = email.value;
    }
  } else {
      alert("please use correct format for email");
  }
};

function getCountry(){
    obj.country = country.value;
}

function biography(){
    if(bio.value.length < 20){
        alert("biography is too short")
  } else {
    obj.biography = bio.value;
  }
};

function getPhone (){
    if (phone.value.length < 13){
        alert("please use (561)777-7777 format");
    } else {
        obj.phoneNumber = phone.value;
  }
}

function getOccupation(){
    obj.occupation = occupation.value;
};

function getCat() {
    if (cat.value.length <= 0 ){
        alert("please type in your cat's name")
  } else {
      obj.cat = cat.value;
  }
}

function favGadget(){
    if (gadget.value.length < 1){
        alert("please input your favorite gadget")
  } else {
      obj.gadget = gadget.value;
  }
};
function getTalent(){
    obj.talent = talent.value;
}

function getDrink(){
    if (drink.value.length < 1){
        alert("please fill in the blanks")
  } else {
      obj.drink = drink.value;
  }
};

function getPower(){
    if (power.value.length < 1){
        alert("please fill in the blanks")
  } else {
      obj.power = power.value;
  }
};
function getWeapon(){
    if (weapon.value.length < 1) {
        alert("please fill in the blanks")
  } else {
      obj.weapon = weapon.value;
  }
};
function affiliation(){
    if(affil.value.length < 1){
        alert("please fill in the blanks")
  } else {
      obj.affiliation = affil.value;
  }
};
function comment(){
    if(comments.value.length < 1){
        alert("please fill in the blanks")
  } else {
      obj.comments = comments.value;
  }
};
