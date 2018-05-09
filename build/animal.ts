interface Animal{
	says() : string;
}

class Cat implements Animal{
	says():string{
		return "meow";
	}
}

var cat = new Cat();

console.log(cat.says());