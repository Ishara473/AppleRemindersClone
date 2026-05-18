export async function getReminders() {
    const response = await fetch('http://10.245.175.167:3001/reminders');

    if (!response.ok) {
        throw new Error('Failed to fetch reminders');
    };

    return response.json();
}    