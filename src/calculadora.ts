function suma(val1: number, val2: number): number {
    return val1 + val2;
}

function resta(val1: number, val2: number): number {
    return val1 - val2;
}

function multiplicacion(val1: number, val2: number): number {
    return val1 * val2;
}

const division = (val1: number, val2: number): number | string => {
    if (val2 === 0) {
        return "Error matemático: no se puede dividir entre cero";
    }
    return val1 / val2;
};

document.addEventListener("DOMContentLoaded", () => {
    const value1 = document.getElementById("value1") as HTMLInputElement;
    const value2 = document.getElementById("value2") as HTMLInputElement;
    const result = document.getElementById("result") as HTMLDivElement;

    document.getElementById("sum")?.addEventListener("click", () => {
        const num1 = parseFloat(value1.value);
        const num2 = parseFloat(value2.value);
        result.textContent = isNaN(num1) || isNaN(num2) ? "Ingrese números válidos" : `Resultado: ${suma(num1, num2)}`;
    });

    document.getElementById("rest")?.addEventListener("click", () => {
        const num1 = parseFloat(value1.value);
        const num2 = parseFloat(value2.value);
        result.textContent = isNaN(num1) || isNaN(num2) ? "Ingrese números válidos" : `Resultado: ${resta(num1, num2)}`;
    });

    document.getElementById("mult")?.addEventListener("click", () => {
        const num1 = parseFloat(value1.value);
        const num2 = parseFloat(value2.value);
        result.textContent = isNaN(num1) || isNaN(num2) ? "Ingrese números válidos" : `Resultado: ${multiplicacion(num1, num2)}`;
    });

    document.getElementById("div")?.addEventListener("click", () => {
        const num1 = parseFloat(value1.value);
        const num2 = parseFloat(value2.value);
        result.textContent = isNaN(num1) || isNaN(num2) ? "Ingrese números válidos" : `Resultado: ${division(num1, num2)}`;
    });
});
