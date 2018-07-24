function Person(){
	this.cards=[]; 
	this.scores=0;
	this.aceIn=false;
	this.aceAdd=false;
	this.showScores=0;
	if(typeof(this.askOneCard)!="function" )
	{
		Person.prototype.askOneCard=function(){
			this.cards.push(arguments[0]);
			var that=this;
			(function(){
				that.scores=0;
				for(var i=0;i<that.cards.length;i++)
				{
					that.scores+=that.cards[i].number;
					if(that.cards[i].name=="Ace")
					{
						that.aceIn=true;
					}
				}
			})();
			if(this.aceIn==true)
			{
				if(this.scores<12&&this.aceAdd==false)
				{
					this.scores+=10;
					this.aceAdd=true;
				}
				else if(this.scores>21&&this.aceAdd==true)
				{
					this.scores-=10;
				}
				this.aceAdd=false;
				this.aceIn=false;
			}
			(function(){
				that.showScores=0;
				if(that.cards.length>1){
				for(var i=1;i<that.cards.length;i++)
				{
					that.showScores+=that.cards[i].number;
					if(that.cards[i].name=="Ace")
					{
						that.aceIn=true;
					}
				}
				}
			})();
			if(this.aceIn==true)
			{
				if(this.showScores<12&&this.aceAdd==false)
				{
					this.showScores+=10;
					this.aceAdd=true;
				}
				else if(this.showScores>21&&this.aceAdd==true)
				{
					this.showScores-=10;
					this.aceAdd=false;
				}
				this.aceAdd=false;
				this.aceIn=false;
			}
			
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
//		Computer.prototype.think=function(ashowScores,decks){
//			(function(){
//				for(var i=0;i<decks.length;i++)
//				{
//					var expecPoint=0;
//					expecPoint+=decks[i].number
//				}
//			});
//			var playerExpecPoint=ashowScores+decks;
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
	var cardsName=["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
	
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
var computer=new Computer();
player.askOneCard(deck.cards[0]);
alert("1:"+player.scores);
alert("1:"+player.showScores);
player.askOneCard(deck.cards[10]);
alert("2:"+player.scores);
player.askOneCard(deck.cards[10]);
alert("2:"+player.scores);
player.askOneCard(deck.cards[10]);
alert("2:"+player.scores);
alert("2:"+player.showScores);

