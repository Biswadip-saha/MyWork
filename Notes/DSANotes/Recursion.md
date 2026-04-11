# Recursion

-   Function calling itself is called Recursion.
-   There must be a "Base Condition" which will terminate the calling of the Recursion otherwise it will be an infinite calling.
-   Recursive functions are memory consuming.

## Tracing

Example 1:

```C
#include <stdio.h>

void fun1(int n){
    if(n > 0){
        printf("%d", n);
        fun1(n-1);
    }
}

void main(){
    int x = 3;
    fun1(x);
}

// Trace :-

fun1(3)
|     |
3     fun1(2)
      |     |
      2     fun1(1)
            |     |
            1     fun1(0)
                     |
                     X
// Output - 3 2 1
```

Example 2:

```C
#include <stdio.h>

void fun2(int n){
    if(n > 0){
        fun2(n-1);
        printf("%d", n);
    }
}

void main(){
    int x = 3;
    fun2(x);
}

// Trace :-

                  fun2(3)
                  |     |
            fun2(2)     3
            |     |
      fun2(1)     2
      |     |
fun2(0)     1
  |
  X
// Output - 1 2 3
```

## Time complexity of Recursive funtions

-   We assume every statement in a programme takes 1 unit of time.
-   From Ex 1 (above), its printing 3 times so taking 3 units of time for the value of n as 3. Therefore, it takes n unit of times. => O(n)
-   Another way,

### Recurrence relation

```
Let the function in Ex 1 take T(n) time, then,
Line 1 takes 1 unit of time.
Line 2 takes 1 unit of time.
Line 3 takes T(n-1) unit of time.
Total = T(n) = T(n-1) + 2
Recurrence relation : T(n) = 1          , n=0
                           = T(n-1) + 2 , n>0
```

If we solve this using "Induction method" or "Successive substitution method" we can get the order of the function.

-   Take the constants in the relation as 1 for simplicity.

```
T(n) = T(n-1) + 1
T(n) = T(n-2) + 2
T(n) = T(n-2) + 2
.
.
.
T(n) = T(n-k) + k

Since, we know T(0) = 1,
Assume n-k = 0 => n = k,
T(n) = T(0) + n
T(n) = 1 + n

Therefore, Time complexity or the order is = O(n)
```

# Types of Recursion

## 1. Tail Recursion

-   If a recursive function is calling itself at the last statement of the function.

```C
void fun(int n){
    if(n>0){
        printf("%d", n);
        fun(n-1);
    }
}
fun(3);
```

Conversion to loop:

```C
void fun(int n){
    while(n>0){
        printf("%d", n);
        n--;
    }
}
fun(3);
```

## 2. Head Recursion

-   If a recursive function is calling itself at the first statement of the function.

```C
void fun(int n){
    if(n>0){
        fun(n-1);
        printf("%d", n);
    }
}
fun(3);
```

Conversion to loop:

```C
void fun(int n){
    int i=0;
    while(i<=n>){
        printf("%d", i);
        i++;
    }
}
fun(3);
```

## 3. Tree Recursion

-   A function calling itself multiple times.

Example :

```C
void fun(int n){
    if(n>0){
        printf("%d", n);
        fun(n-1);
        fun(n-1);
    }
}
fun(3);

// Trace :-

----fun(3)------------------------
|     |                          |
3   fun(2)                     fun(2)
    | | |                      | | |
   /  |  \                    /  |  \
  /   |   \                  /   |   \
 2  fun(1) fun(1)-------    2  fun(1) fun(1)-------
    | | |  |     |     |       | | |  |     |     |
   /  |  \ 1   fun(0) fun(0)  /  |  \ 1   fun(0) fun(0)
  /   |   \        |     |   /   |   \        |     |
 1  fun(0) fun(0)  X     X  1  fun(0) fun(0)  X     X
      |      |                   |      |
      |      |                   |      |
      X      X                   X      X
```

-   Time complexity of the given Ex is = 2^(n+1) - 1 = O(2^n)
-   Space complexity is = O(n) (Height of the tree ie 4 or n+1)

## 4. Indirect Recursion

-   A circular manner of calling functions. eg. funcA calls funcB, which then calls funcC, which in turn calls funcA.

Example :-

```C
void funA(int n){
    if(n>0){
        printf("%d", n);
        funB(n-1);
    }
}

void funB(int n){
    if(n>1){
        printf("%d", n);
        funA(n/2);
    }
}

funA(20)

// Trace :-

funA(20)
|      |
20     funB(19)
       |      |
       19     funA(9)
              |     |
              9     funB(8)
                    |     |
                    8     funA(4)
                          |     |
                          4     funB(3)
                                |     |
                                3     funA(1)
                                      |     |
                                      1     funB(0)
                                              |
                                              X
```

