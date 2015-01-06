
Sequence = {

	digits: 4,
	input : null,
	console : null,

	numArr: [],
	numHigh: 0,
	numLoww: 0,

	mapInc: 100,
	history: [],
	timer:null,


	init: function(input, console){
		this.input = input;
		this.console = console;
	},

	map:function(inc){
		var t = inc;
		this.timer = setInterval(function(){
			if (String(t).length > Sequence.digits){
				clearInterval(Sequence.timer);
				return;
			}
			console.log(t + " " + Sequence.digits);
			Sequence.run(t);
			t+=inc;
		}, 10);
	},

	getInput:function(){
		var inn = $(this.input).val();
		this.run(inn);
	},

	run: function(x){
		var obj = this.calc(this.parseInt10(x));
		if (this.parseInt10(obj.r) !== this.parseInt10(x)){
			this.display(obj.a+" - "+obj.b+" = "+obj.r);
			this.run(obj.r);
		}
		else{
			this.display("------------------");
		}
	},

	display:function(str){
		$(output).prepend("<div>"+str+"</div>");
	},

	max:function(){
		var n = String();
		for (var i=0; i<this.digits; i++){
			n += "9";
		}
		return n;
	},

	makeArr:function(n){
		return String(this.form(n)).split('');
	}, 

	sortAsc:function(arr){
		return this.form(this.parseInt10(arr.sort(function(a, b){return b-a}).join("")));
	},

	sortDes:function(arr){
		return this.form(this.parseInt10(arr.sort(function(a, b){return a-b}).join("")));
	}, 

	calc: function(n){
		numArr = this.makeArr(n);
		return this.sort(numArr);
	},

	store:function(el){
		var x = this.parseInt10(el);
		if (this.history[this.parseInt10(el)] === undefined){
			this.history[this.parseInt10(this.form(x))] = 1;
		}
		else{
			this.history[this.parseInt10(this.form(x))] += 1;
		}
	},

	sort:function(arr){
		var a = this.sortAsc(arr);
		var b = this.sortDes(arr);
		var r = this.form(a-b);
		
		this.store(this.sortAsc(this.makeArr(r)));

		return {
			"a":a,
			"b":b,
			"r":r
		};
	},

	loww:function(arr){
		return String(x);
	},

	form:function(n){

		if (this.parseInt10(n) < 0) { n *= -1; }
		if (String(this.parseInt10(n)).length > this.digits){ return String(this.max()); }
	
		var num = String(n);

		for (var i=0; i<(this.digits-String(n).length); i++){
			num = "0" + String(num);
		}
		return num;
	},

	print: function(msg){
		console.log(msg);
		$(this.console).text(msg);
	},

	parseInt10: function(n){
		return parseInt(n,10);
	}
};

