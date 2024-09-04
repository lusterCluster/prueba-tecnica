export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Get day, month and year
  const day = String(date.getDate()).padStart(2, "0"); // Asegura que tenga dos dígitos
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses en JavaScript son 0 indexados, por eso se suma 1
  const year = date.getFullYear();

  // Format DD/MM/YYYY
  return `${day}/${month}/${year}`;
}
export function convertToISOFormat(dateString: string): string {
  // split into día, mes y año
  const [day, month, year] = dateString.split("/").map(Number);

  // Convertimos la fecha a formato ISO con la hora en 00:00:00.000+00:00
  const date = new Date(year, month - 1, day);

  const isoString = date.toISOString();

  // Ajustar para que incluya +00:00 al final
  const formattedISO = isoString.replace(".000Z", ".000+00:00");

  return formattedISO;
}
export function toDate(isoString: string) {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate() + 1).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
