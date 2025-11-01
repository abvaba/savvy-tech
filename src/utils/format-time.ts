const formatTime = (dateString: string): string => {
  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return 'Invalid Time';
    }

    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  } catch (error) {
    console.error('Error formatting time:', error);
    return 'Invalid Time';
  }
};

export {formatTime};
