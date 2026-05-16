export function drawUniqueCards(amount: number): number[] {

    const numbers = Array.from(
        { length: 78 },
        (_, i) => i
    );

    const drawn: number[] = [];

    while (drawn.length < amount) {

        const randomIndex =
            Math.floor(Math.random() * numbers.length);

        const selected =
            numbers.splice(randomIndex, 1)[0];

        drawn.push(selected);
    }

    return drawn;
}