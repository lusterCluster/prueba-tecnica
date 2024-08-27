export function formatDate(dateString: string): string {
    const date = new Date(dateString);

    // Extraer el día, mes y año
    const day = String(date.getDate()).padStart(2, '0'); // Asegura que tenga dos dígitos
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son 0 indexados, por eso se suma 1
    const year = date.getFullYear();

    // Formatear la fecha como DD/MM/YYYY
    return `${day}/${month}/${year}`;
}