function Jogador(nome, idade, posicao) {
    this.nome = nome;
    this.idade = idade;
    this.posicao = posicao;
}

Jogador.prototype.displayInfo = function() {
    console.log(`Jogador: ${this.nome}, Idade: ${this.idade}, Posição: ${this.posicao}`);
};

function Atacante(nome, idade) {
    Jogador.call(this, nome, idade, 'Atacante');
}

Atacante.prototype = Object.create(Jogador.prototype);
Atacante.prototype.constructor = Atacante;

Atacante.prototype.displayInfo = function() {
    Jogador.prototype.displayInfo.call(this);
    console.log('Este jogador é um atacante.');
};

function MeioCampo(nome, idade) {
    Jogador.call(this, nome, idade, 'Meio-Campo');
}

MeioCampo.prototype = Object.create(Jogador.prototype);
MeioCampo.prototype.constructor = MeioCampo;

MeioCampo.prototype.displayInfo = function() {
    Jogador.prototype.displayInfo.call(this);
    console.log('Este jogador é um meio-campista.');
};

const endrick = new Atacante('Endrick', 18);
const vinicius = new Atacante('Vinícius Júnior', 23);
const bellingham = new MeioCampo('Bellingham', 31);

endrick.displayInfo();
vinicius.displayInfo();
bellingham.displayInfo();
