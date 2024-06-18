import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  constructor() {}

  obtenerPruebaPorCursoModuloYPruebaId(
    cursoId: number,
    moduloId: number,
    pruebaId: number
  ) {
    const curso = this.obtenerDatosCurso(cursoId);
    const modulo = curso?.modulos.find(
      (m: { id: number }) => m.id === moduloId
    );
    if (!modulo) return null;
    return modulo.pruebas.find((p: { id: number }) => p.id === pruebaId);
  }

  obtenerContenidoActividades(
    cursoId: number,
    moduloId: number,
    pruebaId: number
  ) {
    const curso = this.obtenerDatosCurso(cursoId);
    const modulo = curso?.modulos.find(
      (m: { id: number }) => m.id === moduloId
    );
    if (!modulo) return null;
    return modulo;
  }

  obtenerDatosCurso(cursoId: number) {
    // Aquí deberías implementar la lógica para obtener el curso específico por su ID
    const cursos: any[] = [
      {
        id: 1,
        titulo: 'Curso de Fundamentos de programacion',
        modulos: [
          {
            id: 1,
            titulo: 'Estructuras de Programación',
            recursos: [
              {
                nombre:
                  'Estructuras de programación (qué es secuencia, condicional, ciclo) | Computación y programación',
                tipo: 'video',
                url: 'https://www.youtube.com/watch?v=rNY5eWogl18',
              },
              {
                nombre: 'Guía de Estructuras básicas de Programación',
                tipo: 'pdf',
                url: 'assets/pdf/Estructuras_Programacion_V1.pdf',
              },
              {
                nombre: 'Estructuras básicas de Programación',
                tipo: 'url',
                url: 'https://www.edu.xunta.gal/centros/iesblancoamorculleredo/aulavirtual/mod/book/view.php?id=19963&chapterid=4298',
              },
              {
                nombre: 'Guía de Estructuras ',
                tipo: 'pdf',
                url: 'assets/pdf/Estructuras_Programacion_V1.pdf',
              },
              {
                nombre: 'Estructuras url prueba',
                tipo: 'url',
                url: 'https://www.edu.xunta.gal/centros/iesblancoamorculleredo/aulavirtual/mod/book/view.php?id=19963&chapterid=4298',
              },
            ],
            actividades: [
              {
                id: 1,
                tipo: 'completarCodigo',
                descripcion:
                  'Completa el código faltante sobre estructuras de control.',
                seccionRelacionada: 1, // Sección de la prueba relacionada
                retroalimentacion:
                  'Recuerda que las estructuras condicionales te permiten decidir qué bloque de código ejecutar.',
              },
              {
                id: 2,
                tipo: 'arrastrarPalabras',
                descripcion:
                  'Arrastra las palabras al lugar correcto para completar las sentencias.',
                seccionRelacionada: 2, // Sección de la prueba relacionada
                retroalimentacion:
                  'Verifica la sintaxis utilizada en bucles y condiciones para mejorar tu comprensión.',
              },
              {
                id: 3,
                tipo: 'unirconLineas',
                descripcion:
                  'Arrastra las palabras al lugar correcto para completar las sentencias.',
                seccionRelacionada: 3, // Sección de la prueba relacionada
                retroalimentacion:
                  'Verifica la sintaxis utilizada en bucles y condiciones para mejorar tu comprensión.',
              },
            ],
            pruebas: [
              {
                id: 1,
                nombre: 'Prueba de Fundamentos de Programación',
                preguntas: [
                  {
                    id: 1,
                    pregunta: '¿Qué es una estructura secuencial?',
                    opciones: [
                      'Una estructura donde las acciones se ejecutan de forma simultánea.',
                      'Una estructura donde una acción se ejecuta detrás de otra siguiendo el orden físico de las instrucciones.',
                      'Una estructura que siempre evalúa una condición antes de ejecutar las acciones.',
                      'Ninguna de las anteriores.',
                    ],
                    respuesta:
                      'Una estructura donde una acción se ejecuta detrás de otra siguiendo el orden físico de las instrucciones.',
                  },
                  {
                    id: 2,
                    pregunta:
                      '¿Cuál es la característica principal de una estructura condicional simple?',
                    opciones: [
                      'Ejecutar acciones repetidamente hasta que una condición se cumpla.',
                      'Evaluar una condición y realizar una acción si es verdadera.',
                      'Evaluar múltiples condiciones unidas por operadores lógicos.',
                      'Evaluar una condición y realizar acciones distintas según el resultado.',
                    ],
                    respuesta:
                      'Evaluar una condición y realizar una acción si es verdadera.',
                  },
                  {
                    id: 3,
                    pregunta:
                      '¿Cuál es la diferencia entre una estructura condicional doble y una simple?',
                    opciones: [
                      'La estructura doble solo realiza acciones si la condición es verdadera.',
                      'La estructura simple puede evaluar múltiples condiciones.',
                      'La estructura doble realiza una serie de acciones si la condición es verdadera y otra diferente si es falsa.',
                      'La estructura simple no evalúa condiciones.',
                    ],
                    respuesta:
                      'La estructura doble realiza una serie de acciones si la condición es verdadera y otra diferente si es falsa.',
                  },
                  {
                    id: 4,
                    pregunta: '¿Qué hace la estructura "mientras" (while)?',
                    opciones: [
                      'Ejecuta acciones una sola vez, independientemente de la condición.',
                      'Ejecuta acciones repetidamente considerando siempre el estado de la condición.',
                      'Evalúa una condición al final de las acciones.',
                      'Controla el número de iteraciones automáticamente.',
                    ],
                    respuesta:
                      'Ejecuta acciones repetidamente considerando siempre el estado de la condición.',
                  },
                  {
                    id: 5,
                    pregunta:
                      '¿Qué diferencia hay entre la estructura "para" (for) y la estructura "mientras" (while)?',
                    opciones: [
                      '"Para" se usa cuando no se sabe el número de repeticiones y "mientras" se usa cuando se conoce el número exacto de repeticiones.',
                      'Ambas estructuras son idénticas en su funcionamiento.',
                      '"Para" se usa cuando se conoce el número de repeticiones y "mientras" cuando no se sabe cuántas veces se repetirá el ciclo.',
                      'Ninguna de las anteriores.',
                    ],
                    respuesta:
                      '"Para" se usa cuando se conoce el número de repeticiones y "mientras" cuando no se sabe cuántas veces se repetirá el ciclo.',
                  },
                  {
                    id: 6,
                    pregunta:
                      '¿Cuál es la característica de una estructura de repetición "repetir... hasta que" (repeat... until)?',
                    opciones: [
                      'Ejecuta las acciones solo si la condición es verdadera al principio.',
                      'La condición se evalúa antes de ejecutar las acciones.',
                      'Ejecuta las acciones al menos una vez y luego repite hasta que la condición se cumpla.',
                      'No repite las acciones si la condición es falsa.',
                    ],
                    respuesta:
                      'Ejecuta las acciones al menos una vez y luego repite hasta que la condición se cumpla.',
                  },
                  {
                    id: 7,
                    pregunta:
                      'En una estructura condicional compuesta, ¿cómo se evalúan las condiciones?',
                    opciones: [
                      'Solo una condición se evalúa al inicio.',
                      'Se evalúan dos o más condiciones unidas por operadores lógicos.',
                      'Las condiciones no se evalúan, solo se ejecutan acciones.',
                      'Siempre se evalúan todas las condiciones, sin importar el resultado de las primeras.',
                    ],
                    respuesta:
                      'Se evalúan dos o más condiciones unidas por operadores lógicos.',
                  },
                  {
                    id: 8,
                    pregunta:
                      '¿Qué tipo de estructura permite ejecutar diferentes acciones con base en varias comparaciones?',
                    opciones: [
                      'Estructura secuencial',
                      'Estructura de repetición',
                      'Estructura condicional múltiple',
                      'Estructura condicional simple',
                    ],
                    respuesta: 'Estructura condicional múltiple',
                  },
                  {
                    id: 9,
                    pregunta:
                      '¿Cuál es una de las reglas para usar programación estructural?',
                    opciones: [
                      'Un programa debe considerar solo los casos más comunes.',
                      'Las estructuras pueden tener múltiples puntos de entrada y salida.',
                      'Las estructuras deben poseer una sola entrada y una sola salida.',
                      'Las estructuras no deben combinarse entre sí.',
                    ],
                    respuesta:
                      'Las estructuras deben poseer una sola entrada y una sola salida.',
                  },
                  {
                    id: 10,
                    pregunta:
                      '¿Cuál es la diferencia principal entre las estructuras "mientras" y "para"?',
                    opciones: [
                      '"Mientras" siempre repite las acciones al menos una vez.',
                      '"Para" no utiliza un contador para controlar el número de repeticiones.',
                      '"Mientras" se utiliza cuando no se sabe el número de repeticiones y "para" cuando se conoce.',
                      'Ambas estructuras no tienen diferencias significativas en su uso.',
                    ],
                    respuesta:
                      '"Mientras" se utiliza cuando no se sabe el número de repeticiones y "para" cuando se conoce.',
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            titulo: 'Estructuras de Datos',
            recursos: [
              {
                nombre: 'Guía de Estructuras de Datos',
                tipo: 'pdf',
                url: 'assets/pdf/Estructuras_de_Datos_V2.pdf',
              },
            ],
            pruebas: [
              {
                id: 1,
                nombre: 'Prueba de Estructuras de Datos',
                preguntas: [
                  {
                    id: 1,
                    pregunta: '¿Qué es una estructura de datos?',
                    opciones: [
                      'Un modelo lógico o matemático para organizar datos.',
                      'Un conjunto de datos simples como enteros o booleanos.',
                      'Una base de datos relacional.',
                      'Un tipo de lenguaje de programación.',
                    ],
                    respuesta:
                      'Un modelo lógico o matemático para organizar datos.',
                  },
                  {
                    id: 2,
                    pregunta: '¿Qué es un arreglo?',
                    opciones: [
                      'Un conjunto finito e indexado de elementos homogéneos.',
                      'Un conjunto infinito de elementos heterogéneos.',
                      'Un modelo de base de datos.',
                      'Una estructura de control en programación.',
                    ],
                    respuesta:
                      'Un conjunto finito e indexado de elementos homogéneos.',
                  },
                  {
                    id: 3,
                    pregunta: '¿Qué propiedad describe mejor a los arreglos?',
                    opciones: [
                      'Finito, homogéneo y ordenado.',
                      'Infinito, heterogéneo y desordenado.',
                      'Finito, homogéneo y desordenado.',
                      'Infinito, homogéneo y ordenado.',
                    ],
                    respuesta: 'Finito, homogéneo y ordenado.',
                  },
                  {
                    id: 4,
                    pregunta: '¿Qué es un vector?',
                    opciones: [
                      'Un arreglo de una sola dimensión.',
                      'Un arreglo de dos dimensiones.',
                      'Una estructura de datos no lineal.',
                      'Una base de datos.',
                    ],
                    respuesta: 'Un arreglo de una sola dimensión.',
                  },
                  {
                    id: 5,
                    pregunta:
                      '¿Cómo se denomina un arreglo de dos dimensiones?',
                    opciones: [
                      'Matriz o tabla.',
                      'Vector.',
                      'Lista enlazada.',
                      'Árbol binario.',
                    ],
                    respuesta: 'Matriz o tabla.',
                  },
                  {
                    id: 6,
                    pregunta: '¿Qué es un array bidimensional?',
                    opciones: [
                      'Un vector de vectores.',
                      'Una lista de listas.',
                      'Una pila de pilas.',
                      'Un árbol de árboles.',
                    ],
                    respuesta: 'Un vector de vectores.',
                  },
                  {
                    id: 7,
                    pregunta: '¿Cuál es una característica de los arreglos?',
                    opciones: [
                      'Contienen un índice que diferencia cada elemento.',
                      'No tienen límite de elementos.',
                      'Pueden tener elementos de diferentes tipos.',
                      'No son ordenados.',
                    ],
                    respuesta:
                      'Contienen un índice que diferencia cada elemento.',
                  },
                  {
                    id: 8,
                    pregunta:
                      '¿Cómo se calcula el número total de elementos en un arreglo?',
                    opciones: [
                      'NTE = LS - LI + 1',
                      'NTE = LS + LI + 1',
                      'NTE = LS * LI',
                      'NTE = LS / LI',
                    ],
                    respuesta: 'NTE = LS - LI + 1',
                  },
                  {
                    id: 9,
                    pregunta: '¿Qué tipo de índice puede tener un arreglo?',
                    opciones: [
                      'Cualquier tipo ordinal.',
                      'Solo enteros.',
                      'Solo booleanos.',
                      'Solo caracteres.',
                    ],
                    respuesta: 'Cualquier tipo ordinal.',
                  },
                  {
                    id: 10,
                    pregunta:
                      '¿Cuál es el límite inferior de un arreglo en la mayoría de los lenguajes de programación?',
                    opciones: ['0', '1', '2', '-1'],
                    respuesta: '0',
                  },
                ],
              },
            ],
          },
        ],
      },
      // Tus cursos con módulos y pruebas definidos aquí
    ];
    return cursos.find((curso) => curso.id === cursoId);
  }
}
