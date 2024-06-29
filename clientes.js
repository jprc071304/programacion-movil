// Definición de clientes
const clientes = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Pérez",
        edad: 30,
        servicios: [
            { nombre: "Internet", estado: "activo" },
            { nombre: "Teléfono", estado: "inactivo" }
        ]
    },
    {
        id: 2,
        nombre: "María",
        apellido: "González",
        edad: 25,
        servicios: [
            { nombre: "Televisión", estado: "activo" },
            { nombre: "Internet", estado: "activo" }
        ]
    },
    {
        id: 3,
        nombre: "Carlos",
        apellido: "López",
        edad: 28,
        servicios: [
            { nombre: "Teléfono", estado: "activo" }
        ]
    },
    {
        id: 4,
        nombre: "Ana",
        apellido: "Martínez",
        edad: 22,
        servicios: [
            { nombre: "Internet", estado: "inactivo" },
            { nombre: "Televisión", estado: "activo" }
        ]
    },
    {
        id: 5,
        nombre: "Luis",
        apellido: "García",
        edad: 35,
        servicios: [
            { nombre: "Teléfono", estado: "inactivo" },
            { nombre: "Internet", estado: "activo" }
        ]
    }
];

// Función para mostrar detalles de clientes y servicios

function mostrarDetallesClientes(clientes) {
    clientes.forEach(cliente => {
        console.log(`Cliente ID: ${cliente.id}`);
        console.log(`Nombre: ${cliente.nombre} ${cliente.apellido}`);
        console.log(`Edad: ${cliente.edad}`);
        console.log("Servicios:");
        cliente.servicios.forEach(servicio => {
            console.log(`  - ${servicio.nombre}: ${servicio.estado}`);
        });
        console.log("------------------------");
    });
}

// Mostrar los detalles en la consola
mostrarDetallesClientes(clientes);
