# Grokking-Algorithms
Study repo for Grokking Algorithms. Implemented in JavaScript

Hash Tables take in Average Case O(1) for search, insert, delete and for worst case O(n) for all of them.
In order to ensure you don't hit worst case scenario you must avoid collisions.
To avoid collisions you must have a low load factor and a good hash function.

To calculate the load factor the following formula can be used (No of Items in Hash Table / Total number of slots)
A good rule of thumb for the load factor is no more then 0.7. 
When this happens is good to resize the hash table twice the size

Hash function should have a good distribution. Should map all items as broadly as possible.

How to create a hash table? Well with a hash function and an array.
