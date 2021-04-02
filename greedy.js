let states = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);
const stations = {
    kone: new Set(['id', 'nv', 'ut']),
    ktwo: new Set(['wa', 'id', 'mt']),
    kthree: new Set(['or', 'nv', 'ca']),
    kfour: new Set(['nv', 'ut']),
    kfive: new Set(['ca', 'az'])
};
const finalStations = new Set();

while (states.size > 0) {
    let bestStation = null;
    let statesCovered = new Set();

    for (let station in stations) {
        if (stations.hasOwnProperty(station)) {
            const covered = new Set([...states].filter(state => stations[station].has(state)));
            if (covered.size > statesCovered.size) {
                statesCovered = covered;
                bestStation = station;
            }
        }
    }

    states = new Set([...states].filter(state => !statesCovered.has(state)));

    finalStations.add(bestStation);

}

console.log(finalStations);

// Greedy algorithm runtime is O(n^2)
// Exact Algorithm is O(2^n);

// 8.3 not greedy
// 8.4 not greedy
// 8.5 greedy

// travelling salesman and set covering are both NP complete problems. THey have something in common, you calculate every possible solution and pick the smallest shortes one.
// 8.6 NP-complete problem
// 8.7 NP-complete problem
// 8.8 NP-complete problem
