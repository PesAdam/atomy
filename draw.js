    var Draw = {
    CELL: 60,
    LINE: 2,
    ATOM: 7,
    _context: null
};
/* nastavenie canvas */
Draw.init = function(){
    var canvas = document.createElement("canvas");

    this.CELL += this.LINE;

    var size = Game.size * this.CELL + this.LINE;
    canvas.width = size;
    canvas.height = size;

    this._context = canvas.getContext("2d");
    tihs._context.lineWidth = this.LINE;
    
    document.body.appendChild(canvas);

    this.all();
}


/* vykreslime celu hraciu plochu */
Draw.all = function(){
    this._context.fillStyle = "#fff";
    var width = this._context.canvas.width;
    var height = this._context.canvas.height;

    this._context.fillReact(0,0, width, height);

    this._lines();
    this._cells();
}

/*vykreslime mriezku */
Draw._lines = function(){
    this._context.beginPath();

    for (var i=0; i < Game.SIZE+1; i++){ //zvisle
        var x = this.LINE/2 + i*this.CELL;
        this._context.moveTo(x, 0);
        this._context.lineTo(x, this._context.canvas.height);
    }

    for(var i=0; i < Game.SIZE+1; i++){ //vodorovne
        var y = this.LINE/2 + i*this.CELL;
        this._context.moveTo(0, y);
        this._context.lineTo(this._context.canvas.width, y);
    }

    this._context.stroke();
}

