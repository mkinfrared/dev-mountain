var athletes = [
	{
		name    : "RunGuy",
		speed   : 10,
		strength: 7,
		wits    : 4
	}, {
		name    : "YoungGuy",
		speed   : 7,
		strength: 4,
		wits    : 6
	}, {
		name    : "DumGuy",
		speed   : 8,
		strength: 10,
		wits    : 1
	}, {
		name    : "FunGuy",
		speed   : 5,
		strength: 5,
		wits    : 8
	}, {
		name    : "StunGun",
		speed   : 8,
		strength: 8,
		wits    : 8
	}
]

//Filter OUT all athletes with wits 5 or higher
//Filter IN all athletes with a strength higher than 6
//Filter OUT all althletes that don't have Guy in their name

let jocks = athletes.filter((obj) => obj.wits <= 5);
console.log(jocks);
let hulks = athletes.filter((obj) => obj.strength > 6);
console.log(hulks);
let guys = athletes.filter((athlete) => athlete.name.includes('Guy'));
console.log(guys);