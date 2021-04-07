const dateOfBirth = new Date(1983, 6, 6);

const longVersion = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
const shortVersion = {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
};

const dutchDateLong = dateOfBirth.toLocaleDateString('nl-NL', longVersion);
console.log(dutchDateLong)
const dutchDateShort = dateOfBirth.toLocaleDateString('nl-NL', shortVersion);
console.log(dutchDateShort)
