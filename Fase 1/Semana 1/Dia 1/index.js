const sistemaUsuarios = {

  usuarios: ["Lucas", "Marina", "Leo", "Lúcia", "Amanda"],

  filtrarPorLetra(letra) {

    return this.usuarios.filter((nome) =>

      nome.toLowerCase().startsWith(letra.toLowerCase())

    );

  },

  adicionarUsuario(nome) {

    this.usuarios.push(nome);

  },

  testarArrow: () => {

    console.log(this.usuarios); // vai dar undefined

  },
  
};

// Testes
console.log(sistemaUsuarios.filtrarPorLetra("L"));
sistemaUsuarios.adicionarUsuario("Laura");
console.log(sistemaUsuarios.usuarios);
sistemaUsuarios.testarArrow();
