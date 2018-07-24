function Person(){
	this.cards=[]; 
	this.scores=0;
	if(typeof(this.askOneCard)!="function" )
	{
		Person.prototype.askOneCard=function(){
			this.cards.push(arguments[0]);
			this.scores +=arguments[0].number;
		}
	}
}

function Player(){
	Person.call(this);
}
Player.prototype=new Person();
Player.prototype.constructor=Player;

function Computer(){
	Person.call(this);
//	if(typeof(this.think)!="function" )
//	{
//		Computer.prototype.think=function(){
//			
//		})
//		}
//	}
}
Computer.prototype=new Person();
Computer.prototype.constructor=Computer;

function Card(){
	this.name=arguments[0];
	this.number=arguments[1];
	this.place=true;//true表示在牌堆里，false表示在牌堆外。
}

function Deck(){
	this.cards=[];
	var that=this;
	var cardsName=["Ace","1","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
	
	(function () {
		for(var i=0;i<13;i++)
		{
			if(i<10)
			{
				var aCard=new Card(cardsName[i],(i+1)); 
				that.cards.push(aCard);
			}
			else
			{
				var aCard=new Card(cardsName[i],10); 
				that.cards.push(aCard);
			}
		}
	})();
	if(typeof(this.outOneCard)!="function" )
	{
		Deck.prototype.outOneCard=function(){
			var theCardNumber=Math.floor(Math.random()*12);
			while(this.cards[theCardNumber].place!=true)
			{
				theCardNumber=Math.floor(Math.random()*12);
			}
			this.cards[theCardNumber].place=false;
			return this.cards[theCardNumber];
		}
	}
}

var player=new Player();
var deck=new Deck();
