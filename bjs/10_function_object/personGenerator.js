const personGenerator = {
    //фамилии:
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Маша",
            "id_3": "Ира",
            "id_4": "Алина",
            "id_5": "Диана",
            "id_6": "Нина",
            "id_7": "Милена",
            "id_8": "Дарья",
            "id_9": "Ева",
            "id_10": "Алиса"
        }
    }`,

    // отчества без окончаний:
    // fatherNameJson: `{
    //     "count": 10,
    //     "list": {     
    //         "id_1": "Александров",
    //         "id_2": "Махайлов",
    //         "id_3": "Игорев",
    //         "id_4": "Олегов",
    //         "id_5": "Дмитриев",
    //         "id_6": "Денисов",
    //         "id_7": "Степанов",
    //         "id_8": "Константинов",
    //         "id_9": "Валентинов",
    //         "id_10": "Андреев"
    //     }
    // }`, 

    mouthNameJson: `{
        "count": 12,
        "list": {     
            "id_1": "Январь",
            "id_2": "Февраль",
            "id_3": "Март",
            "id_4": "Апрель",
            "id_5": "Май",
            "id_6": "Июнь",
            "id_7": "Июль",
            "id_8": "Август",
            "id_9": "Сентябрь",
            "id_10": "Октябрь",
            "id_11": "Ноябрь",
            "id_12": "Декабрь"
        }
    }`,

    jobMaleJson: `{
        "count": 12,
        "list": {     
            "id_1": "Сантехник",
            "id_2": "Слесарь",
            "id_3": "Учитель",
            "id_4": "Военный",
            "id_5": "Полицейский",
            "id_6": "Программист",
            "id_7": "Автомеханик",
            "id_8": "Шахтер",
            "id_9": "Строитель",
            "id_10": "Сварщик",
            "id_11": "Электрик",
            "id_12": "Адвокат"
        }
    }`,
    jobFemaleJson: `{
        "count": 12,
        "list": {     
            "id_1": "Бухгалтер",
            "id_2": "Воспитатель",
            "id_3": "Повар",
            "id_4": "Технолог",
            "id_5": "Швея",
            "id_6": "Актриса",
            "id_7": "Искусствовед",
            "id_8": "Переводчик",
            "id_9": "Лингвист",
            "id_10": "Косметолог",
            "id_11": "Мастер маникюра",
            "id_12": "Визажист"
        }
    }`,
 

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    GENDER:"",

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),


    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    mouthValue: function (json,value) {
        const obj = JSON.parse(json);
        const prop = `id_${value}`; 
        return obj.list[prop];
    },

    randomGender: function(){
        const rand = this.randomIntNumber(1, 0);
        console.log(rand);
    return (rand === 0 ? this.GENDER_MALE : this.GENDER_FEMALE);
    
    },

    randomFirstName: function() {
      //  console.log(rand);
        if (this.randomGender() === this.GENDER_MALE){
        this.GENDER = this.GENDER_MALE;
        
            return this.randomValue(this.firstNameMaleJson);
        }
        else  
        {
            this.GENDER = this.GENDER_FEMALE;
            return this.randomValue(this.firstNameFemaleJson);
        }

    },

    randomSurname: function() {
        if (this.GENDER === this.GENDER_MALE)
            return this.randomValue(this.surnameJson);
        else 
            return this.randomValue(this.surnameJson) + "а";

    },

    randomfatherName: function() {    
        if (this.GENDER === this.GENDER_MALE) {
            let rand = this.randomValue(this.firstNameMaleJson);
                if (String(rand).substr(-1,1) === "й") { //если окончание "й"
                    let name = (String(rand).substr(0,String(rand).length-1)); //то убираем "й", создаём новую переменную и записываем туда слово без "й"
                    return name + "евич";
                }
                
                if (String(rand).substr(-1,1) === "а") { //если окончание "а"
                    let name = (String(rand).substr(0,String(rand).length-1)); //то убираем "а", создаём новую переменную и записываем туда слово без "а"
                    return name + "ич";
                }

                else 
                    return rand + "ович";
        }
        else
        {
            let rand = this.randomValue(this.firstNameMaleJson);
                if (String(rand).substr(-1,1) === "й") { 
                    let name = (String(rand).substr(0,String(rand).length-1)); 
                    return name + "евна";
                }
                
                if (String(rand).substr(-1,1) === "а") { 
                    let name = (String(rand).substr(0,String(rand).length-1)); 
                    return name + "ична";
                }

                else 
                    return rand + "овна";
        }
    
    },   


    randomBirthYear: function() {
        randYear = this.randomIntNumber(1943, 2001);
        randMouth = this.randomIntNumber(1, 13);
        randDay=0;
        
        switch(randMouth) {
            case 1: 
            case 3: 
            case 5: 
            case 7: 
            case 8: 
            case 10: 
            case 12: 
                randDay = this.randomIntNumber(1, 32);
            break
          
            case 2: randDay = this.randomIntNumber(1, 29);
            break
            
            case 4: 
            case 6: 
            case 9: 
            case 11: 
                randDay = this.randomIntNumber(1, 31);
            break
          
            default:
            
              break
         
            }

        randMouth = this.mouthValue (this.mouthNameJson, randMouth);
       // console.log(randDay +"."+ randMouth +"."+randYear);
        return randDay +" "+ randMouth +" "+randYear;
    
    },

    randomProfession : function() {
        if (this.GENDER === this.GENDER_MALE)
            return this.randomValue(this.jobMaleJson);
        else 
            return this.randomValue(this.jobFemaleJson);
    },

    getPerson: function () {
        this.person = {};
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.genderIdentity = this.GENDER;
        this.person.birthYear = this.randomBirthYear();
        this.person.fatherName = this.randomfatherName();
        this.person.profession = this.randomProfession();
        return this.person;
    }
    
};

document.getElementById('btn-ger').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.genderIdentity;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    // console.log("generate");
})

document.getElementById('btn_clr').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = "Имя";
    document.getElementById('surnameOutput').innerText = "Фамилия";
    document.getElementById('genderOutput').innerText = "Пол";
    document.getElementById('birthYearOutput').innerText = "Дата рождения";
    document.getElementById('fatherNameOutput').innerText = "Отчество";
    document.getElementById('professionOutput').innerText = "Профессия";
    // console.log("clear");
 })