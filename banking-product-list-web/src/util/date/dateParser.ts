export function formatDate(dateString: string): string {
    const date = new Date(dateString);

    // Extraer el día, mes y año
    const day = String(date.getDate()).padStart(2, '0'); // Asegura que tenga dos dígitos
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son 0 indexados, por eso se suma 1
    const year = date.getFullYear();

    // Formatear la fecha como DD/MM/YYYY
    return `${day}/${month}/${year}`;

    
}
export function convertToISOFormat(dateString: string): string {
    // Dividimos el string en día, mes y año
    const [day, month, year] = dateString.split('/').map(Number);
  
    // Creamos un objeto Date con los valores extraídos
    const date = new Date(year, month - 1, day);
  
    // Convertimos la fecha a formato ISO con la hora en 00:00:00.000+00:00
    const isoString = date.toISOString();
    
    // Ajustar para que incluya +00:00 al final
    const formattedISO = isoString.replace('.000Z', '.000+00:00');
    
    return formattedISO;
  }