const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    });
    return formatter.format(valor);
}

const calcularInteres = (cantidad, plazo) => {
    const interes = (0.11 * plazo) / 10;
    let total = cantidad*interes;
    return Math.floor(total);
}

export {
    formatearDinero,
    calcularInteres
}