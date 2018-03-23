import pluralize from 'pluralize';

export function formatTemperature(value) {
  return value + ' °C';
}

export function formatDays(value) {
  return value + ' ' + pluralize('day', value);
}
