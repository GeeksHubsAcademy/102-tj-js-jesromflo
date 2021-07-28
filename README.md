<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>


    Considere el siguiente problema:

    Escriba un programa corto que permita calcular los números primos dado un input de entrada.
    
     N = 13 
  
     Resultado :
	 
     [2,3,5,7,11,13]


    Observe que su resultado es una array de una dimensión.
    El valor mínimo de entrada será 1, en este caso el resultado devolverá -1.    
    
    Se atiente al siguiente ejemplo:
   
    N = 1     N = 2      N = 5         N = 8         N = 14     ...    N
                
    Resultado:

	-1	   [2]	     [2,3,5]      [2,3,5,7]     [2,3,5,7,11]   



    En la carpeta 'test/test01.js' se encuentra el fichero con la definición de nuestro método vacío.
    
    El modus operandi de trabajo es el siguiente:
    
    Debes 'forkear' el proyecto a tu cuenta.
    Puedes hacer PR's ilimitadas e ir validando poco a poco la solución contra nuestro respositorio con CI.
    Puedes trabajar en local y subir la solución haciendo un PR a nuestro repositorio.
    Cuando se envíe la PR final, debes indicar el tiempo de dedicación y los intentos que has hecho.
    También puedes añadir un comentario para dar cualquier tipo de feedback.
    
    En caso de duda, revisa en el apartado de 'Referencias'.       
    

    [Suite Tests]
    
    const numPrimo = require('./test01.js');

	test('Números primo -> 1', function () {
		var expected = -1;
		var result = numPrimo(1);
		expect(result).toBe(expected);
	});
	
	test('Números primo -> 2', function () {
		var expected = [2];
		var result = numPrimo(2);
		expect(result).toEqual(expected);
	});

	test('Números primo -> 3', function () {
		var expected = [2,3];
		var result = numPrimo(3);
		expect(result).toEqual(expected);
	});
	
	test('Números primo -> 10', function () {
		var expected = [2,3,5,7];
		var result = numPrimo(10);
		expect(result).toEqual(expected);
	});
	
	test('Números primo -> 20', function () {
		var expected = [2,3,5,7,11,13,17,19];
		var result = numPrimo(20);
		expect(result).toEqual(expected);
	});

	test('Números primo -> 30', function () {
		var expected = [2,3,5,7,11,13,17,19,23,29];
		var result = numPrimo(30);
		expect(result).toEqual(expected);
	});

	test('Números primo -> 40', function () {
		var expected = [2,3,5,7,11,13,17,19,23,29,31,37];
		var result = numPrimo(40);
		expect(result).toEqual(expected);
	});

	test('Números primo -> 50', function () {
		var expected = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47];
		var result = numPrimo(50);
		expect(result).toEqual(expected);
	});

	test('Números primo -> 100', function () {
		var expected = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
		var result = numPrimo(100);
		expect(result).toEqual(expected);
	});

	test('Números primo -> 500', function () {
		var expected = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499];
		var result = numPrimo(500);
		expect(result).toEqual(expected);
	});

	test('Números primo -> 1000', function () {
		var expected = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
		var result = numPrimo(1000);
		expect(result).toEqual(expected);
	});



     PASS  test/suite.test.js
        √ Números primo -> 1 (3ms)
        √ Números primo -> 2 (1ms)
        √ Números primo -> 3 (1ms)
        √ Números primo -> 10
        √ Números primo -> 20
        √ Números primo -> 30 (1ms)
        √ Números primo -> 40
        √ Números primo -> 50 (1ms)
        √ Números primo -> 100 (1ms)
        √ Números primo -> 500 (2ms)
        √ Números primo -> 1000 (3ms)

    Test Suites: 1 passed, 1 total
    Tests:       11 passed, 11 total
    Snapshots:   0 total
    Time:        4.207s

## Referencias

* [Tutorial - Testing Automatizado](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-FFFF/blob/master/README.md)
