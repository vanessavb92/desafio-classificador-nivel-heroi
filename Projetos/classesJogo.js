class Hero {
        constructor(nome, idade, tipo) {
          this.nome = nome;
          this.idade = idade;
          this.tipo = tipo;
        }
      
        atacar() {
          let ataque;
          switch (this.tipo) {
            case 'mago':
              ataque = 'usou magia';
              break;
            case 'guerreiro':
              ataque = 'usou espada';
              break;
            case 'monge':
              ataque = 'usou artes marciais';
              break;
            case 'ninja':
              ataque = 'usou shuriken';
              break;
            default:
              ataque = 'usou um ataque desconhecido';
          }
      
          console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
      }
      
      // Exemplos de uso da classe Hero
      const heroi1 = new Hero('Gandalf', 1000, 'mago');
      const heroi2 = new Hero('Aragorn', 35, 'guerreiro');
      const heroi3 = new Hero('Bruce Lee', 32, 'monge');
      const heroi4 = new Hero('Hanzo', 28, 'ninja');
      
      heroi1.atacar(); // Saída: O mago atacou usando magia
      heroi2.atacar(); // Saída: O guerreiro atacou usando espada
      heroi3.atacar(); // Saída: O monge atacou usando artes marciais
      heroi4.atacar(); // Saída: O ninja atacou usando shuriken
      