## 5. Nested Recursion

-   A recursive function will pass parameter as a recursive call.

Example :-

```C
int fun(int n){
    if(n>100){
        return n-10;
    }else{
        return fun(fun(n+11));
    }
}

fun(95)

// Trace :-

fun(95) = 91
  |
fun(fun(95+11))  -> 96  = fun(106)
  |
fun(96)
  |
fun(fun(96+11))  -> 97  = fun(107)
  |
fun(97)
  |
fun(fun(97+11))  -> 98  = fun(108)
  |
fun(98)
  |
fun(fun(98+11))  -> 99  = fun(109)
  |
fun(99)
  |
fun(fun(99+11))  -> 100 = fun(110)
  |
fun(100)
  |
fun(fun(100+11)) -> 101 = fun(111)
  |
fun(101)
  |
  91
```

# Popular Questions / Ways

## Sum of first 'n' natural numbers

```C
// Way 1:-
int sum(int n){
    if(n == 0) return 0;
    else return (sum(n-1) + n);
}

// Way 2:-
int sum(int n){
    int i, s=0;
    for(i=1; i<=n; i++){
        s = s+1;
    }
    return s;
}

// Way 3:-
int sum(int n){
    return (n*(n+1))/2;
}
```

## Fatorial of a given number

```C
// Way 1:-
int fact(int n){
    if(n == 0) return 1;
    else fact(n-1)*n;
}

// Way 2:-
int fact(int n){
    int f = 1;
    int i;
    for(i=1; i<=n; i++) f = f*i;
    return f;
}
```

## Exponent of a number

```C
// Way 1:-
int pow(int m, int n){
    if(n == 0) return 1;
    return pow(m, n-1)*m;
}

// Way 2:-
int pow(int m, int n){
    if(n == 0) return 0;
    if(n%2 == 0) return pow(m*m, n/2);
    else return m*pow(m*m, (n-1)/2);
}
```

## Taylor series (e^x)

```C
// Way 1:-
double e(int x, int n){
    static double P=1, F=1;
    double r;
    if(n == 0) return 1;
    else{
        r = e(x, n-1);
        P = P*x;
        F = F*n;
        return r+(P/F);
    }
}
// No. of multiplication required is - O(n^2)

// Way 2:-
double e(int x, int n){
    double s = 1;
    for(n; n>0; n--){
        s = 1+((x/n)*s);
    }
    return s;
}
// OR
double e(int x, int n){
    static double s = 1;
    if(n == 0) return s;
    s = 1+((x/n)*s);
    return e(x,n-1);
}
// No. of multiplication required is - O(n)
```

## Fibonacci series

```C
// Way 1:-
int fib(int n){
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
// Time - O(2^n)

// Way 2:-
int fib(int n){
    int t0 = 0, t1 = 1, s, i;
    if(n <= 1) return n;
    for(i=2; i<n; i++){
        s = t0 + t1;
        t0 = t1;
        t1 = s;
    }
    return s;
}
// Time - O(n)

// Way 3 (Memoization):-
int f[10];

int fib(int n){
    if(n<=1){
        f[n] = n;
        return(n);
    }else{
        if(f[n-2] == -1) f[n-2] = fib(n-2);
        if(f[n-1] == -1) f[n-1] = fib(n-1);
        f[n] = f[n-2] + f[n-1];
        return f[n];
    }
}

int main(){
    int i;
    for(i=0; i<10; i++) f[i] = -1;

    printf("%d", fib(5));
    return 0;
}
// Time - O(n)
```

## Combination(nCr) Using Recursion

```C
// Way 1:-
int C(int n, int r){
    int t1, t2, t3;
    t1 = fact(n);
    t2 = fact(r);
    t3 = fact(n-r);

    return (t1/(t2*t3));
}
// Time - O(n)

// Way 2 (Pascal's Triangle):-
int C(int n, int r){
    if(r == 0 || n == r) return 1;
    else return C(n-1, r-1) + C(n-1, r);
}
```

## Tower of Hanoi

```C
void TOH(int n, int A, int B, int C)
{
    if(n > 0){
        TOH(n-1, A, C, B);
        printf("(%d,%d)", A, C);
        TOH(n-1, B, A, C);
    }
}

int main(){
    TOH(4, 1, 2, 3);
    return 0;
}
```
