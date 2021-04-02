// Dynamic Programming works by solving subproblems and then builds up in solving the big problem.
// every dynamic programming starts with a grid
// Let's steal things now

// My knapsack has an x maximum which is 4 lb in this case
// Smallest item to put in knapsack is 1lb so we will start our grid like this

// rows are items to steal
// columns are spaces in knapsack

// ....   1 2 3 4
// guitar
// laptop
// stereo

// that's the starting grid

// first iteration is to take an instrument and decide if i can steal it or if it has room in the column

// ....   1    2    3    4
// guitar 1500 1500 1500 1500
// stereo 1500 1500 1500 3000
// laptop 1500 1500 2000 3500 L+G

// cell[i][j] = max of:
// ---- the previous max meaning value at cell[i-1][j]
// ---- value of current item + value of the remaining space meaning cell[i-1][j-item's weight]

// let's add one more item and iphone of 2000 weighted 1lb

// ....   1    2    3    4
// guitar 1500 1500 1500 1500
// stereo 1500 1500 1500 3000
// laptop 1500 1500 2000 3500 L+G
// iphone 2000 3500 3500 4000 I+L

// every iteration stores the max possible, values can't go down

// ....   1    2    3    4
// guitar 1500 1500 1500 1500
// stereo 1500 1500 1500 3000
// laptop 1500 1500 2000 3500 L+G
// iphone 2000 3500 3500 4000 I 1 +L 2000
// Mp3Pla 2000 3500 4500 I + G + Mp3


// Attraction           Time     Rating
// Westminster Abby     1/2 Day     7
// Globe Theater        1/2 Day     6
// National Gallery     1 Day       9
// British Museum       2 Days      9
// St. Paul's Cathedral 1/2 Day     8

//      1/2      1        11/2     2
//   W  7w       7w       7w       7w
//   GT 7w       13wg     13wg     13wg
//   NG 7w       13wg     16wn     22wgn
//   BM 7w       13wg     16wn     22wgn
//   SP 8sp      15wsp    21spgw   24wns

// Dynamic Programming works if the problems are discrete, meaning that sub problems don't depend on each other.


//          1    2   3   4   5   6
//  Water   x    x   10  10  10  10
//  Book    3    3   10  11  11  11
//  Food    3    9   10  11  19  20
//  Jacket  3    9   10  11  19  20
//  Camera  6    9   10  16  19  25 water food and camera

// Dynamic Programming works when you try to optimize something given a constraint. In the knapsack problem you would need to maximize the value given the constraint of bag space
// You can use dynamic programming when the problem can be broken into discrete sub problems and they don't depend on each other

