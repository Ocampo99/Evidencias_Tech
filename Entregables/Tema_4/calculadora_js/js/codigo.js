// Agregamos un listener para el evento de clic en el enlace de "Suma"
document.getElementById('suma').addEventListener('click', function() {
    let operador = 1; // Definimos el operador para suma
    let num1 = Number(prompt('Ingrese el primer numero')); 
    let num2 = Number(prompt('Ingrese el segundo numero')); 
    let total; // Variable para almacenar el resultado
  
    // Si el operador es 1 (suma), calculamos el total
    if (operador == 1) {
      total = num1 + num2; // Suma de los dos números
      document.getElementById('resultado').textContent = 'El resultado de la suma es de ' + total; // Mostramos el resultado
    }
  });
  
  // Agregamos un listener para el evento de clic en el enlace de "Resta"
  document.getElementById('resta').addEventListener('click', function() {
    let operador = 2; // Definimos el operador para resta
    let num1 = Number(prompt('Ingrese el primer numero')); 
    let num2 = Number(prompt('Ingrese el segundo numero')); 
    let total; // Variable para almacenar el resultado
  
    // Si el operador es 2 (resta), calculamos el total
    if (operador == 2) {
      total = num1 - num2; // Resta de los dos números
      document.getElementById('resultado').textContent = 'El resultado de la resta es de ' + total; // Mostramos el resultado
    }
  });
  
  // Agregamos un listener para el evento de clic en el enlace de "Multiplicación"
  document.getElementById('multiplicacion').addEventListener('click', function() {
    let operador = 3; // Definimos el operador para multiplicación
    let num1 = Number(prompt('Ingrese el primer numero')); 
    let num2 = Number(prompt('Ingrese el segundo numero')); 
    let total; // Variable para almacenar el resultado
  
    // Si el operador es 3 (multiplicación), calculamos el total
    if (operador == 3) {
      total = num1 * num2; // Multiplicación de los dos números
      document.getElementById('resultado').textContent = 'El resultado de la multiplicación es de ' + total; // Mostramos el resultado
    }
  });
  
  // Agregamos un listener para el evento de clic en el enlace de "División"
  document.getElementById('division').addEventListener('click', function() {
    let operador = 4; // Definimos el operador para división
    let num1 = Number(prompt('Ingrese el primer numero')); 
    let num2 = Number(prompt('Ingrese el segundo numero')); 
    let total; // Variable para almacenar el resultado
  
    // Si el operador es 4 (división), realizamos la operación
    if (operador == 4) {
      // Validamos si el segundo número es 0 para evitar la división por 0
      if (num2 === 0) {
        document.getElementById('resultado').textContent = 'Error: No se puede dividir por 0.'; // Mensaje de error
      } else {
        total = num1 / num2; // División de los dos números
        document.getElementById('resultado').textContent = 'El resultado de la división es de ' + total; // Mostramos el resultado
      }
    }
  });
