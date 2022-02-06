const crearCalculadora = () => {
  let calculadora = {
    valorInicial: 0,
    valor: function () {
      return this.valorInicial;
    },
    sumar: function (num) {
      return (this.valorInicial += num);
    },
    restar: function (num) {
      return (this.valorInicial -= num);
    },
    reset: function () {
      return (this.valorInicial = 0);
    },
  };
  return calculadora;
};
 /*
 Esta genial que hayas usado el operador "+=" y "-=" :sparkles::sparkles:. Te dejo un link para que veas otros operadores que te ayudarán a simplificar muchas líneas de codigo: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

Esta genial la idea de refactorizar el código, pero una vez que ya no lo usaremos procura borrarlo y asi entregamos un código más limpio:sparkles: 

Te reto a refactorizarlo como función✨ 🚀
*/
