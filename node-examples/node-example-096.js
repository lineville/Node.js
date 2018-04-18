class Developer extends Person {
    constructor(name, surname, language){
        super(name, surname);
        this.language = language;
    }
    getPreferredLanguage(){
        return language;
    }
}

