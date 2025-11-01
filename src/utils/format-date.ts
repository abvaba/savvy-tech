const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();

    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    return `${monthNames[month]} ${day}, ${year}`;
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
}

export {formatDate};
