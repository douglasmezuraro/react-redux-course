export const CURRENCY_FORMATTER = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL',
});

export const getMonthName = month => {
	const date = new Date();
	date.setMonth(month - 1);
	const monthName = date.toLocaleString('default', { month: 'long' });
	return monthName && monthName[0].toUpperCase() + monthName.slice(1);
};

export const sum = (t, v) => t + v;
