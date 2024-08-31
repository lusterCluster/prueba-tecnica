export function isDateGreaterOrEqual(inputDate: string): boolean {
    // Validar el formato de la fecha de entrada
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(inputDate)) {
      throw new Error('Formato de fecha no válido. Usa yyyy-mm-dd.');
    }
  
    // Convertir la fecha de entrada a un objeto Date
    const [inputYear, inputMonth, inputDay] = inputDate.split('-').map(Number);
    const inputDateObj = new Date(inputYear, inputMonth - 1, inputDay);
  
    // Obtener la fecha actual sin la parte de tiempo
    const currentDateObj = new Date();
    currentDateObj.setHours(0, 0, 0, 0);
  
    // Comparar las fechas
    return inputDateObj >= currentDateObj;
  }
  
  export function isOneYearLater(startDate: string, endDate: string): boolean {
    // Validar el formato de las fechas de entrada
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(startDate) || !datePattern.test(endDate)) {
      throw new Error('Formato de fecha no válido. Usa yyyy-mm-dd.');
    }
  
    // Convertir las fechas de entrada a objetos Date
    const [startYear, startMonth, startDay] = startDate.split('-').map(Number);
    const [endYear, endMonth, endDay] = endDate.split('-').map(Number);
  
    const startDateObj = new Date(startYear, startMonth - 1, startDay);
    const endDateObj = new Date(endYear, endMonth - 1, endDay);
  
    // Crear una fecha que sea exactamente un año después de la fecha de inicio
    const oneYearLater = new Date(startDateObj);
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
  
    // Comparar las fechas (día, mes y año deben coincidir)
    return (
      endDateObj.getDate() === oneYearLater.getDate() &&
      endDateObj.getMonth() === oneYearLater.getMonth() &&
      endDateObj.getFullYear() === oneYearLater.getFullYear()
    );
  }
  